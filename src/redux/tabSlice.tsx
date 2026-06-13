import { AppDirectory } from "@/appData";
import { App, Tab } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import help from "../../assets/dialog/help.png";

// Redux Reducer for Tab/Windows State Management
export const tabtraySlice = createSlice({
  name: "tab",
  initialState: {
    tray: [
      {
        id: 0,
        title: "Quick Start Guide",
        message: "",
        Icon: help,
        isMinimized: false,
        zIndex: 0,
        program: App.WELCOME,
        prompt: false,
        backBtnActive: false,
        cascade: 0,
      },
    ] as Tab[],
    id: 1,
    currentFocusedTab: 0,
    currentZIndex: 1,
    nextCascade: 0,
  },
  reducers: {
    addTab: (state, action) => {
      const cascadeIndex = action.payload.prompt ? 0 : state.nextCascade;
      const newTab = {
        ...action.payload,
        zIndex: state.currentZIndex,
        cascade: cascadeIndex,
      };
      state.tray.push(newTab);
      state.currentFocusedTab = newTab.id;
      state.id = state.id + 1;
      state.currentZIndex = state.currentZIndex + 1;
      if (!newTab.prompt) {
        state.nextCascade = (state.nextCascade + 1) % 8;
      }
    },
    removeTab: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      state.tray = state.tray.filter((_, i) => {
        return i !== index;
      });
    },
    minimizeTab: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      state.tray[index].isMinimized = true;
    },
    maximizeTab: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      state.tray[index].isMinimized = false;
    },
    setFocusedTab: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      if (index !== -1 && state.currentFocusedTab !== state.tray[index].id) {
        state.currentZIndex = state.currentZIndex + 1;
        state.tray[index].zIndex = state.currentZIndex;
      }
      state.currentFocusedTab = action.payload.id;
    },
    setBackBtn: (state, action) => {
      const index = state.tray.findIndex((tab) => tab.id === action.payload.id);
      state.tray[index].backBtnActive = action.payload.backBtnActive;
    },
  },
});

export const {
  addTab,
  removeTab,
  minimizeTab,
  maximizeTab,
  setFocusedTab,
  setBackBtn,
} = tabtraySlice.actions;
export default tabtraySlice.reducer;
