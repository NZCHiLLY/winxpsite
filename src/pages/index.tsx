import Head from "next/head";
import { Inter } from "next/font/google";
import StartBar from "components/StartBar/StartBar";
import "xp.css/dist/XP.css";
import styles from "../styles/Home.module.css";
import DesktopIcon from "components/DesktopIcon/DesktopIcon";
import mycomputer from "../../assets/mycomputer.png";
import bin from "../../assets/recycling_bin.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import solitare from "../../assets/solitaire.png";
import linkedin from "../../assets/linkedin.png";
import WinForm from "components/WinForm/WinForm";
import { useEffect, useState } from "react";
import store from "@/redux/store";
import { AppDirectory } from "@/appData";
import { App, RootState, Tab } from "@/types";
import { addTab } from "@/redux/tabSlice";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Outlook from "@/programs/Outlook";
import MyWork from "@/programs/MyWork";
import MsgBox from "components/MsgBox/MsgBox";
import Welcome from "@/programs/Welcome";
import Skills from "@/programs/Skills";
import Pinball from "@/programs/Pinball";
export default function Home() {
  const Tabs = useSelector((state: RootState) => state.tab.tray);
  const currTabID = useSelector((state: RootState) => state.tab.id);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };

  const handleOpenGitHub = () => {
    window.open("https://github.com/NZCHiLLY", "_blank", "noreferrer");
  };

  const handleOpenLinkedin = () => {
    window.open(
      "https://www.linkedin.com/",
      "_blank",
      "noreferrer"
    );
  };

  return (
    <>
      <Head>
        <title>Jayson&apos;s Personal Website - Home Page</title>
        <meta name="description" content="Jayson Chilman — Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <DesktopIcon
            appID={1}
            doubleClick={() => handleRunApp(2)}
            title="Projects"
            img={cmd}
          />
          <DesktopIcon
            appID={2}
            doubleClick={() => handleRunApp(3)}
            title="Skills"
            img={mycomputer}
          />
          <DesktopIcon
            appID={3}
            doubleClick={() => handleRunApp(1)}
            title="Contact"
            img={linkedin}
          />
          <DesktopIcon
            appID={4}
            doubleClick={() => handleRunApp(9)}
            title="Pinball"
            img={solitare}
          />
          <DesktopIcon
            appID={5}
            doubleClick={handleOpenGitHub}
            title="GitHub"
            img={github}
          />
          <DesktopIcon
            appID={7}
            doubleClick={() => {
              store.dispatch(
                addTab({
                  ...AppDirectory.get(7),
                  id: uuidv4(),
                  zIndex: currTabID,
                  title: "Recycle Bin",
                  message:
                    "Cannot empty Recycle Bin. It holds the hopes, dreams, and failed build artifacts of a thousand past projects. Some things are better left untouched.",
                })
              );
            }}
            title="Recycle Bin"
            img={bin}
          />
          {Tabs.map((tab, index) => {
            return tab.isMinimized ? (
              <></>
            ) : (
              <WinForm
                key={tab.id}
                id={tab.id}
                title={tab.title}
                message={tab.message}
                icon={tab.Icon}
                zIndex={tab.zIndex}
                programType={tab.program}
                prompt={tab.prompt}
              >
                {tab.program === App.MYWORK ? (
                  <MyWork id={tab.id} />
                ) : tab.program === App.OUTLOOK ? (
                  <Outlook />
                ) : tab.program === App.WELCOME ? (
                  <Welcome id={tab.id} />
                ) : tab.program === App.SKILLS ? (
                  <Skills />
                ) : tab.program === App.PINBALL ? (
                  <Pinball />
                ) : tab.program === App.ERROR ? (
                  <p>{tab.message}</p>
                ) : tab.program === App.INFO ? (
                  <MsgBox id={tab.id} message={tab.message} icon={tab.Icon} />
                ) : tab.program === App.WARNING ? (
                  <p>{tab.message}</p>
                ) : tab.program === App.HELP ? (
                  <p>{tab.message}</p>
                ) : null}
              </WinForm>
            );
          })}
        </div>
        <StartBar />
      </main>
    </>
  );
}
