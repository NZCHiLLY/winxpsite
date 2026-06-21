import { StaticImageData } from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import Draggable from "react-draggable";
import styles from "./DesktopIcon.module.css";
import Image from "next/image";

const GRID = 80;
const ICONS_PER_COLUMN = 16;

const getInitialPosition = (gridIndex: number) => {
  const col = Math.floor(gridIndex / ICONS_PER_COLUMN);
  const row = gridIndex % ICONS_PER_COLUMN;
  return { x: col * GRID, y: row * GRID };
};

const DesktopIcon = (props: {
  title: string;
  img: StaticImageData;
  appID: number;
  gridIndex: number;
  doubleClick: () => void;
}) => {
  const [selected, setSelected] = useState(false);
  const [pos, setPos] = useState(getInitialPosition(props.gridIndex));
  const ref = useRef<HTMLDivElement>(null);
  const wasDragged = useRef(false);

  const handleClick = () => {
    if (!wasDragged.current) {
      setSelected(!selected);
    }
    wasDragged.current = false;
  };

  const handleDrag = (_e: any, data: { x: number; y: number }) => {
    wasDragged.current = true;
    setPos({ x: data.x, y: data.y });
  };

  const handleStop = (_e: any, data: { x: number; y: number }) => {
    setPos({
      x: Math.round(data.x / GRID) * GRID,
      y: Math.round(data.y / GRID) * GRID,
    });
  };

  const handleClickOutside = useCallback((event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSelected(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Draggable
      nodeRef={ref}
      bounds="parent"
      position={pos}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <div
        onDoubleClick={props.doubleClick}
        onClick={handleClick}
        className={styles.icon}
        ref={ref}
      >
        <div>
          <div
            className={selected ? styles.iconimage_selected : styles.iconimage}
          >
            <Image
              width={45}
              height={45}
              style={{ maxWidth: "100%" }}
              src={props.img.src}
              alt="icon"
              priority={false}
              loading="lazy"
            />
          </div>
        </div>
        <div
          className={selected ? styles.iconlabel_selected : styles.iconlabel}
        >
          <p>{props.title}</p>
        </div>
      </div>
    </Draggable>
  );
};

export default DesktopIcon;
