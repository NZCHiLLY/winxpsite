import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import styles from "./WinForm.module.css";
import WinToolBar from "components/WinToolbar/WinToolBar";
import { StaticImageData } from "next/image";
import Image from "next/image";
import {
  maximizeTab,
  minimizeTab,
  removeTab,
  setFocusedTab,
} from "@/redux/tabSlice";
import store from "@/redux/store";
import { useSelector } from "react-redux";
import { App, RootState } from "@/types";

const unfocusedAdjustment = "brightness(1.05)";
const WinForm = (props: {
  id: number;
  title: string;
  message: string;
  children: ReactNode;
  icon: StaticImageData;
  zIndex: number;
  programType: App;
  prompt: boolean;
}) => {
  const [isMaximized, setMaximised] = useState(false);
  const [isMinimized, setMinimised] = useState(false);
  const [currX, setX] = useState(0);
  const [currY, setY] = useState(0);
  const [resizedWidth, setResizedWidth] = useState<number | null>(null);
  const [resizedHeight, setResizedHeight] = useState<number | null>(null);
  const isResizing = useRef(false);
  const resizeStart = useRef({ x: 0, y: 0, w: 0, h: 0 });
  const currTabID = useSelector(
    (state: RootState) => state.tab.currentFocusedTab
  );

  const handleResizeStart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const el = (e.currentTarget as HTMLElement).closest("[data-window]") as HTMLElement;
      if (!el) return;
      isResizing.current = true;
      resizeStart.current = {
        x: e.clientX,
        y: e.clientY,
        w: el.offsetWidth,
        h: el.offsetHeight,
      };
    },
    []
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      const dx = e.clientX - resizeStart.current.x;
      const dy = e.clientY - resizeStart.current.y;
      setResizedWidth(Math.max(400, resizeStart.current.w + dx));
      setResizedHeight(Math.max(300, resizeStart.current.h + dy));
    };
    const onMouseUp = () => {
      isResizing.current = false;
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const handleMaximize = () => {
    setMaximised(!isMaximized);
    if (!isMaximized) {
      setResizedWidth(null);
      setResizedHeight(null);
    }
    store.dispatch(maximizeTab({ id: props.id }));
    store.dispatch(setFocusedTab({ id: props.id }));
  };
  const handleMinimize = () => {
    setMinimised(!isMinimized);
    store.dispatch(minimizeTab({ id: props.id }));
    store.dispatch(setFocusedTab({ id: -1 }));
  };

  const handleClose = () => {
    store.dispatch(removeTab({ id: props.id }));
  };
  const handleStop = (event: any, dragElement: any) => {
    setX(dragElement.x);
    setY(dragElement.y);
  };
  let draggableProps;

  if (isMaximized) {
    draggableProps = {
      position: { x: 0, y: 0 },
      handle: ".handle",
      bounds: "parent",
    };
  } else {
    draggableProps = {
      defaultPosition: { x: currX, y: currY },
      handle: ".handle",
      bounds: "parent",
      onStop: handleStop,
    };
  }
  const promptDisplay = "inline";
  const promptWidth = "450px";
  const promptHeight = "auto";
  const normalDisplay = isMinimized ? "none" : "inline";
  const normalWidth = isMaximized
    ? "100%"
    : resizedWidth
    ? `${resizedWidth}px`
    : "750px";
  const normalHeight = isMaximized
    ? "calc(100% - 40px)"
    : resizedHeight
    ? `${resizedHeight}px`
    : "75%";
  return (
    <Draggable {...draggableProps}>
      <div
        data-window
        style={{
          top: isMaximized ? "0" : "10%",
          left: isMaximized ? "0" : "20%",
          bottom: isMaximized ? "20px" : "",
          position: "absolute",
          display: props.prompt ? promptDisplay : normalDisplay,
          width: props.prompt ? promptWidth : normalWidth,
          height: props.prompt ? promptHeight : normalHeight,
          zIndex: props.zIndex,
        }}
        className={styles.window}
      >
        <div
          onMouseDown={() => {
            store.dispatch(setFocusedTab({ id: props.id }));
          }}
          className={
            currTabID == props.id ? styles.titlebar : styles.titlebar_unfocused
          }
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
            className="handle"
          >
            {!props.prompt && (
              <Image
                width={20}
                height={20}
                alt="icon"
                src={props.icon.src}
                className={styles.icon}
              />
            )}
            <div className={styles.title}>{props.title}</div>
          </div>
          <div className={styles.titlecontrols}>
            {!props.prompt && (
              <div
                onClick={handleMinimize}
                style={{
                  filter: currTabID == props.id ? "" : unfocusedAdjustment,
                }}
                className={styles.minimise}
              />
            )}
            {!props.prompt && (
              <div
                onClick={handleMaximize}
                style={{
                  filter: currTabID == props.id ? "" : unfocusedAdjustment,
                }}
                className={isMaximized ? styles.resize : styles.maximise}
              />
            )}
            <div
              onClick={handleClose}
              style={{
                filter: currTabID == props.id ? "" : unfocusedAdjustment,
              }}
              className={styles.close}
            />
          </div>
        </div>
        <div
          onMouseDown={() => {
            store.dispatch(setFocusedTab({ id: props.id }));
          }}
          className={
            currTabID == props.id
              ? styles.windowborder
              : styles.windowborder_unfocused
          }
        >
          <div className={styles.windowsbody}>
            {!props.prompt && (
              <WinToolBar
                title={props.title}
                icon={props.icon}
                programType={props.programType}
                id={props.id}
              />
            )}
            {props.children}
          </div>
        </div>
        {!isMaximized && !props.prompt && (
          <div
            className={styles.resizeGrip}
            onMouseDown={handleResizeStart}
          />
        )}
      </div>
    </Draggable>
  );
};
export default WinForm;
