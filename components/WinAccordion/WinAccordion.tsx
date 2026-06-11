import React, { Children, Dispatch, SetStateAction, useState } from "react";
import styles from "./WinAccordion.module.css";
import folderOpen from "../../assets/toolbar/folders.png";
import folderIcon from "../../assets/toolbar/folder.png";
import Image from "next/image";
import { WorkAccordionContent } from "@/appData";
import { WorkContent, WorkType } from "@/types";
interface props {
  title: WorkType | string;
  children: React.ReactNode;
}

const WinAccordion = ({ title, children }: props) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={styles.accordion}>
      <div
        className={styles.accordion_title}
        onClick={() => setIsActive(!isActive)}
      >
        <p className={styles.title_text}>{title}</p>
        <div>
          {isActive ? (
            <Image
              alt="accordion open"
              src={folderOpen.src}
              height={20}
              width={20}
            />
          ) : (
            <Image
              alt="accordion closed"
              src={folderIcon.src}
              height={20}
              width={20}
            />
          )}
        </div>
      </div>
      {isActive && <div className={styles.accordion_content}>{children}</div>}
    </div>
  );
};

export default WinAccordion;
