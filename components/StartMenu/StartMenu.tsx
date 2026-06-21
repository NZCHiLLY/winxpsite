import styles from "./StartMenu.module.css";
import users from "../../assets/users.png";
import folder from "../../assets/folder_plain.png";
import StartMenuItem from "components/StartMenuItem/StartMenuItem";
import recentdoc from "../../assets/recentdoc.png";
import mycomputer from "../../assets/mycomputer.png";
import folder_image from "../../assets/folder_image.png";
import folder_music from "../../assets/folder_music.png";
import clipboard from "../../assets/clipboard.png";
import help from "../../assets/help.png";
import search from "../../assets/search.png";
import run from "../../assets/run.png";
import outlook from "../../assets/outlook.png";
import ie from "../../assets/ie.png";
import linkedin from "../../assets/linkedin.png";
import cmd from "../../assets/cmd.png";
import paint from "../../assets/paint.png";
import pinball from "../../assets/pinball.png";
import arrow from "../../assets/all-programs.ico";
import logoff from "../../assets/logoff.png";
import shutdown from "../../assets/shutdown.png";
import defaultprog from "../../assets/defaultprog.png";
import printerfax from "../../assets/printerfax.png";
import { AppDirectory } from "@/appData";
import { addTab } from "@/redux/tabSlice";
import store from "@/redux/store";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface StartMenuProps {
  menuControl: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartMenu = ({ menuControl }: StartMenuProps) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);

  const handleOpenDialog = (title: string, message: string) => {
    menuControl(false);
    const dialogTab = {
      ...AppDirectory.get(7),
      id: uuidv4(),
      zIndex: currTabID,
      title,
      message,
    };
    store.dispatch(addTab(dialogTab));
  };

  const handleOpenLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/jayson-chilman/",
      "_blank",
      "noreferrer"
    );
  };

  const handleRunApp = (e: number) => {
    menuControl(false);
    const newTab = { ...AppDirectory.get(e), id: uuidv4() };
    store.dispatch(addTab(newTab));
  };
  return (
    <div className={styles.startmenu}>
      <hr className={styles.whitehr} />
      <div className={styles.menutopbar}>
        <Image
          alt="userprofile"
          src={users.src}
          width={55}
          height={55}
          style={{
            border: "2px",
            borderStyle: "solid",
            borderRadius: "3px",
            borderColor: "rgba(222, 222, 222, 0.8)",
            boxShadow: "0 0 3px 3px rgba(0, 0, 0, 0.2)",
            margin: "0 5px 0 5px",
          }}
        />
        <p
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "white",
            textShadow: "1px 1px #000000",
          }}
        >
          Jayson&apos;s PC
        </p>
      </div>
      <hr className={styles.orangehr} />
      <div className={styles.menu}>
        <div className={styles.leftmenu}>
          <div>
            <StartMenuItem
              onClick={handleOpenLinkedin}
              title="Internet"
              subtitle="Internet Explorer"
              icon={ie}
              type={1}
            />
            <StartMenuItem
              onClick={() => handleRunApp(1)}
              title="E-mail"
              subtitle="Outlook Express"
              icon={outlook}
              type={1}
            />
            <hr className={styles.greyhr} />
            <StartMenuItem
              onClick={() => handleRunApp(0)}
              title="About Me"
              icon={help}
              type={2}
            />
            <StartMenuItem
              onClick={() => handleRunApp(2)}
              title="Projects"
              icon={cmd}
              type={2}
            />
            <StartMenuItem
              onClick={() => handleRunApp(3)}
              title="Skills"
              icon={mycomputer}
              type={2}
            />
            <StartMenuItem
              onClick={() => handleRunApp(10)}
              title="Experience"
              icon={folder_image}
              type={2}
            />
            <StartMenuItem
              onClick={() => handleRunApp(9)}
              title="Pinball"
              icon={pinball}
              type={2}
            />
            <hr className={styles.greyhr} />
            <StartMenuItem
              onClick={handleOpenLinkedin}
              title="My LinkedIn"
              icon={linkedin}
              type={2}
            />
            <StartMenuItem
              onClick={() => handleOpenDialog("Paint", "Paint requires 256-colour mode and a steady hand. Your mouse appears to be calibrated for spreadsheet work. Please try again after coffee.")}
              title="Paint"
              icon={paint}
              type={2}
            />
          </div>
          <div>
            <hr className={styles.greyhr} />
            <div className={styles.allprograms}>
              All Programs
              <Image
                height={15}
                width={15}
                alt="arrow"
                style={{ marginLeft: "4px" }}
                src={arrow.src}
              />
            </div>
          </div>
        </div>
        <div className={styles.rightmenu}>
          <StartMenuItem
            onClick={() => handleRunApp(2)}
            title="My Documents"
            icon={folder}
            type={3}
          />
          <StartMenuItem
            onClick={() => handleRunApp(0)}
            title="My Recent Documents"
            icon={recentdoc}
            type={3}
            expanded={true}
          />
          <StartMenuItem
            onClick={() =>
              handleOpenDialog(
                "My Pictures",
                "No pictures found. This folder is as empty as a freshly formatted floppy disk."
              )
            }
            title="My Pictures"
            icon={folder_image}
            type={3}
          />
          <StartMenuItem
            onClick={() =>
              handleOpenDialog(
                "My Music",
                "Windows Media Player could not find any music. Try inserting a CD-ROM or connecting to a 56k modem and firing up Napster."
              )
            }
            title="My Music"
            icon={folder_music}
            type={3}
          />
          <StartMenuItem
            onClick={() => handleRunApp(3)}
            title="My Computer"
            icon={mycomputer}
            type={3}
          />
          <hr className={styles.bluehr} />
          <StartMenuItem
            onClick={() => handleRunApp(3)}
            title="Control Panel"
            icon={clipboard}
            type={4}
          />
          <StartMenuItem
            onClick={() =>
              handleOpenDialog(
                "Set Program Access and Defaults",
                "All program defaults are already set to Awesome™. No further configuration is required."
              )
            }
            title="Set Program Access and Defaults"
            icon={defaultprog}
            type={4}
          />
          <StartMenuItem
            onClick={() =>
              handleOpenDialog(
                "Printer and Faxes",
                "No printers or fax machines detected. This is the paperless future you were promised in 2001."
              )
            }
            title="Printer and Faxes"
            icon={printerfax}
            type={4}
          />
          <hr className={styles.bluehr} />
          <StartMenuItem
            onClick={() => handleRunApp(0)}
            title="Help and Support"
            icon={help}
            type={4}
          />
          <StartMenuItem
            onClick={() =>
              handleOpenDialog(
                "Search Results",
                "Search is indexing your files. Estimated time remaining: 23 years. Windows XP Search companion (the dog) has retired and moved to Florida."
              )
            }
            title="Search"
            icon={search}
            type={4}
          />
          <StartMenuItem
            onClick={() =>
              handleOpenDialog(
                "Run",
                "Type the name of a program, folder, document, or Internet resource, and Windows will open it for you.\n\nJust kidding. This is a website."
              )
            }
            title="Run..."
            icon={run}
            type={4}
          />
        </div>
      </div>
      <div className={styles.menubtmbar}>
        <div
          className={styles.systemBtn}
          onClick={() =>
            handleOpenDialog(
              "Log Off Windows",
              "Are you sure you want to log off? Your programs will remain open and your unsaved progress will haunt you in your dreams."
            )
          }
        >
          <Image
            width={30}
            height={30}
            alt=""
            className={styles.systemBtnIcon}
            src={logoff.src}
          />
          Log Off
        </div>
        <div
          className={styles.systemBtn}
          onClick={() =>
            handleOpenDialog(
              "Turn Off Computer",
              "It is now safe to turn off your computer.\n\nBut please don't. We're having too much fun."
            )
          }
        >
          <Image
            width={30}
            height={30}
            alt=""
            className={styles.systemBtnIcon}
            src={shutdown.src}
          />
          Turn Off Computer
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
