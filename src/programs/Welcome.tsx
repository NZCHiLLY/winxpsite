import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import users from "../../assets/users.png";
import butterfly from "../../assets/butterfly.png";
import doc from "../../assets/doc.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";

const INTRO = `Hi, I'm Jayson, a software developer based in New Zealand. I build web applications,
tools, and platforms with a focus on clean architecture and great user experiences.`;

const WHYSITE = `This website is a tribute to the Windows XP era — the operating system where I first
started tinkering with computers. Every detail from the title bar gradients to the Start menu is
designed to feel like you're sitting at an XP desktop. It's a fun way to present a portfolio that
stands out from the usual template-driven sites.`;

const INTERESTS = `Outside of software, I enjoy exploring the outdoors — hiking, trail running, and
making the most of New Zealand's landscapes. I'm also into retro computing, classic games, and
building things that combine nostalgia with modern web technology.`;

const INTERESTS2 = `When I'm not coding or outdoors, you'll find me reading about system design,
experimenting with new frameworks, or tinkering with hardware projects. I believe the best software
comes from understanding both the stack and the people using it.`;

interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };
  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };
  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);
  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Welcome To Jayson&apos;s Personal Website
          </h3>
          <p className={styles.subtitle}>
            Learn more by clicking any of the icons below to get started!
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"About Me"}
                tooltip="Who am I?"
                onClick={handleSwitchView}
              />
              <WelcomeIcon
                img={github}
                text={"My GitHub"}
                tooltip="Open source projects"
                onClick={() => {
                  window.open(
                    "https://github.com/NZCHiLLY",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={linkedin}
                text={"My LinkedIn"}
                tooltip="Connect with me"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
            </div>
            <div className={styles.rightpanel}>
              <WelcomeIcon
                img={cmd}
                text={"Projects"}
                tooltip="See what I've built"
                onClick={() => handleRunApp(2)}
              />
              <WelcomeIcon
                img={outlook}
                text={"Contact Me"}
                tooltip="Send me a message"
                onClick={() => handleRunApp(1)}
              />
              <WelcomeIcon
                img={doc}
                text={"Skills"}
                tooltip="Technologies I use"
                onClick={() => handleRunApp(3)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>About Me</h3>
          <div className={styles.content}>
            <div className={styles.pic_col}>
              <Image
                alt="profile placeholder"
                src={users.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
            </div>
            <div className={styles.text_col}>
              <p className={styles.subtitle}>{INTRO}</p>
              <h3 className={styles.subtitle_header}>
                Why a site like this?
              </h3>
              <p className={styles.subtitle}>{WHYSITE}</p>
              <h3 className={styles.subtitle_header}>
                What else?
              </h3>
              <p className={styles.subtitle}>{INTERESTS}</p>
              <br />
              <p className={styles.subtitle}>{INTERESTS2}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
