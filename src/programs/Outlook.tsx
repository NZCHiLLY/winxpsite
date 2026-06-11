import styles from "./Outlook.module.css";
import mailto from "../../assets/toolbar/mailto.png";
import send from "../../assets/toolbar/sendmail.png";
import Image from "next/image";
import cut from "../../assets/toolbar/cut.png";
import copy from "../../assets/toolbar/copy.png";
import paste from "../../assets/toolbar/paste.png";
import undo from "../../assets/toolbar/undo.png";
import check from "../../assets/toolbar/check.png";
import spelling from "../../assets/toolbar/spelling.png";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppDirectory } from "@/appData";
import { addTab } from "@/redux/tabSlice";
import store from "@/redux/store";
import { useSelector } from "react-redux";
import { RootState } from "@/types";

const Outlook = () => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const sendEmail = async () => {
    if (!from || !subject || !message || sending) {
      return;
    }

    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, subject, message }),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || "Failed to send email");
      }

      const newTab = {
        ...AppDirectory.get(7),
        id: uuidv4(),
        zIndex: currTabID,
        title: "Message Sent",
        message: "Your message has been sent. I will get back to you as soon as possible.",
      };
      store.dispatch(addTab(newTab));

      setFrom("");
      setSubject("");
      setMessage("");
      if (emailRef.current) emailRef.current.value = "";
      if (subjectRef.current) subjectRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    } catch {
      const errorTab = {
        ...AppDirectory.get(5),
        id: uuidv4(),
        zIndex: currTabID,
        title: "Error — Email Failed",
        message: "Failed to send your message. Please try again later, or email me directly at hello@chilman.co.nz.",
      };
      store.dispatch(addTab(errorTab));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.icons_toolbar}>
        <div
          className={
            from !== "" && subject !== "" && message !== "" && !sending
              ? styles.icon
              : styles.icon_disabled
          }
        >
          <Image
            style={
              from !== "" && subject !== "" && message !== "" && !sending
                ? { margin: "0 4px" }
                : {
                    margin: "0 4px",
                    filter: "grayscale(100%) brightness(0.9)",
                  }
            }
            alt="send"
            width={40}
            height={30}
            src={send.src}
            onClick={sendEmail}
          />
          <p>{sending ? "..." : "Send"}</p>
        </div>
        <div className={styles.vertical_line} />
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="cut"
            width={25}
            height={30}
            src={cut.src}
          />
          <p>Cut</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="copy"
            width={28}
            height={30}
            src={copy.src}
          />
          <p>Copy</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="paste"
            width={28}
            height={30}
            src={paste.src}
          />
          <p>Paste</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="undo"
            width={28}
            height={30}
            src={undo.src}
          />
          <p>Undo</p>
        </div>
        <div className={styles.vertical_line} />
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="check"
            width={32}
            height={30}
            src={check.src}
          />
          <p>Check</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="spelling"
            width={32}
            height={30}
            src={spelling.src}
          />
          <p>Spelling</p>
        </div>
      </div>
      <div>
        <div className={styles.mailing}>
          <div className={styles.mailing_text}>
            <div className={styles.field_text}>
              <Image
                style={{ margin: "0 4px" }}
                alt="arrow_down"
                width={20}
                height={20}
                src={mailto.src}
              />
              <p>To:</p>
            </div>
            <div className={styles.field_text}>
              <Image
                style={{ margin: "0 4px" }}
                alt="arrow_down"
                width={20}
                height={20}
                src={mailto.src}
              />
              <p>From:</p>
            </div>
            <div className={styles.field_text}>
              <p>Subject:</p>
            </div>
          </div>
          <div className={styles.mailing_fields}>
            <input
              className={styles.textfield}
              style={{ cursor: "default" }}
              disabled
              id="text21"
              type="text"
              value="Jayson Chilman (hello@chilman.co.nz)"
            />
            <input
              className={styles.textfield}
              ref={emailRef}
              placeholder="Enter your email address"
              onChange={(e) => {
                setFrom(e.target.value);
              }}
              type="email"
            />
            <input
              className={styles.textfield}
              ref={subjectRef}
              placeholder="What is this message regarding?"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              type="text"
            />
          </div>
        </div>
      </div>
      <div className={styles.richfield}>
        <textarea
          draggable={false}
          ref={messageRef}
          className={styles.richtextbox}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          id="text24"
          placeholder="Type your message here..."
        ></textarea>
      </div>
    </div>
  );
};

export default Outlook;
