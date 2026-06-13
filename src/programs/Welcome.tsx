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

const INTRO = `I'm a technology generalist based in New Zealand. My career started with freelance IT
support at 17 and grew into architecting private clouds, multi-tenant voice platforms, and AI-powered
automation. I work across the full stack, from bare-metal servers and network infrastructure through
to TypeScript, Python, and LLM systems. I believe the best technology comes from understanding every
layer between the user and the silicon.`;

const WHYSITE = `This website is a tribute to the Windows XP era — the operating system where I first
started tinkering with computers. Every detail from the title bar gradients to the Start menu is
designed to feel like you're sitting at an XP desktop. It's a fun way to present a portfolio that
stands out from the usual template-driven sites.`;

const INTERESTS = `Outside of technology, I make the most of New Zealand's outdoors — hiking, trail
running, and exploring the backcountry. I have a soft spot for retro computing and classic games,
which is part of why this site exists. I'm drawn to projects that combine nostalgia with modern
engineering.`;

const INTERESTS2 = `When I'm not outdoors or at a keyboard, I'm usually reading about AI and system
design, experimenting with language models, or tinkering with hardware. I went back to first
principles to study how transformers actually work, and I'm fascinated by the intersection of
infrastructure, automation, and machine intelligence. I also care about the commercial side —
how technology creates value, not just how it works.`;

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
