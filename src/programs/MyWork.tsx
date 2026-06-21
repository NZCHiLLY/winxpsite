import { TechIcon, WorkAccordionContent, WorkAccordionTitles } from "@/appData";
import { RootState, WorkContent } from "@/types";
import WinAccordion from "components/WinAccordion/WinAccordion";
import { useEffect, useState } from "react";
import styles from "./MyWork.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { setBackBtn } from "@/redux/tabSlice";
import store from "@/redux/store";
const loaderProp = ({ src }: any) => {
  return src;
};
interface Props {
  id: number;
}

const MyWork = ({ id }: Props) => {
  const [currDisplay, setCurrDisplay] = useState<WorkContent>({
    id: 0,
    title: "",
    date: "",
    gitURL: "",
    techstack: [],
    overview: "",
  });
  const backBtnActive = useSelector((state: RootState) => {
    const idx = state.tab.tray.findIndex((tab) => tab.id === id);
    return idx !== -1 ? state.tab.tray[idx].backBtnActive : false;
  });
  useEffect(() => {
    if (currDisplay.title !== "" && !backBtnActive) {
      store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
    }
  }, [currDisplay, backBtnActive, id]);
  useEffect(() => {
    if (!backBtnActive) {
      setCurrDisplay({
        id: 0,
        title: "",
        date: "",
        gitURL: "",
        techstack: [],
        overview: "",
      });
    }
  }, [backBtnActive]);
  return (
    <div className={styles.main}>
      <div className={styles.leftpanel}>
        <div>
          <div className={styles.accordion}>
            {WorkAccordionTitles.map((title, index) => (
              <WinAccordion key={index} title={title}>
                {WorkAccordionContent.filter((f) => f.type === title).map(
                  ({ title, icon, content }, index) => {
                    return (
                      <div
                        key={index}
                        className={styles.accordion_content_item}
                        onClick={() => setCurrDisplay(content)}
                      >
                        <div className={styles.accordion_content_text}>
                          <Image
                            alt="accordionbtn"
                            src={icon.src}
                            height={15}
                            width={15}
                          />
                          <p>{title}</p>
                        </div>
                      </div>
                    );
                  }
                )}
              </WinAccordion>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightpanel}>
        {currDisplay.title === "" ? (
          <div className={styles.body}>
            <h4>Welcome To My Portfolio Section</h4>
            <h5>
              Begin Navigation by clicking on one of my projects on the left
              panel
            </h5>
            <h5>These are some of the tech stacks I have experiences with!</h5>
            <div className={styles.content_tech}>
              {Object.values(TechIcon).map((badge) => (
                <div key={badge} className={styles.tech_badge}>
                  <Image
                    style={{ width: "100%", borderRadius: "20px" }}
                    alt="tech"
                    src={badge}
                    width={50}
                    height={35}
                    loader={loaderProp}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.header}>
              <h4>{currDisplay.title}</h4>
            </div>
            <div className={styles.body}>
              <h4>Overview:</h4>
              {currDisplay.overview}
            </div>
            <div className={styles.body}>
              <h4>Techstack Used</h4>
              <div className={styles.content_tech}>
                {currDisplay.techstack.map((tech) => (
                  <div key={tech} className={styles.tech_badge}>
                    <Image
                      style={{ width: "100%", borderRadius: "20px" }}
                      alt="tech"
                      src={tech}
                      width={50}
                      height={40}
                      loader={loaderProp}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWork;
