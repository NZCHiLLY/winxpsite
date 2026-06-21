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

const MIN_WINDOW_W = 550;
const MIN_WINDOW_H = 400;
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
  defaultWidth?: string;
  defaultHeight?: string;
}) => {
  const [isMaximized, setMaximised] = useState(false);
  const [isMinimized, setMinimised] = useState(false);
  const [currX, setX] = useState(0);
  const [currY, setY] = useState(0);
  const [resizedWidth, setResizedWidth] = useState<number | null>(null);
  const [resizedHeight, setResizedHeight] = useState<number | null>(null);
  const isResizing = useRef(false);
  const resizeStart = useRef({ x: 0, y: 0, w: 0, h: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const currTabID = useSelector(
    (state: RootState) => state.tab.currentFocusedTab
  );
  const cascadeIndex = useSelector((state: RootState) => {
    const idx = state.tab.tray.findIndex((t) => t.id === props.id);
    return idx !== -1 ? state.tab.tray[idx].cascade : 0;
  });

  const TASKBAR_H = 35;

  const getDesktopBounds = useCallback(() => {
    const el = windowRef.current;
    if (!el) return null;
    const parent = el.offsetParent as HTMLElement;
    if (!parent) return null;
    const parentRect = parent.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
      maxRight: parentRect.width - (elRect.left - parentRect.left),
      maxBottom: parentRect.height - (elRect.top - parentRect.top) - TASKBAR_H,
    };
  }, []);

  const getDragBounds = useCallback((): {
    left: number;
    top: number;
    right: number;
    bottom: number;
  } => {
    const el = windowRef.current;
    if (!el) return { left: 0, top: 0, right: 0, bottom: 0 };
    const parent = el.offsetParent as HTMLElement;
    if (!parent) return { left: 0, top: 0, right: 0, bottom: 0 };
    const parentW = parent.clientWidth;
    const parentH = parent.clientHeight;
    const elW = el.offsetWidth;
    const elH = el.offsetHeight;
    const elLeft = el.offsetLeft;
    const elTop = el.offsetTop;
    return {
      left: -elLeft,
      top: -elTop,
      right: Math.max(0, parentW - elLeft - elW),
      bottom: Math.max(0, parentH - elTop - elH - TASKBAR_H),
    };
  }, []);

  const [dragBounds, setDragBounds] = useState(getDragBounds);

  useEffect(() => {
    setDragBounds(getDragBounds());
  }, [resizedWidth, resizedHeight, isMaximized, getDragBounds]);

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
      const el = windowRef.current;
      if (!el) return;

      const bounds = getDesktopBounds();
      const dx = e.clientX - resizeStart.current.x;
      const dy = e.clientY - resizeStart.current.y;

      let newW = Math.max(MIN_WINDOW_W, resizeStart.current.w + dx);
      let newH = Math.max(MIN_WINDOW_H, resizeStart.current.h + dy);

      if (bounds) {
        newW = Math.min(newW, bounds.maxRight);
        newH = Math.min(newH, Math.max(bounds.maxBottom, MIN_WINDOW_H));
      }

      setResizedWidth(newW);
      setResizedHeight(newH);
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
  }, [getDesktopBounds]);

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
  const handleDragStop = (event: any, dragElement: any) => {
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
      position: { x: currX, y: currY },
      handle: ".handle",
      bounds: dragBounds,
      onStop: handleDragStop,
    };
  }

  const promptDisplay = "inline";
  const promptWidth = "450px";
  const promptHeight = "auto";
  const normalDisplay = isMinimized ? "none" : "flex";
  const normalWidth = isMaximized
    ? "100%"
    : resizedWidth
    ? `${resizedWidth}px`
    : props.defaultWidth ?? "750px";
  const normalHeight = isMaximized
    ? "calc(100vh - 75px)"
    : resizedHeight
    ? `${resizedHeight}px`
    : props.defaultHeight ?? "min(75vh, 600px)";

  return (
    <Draggable {...draggableProps}>
      <div
        ref={windowRef}
        data-window
        style={{
          top: isMaximized ? "0" : `${120 + cascadeIndex * 28}px`,
          left: isMaximized ? "0" : `${200 + cascadeIndex * 28}px`,
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
            {!props.prompt && props.programType !== App.PINBALL && (
              <WinToolBar
                title={props.title}
                icon={props.icon}
                programType={props.programType}
                id={props.id}
              />
            )}
            {props.children}
            {!isMaximized && !props.prompt && (
              <div
                className={styles.resizeGrip}
                onMouseDown={handleResizeStart}
              />
            )}
          </div>
        </div>
      </div>
    </Draggable>
  );
};
export default WinForm;
