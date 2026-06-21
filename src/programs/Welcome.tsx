import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import cmd from "../../assets/cmd.png";
import users from "../../assets/users.png";
import help from "../../assets/help.png";
import mycomputer from "../../assets/mycomputer.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";

const INTRO = `I lead IT for a New Zealand managed services provider, having worked up from network
engineer into senior leadership over nearly a decade. I design, build, and run the platforms the
business and its customers operate on: private cloud, unified communications, networks, and a cybersecurity
programme aligned to NZISM, HISO, and the Privacy Act. The portfolio spans organisations across
healthcare, education, legal, government, and industrial sectors. I have built and shipped AI and
automation into production: Power Automate pipelines, custom agentic AI skills, and a multi-agent MCP
server with intent-gated security. The commercial side came with the role: pricing, proposals, vendor
contracts, and translating technical ideas into language that makes sense to business owners and boards.`;

const WHYSITE = `The Windows XP era inspired a generation to explore computing. This site recreates that
experience, from the title bar gradients through to the Start menu. It is a portfolio that stands apart
from the usual template-driven sites.`;

const INTERESTS = `I build and tinker with AI pipelines: image, audio, and video generation, LLM orchestration,
vector memory, and agent-based automation. I make electronic music, design and prototype games, and run a
homelab with Proxmox, Docker, media servers, and custom networking on my own hardware. I have a soft spot
for retro computing and classic games, which is part of why this site exists.`;

const INTERESTS2 = `I build quality-of-life tools for friends and family: recipe apps, grocery indexers, book
converters, and mobile games. I studied how transformers work from first principles, and I work at the
intersection of infrastructure, automation, and machine intelligence. I care about the commercial side too:
how technology creates value, not just how it works.`;

interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector((state: RootState) => {
    const idx = state.tab.tray.findIndex((tab) => tab.id === id);
    return idx !== -1 ? state.tab.tray[idx].backBtnActive : false;
  });

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
                img={help}
                text={"About Me"}
                tooltip="Who am I?"
                onClick={handleSwitchView}
              />
              <WelcomeIcon
                img={mycomputer}
                text={"Skills"}
                tooltip="Technologies I use"
                onClick={() => handleRunApp(3)}
              />
              <WelcomeIcon
                img={linkedin}
                text={"My LinkedIn"}
                tooltip="Connect with me"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/jayson-chilman/",
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
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>About Me</h3>
          <div className={styles.content}>
            <div className={styles.pic_col}>
              <Image
                alt="Windows XP user icon"
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
