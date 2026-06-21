import styles from "./Pinball.module.css";

const Pinball = () => {
  return (
    <div className={styles.main}>
      <iframe
        className={styles.frame}
        src="https://pinball.alula.me/"
        title="Space Cadet Pinball"
        allow="autoplay"
      />
      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <span className={styles.key}>Z</span>
          <span className={styles.label}>Left Flipper</span>
        </div>
        <div className={styles.controlGroup}>
          <span className={styles.key}>/</span>
          <span className={styles.label}>Right Flipper</span>
        </div>
        <div className={styles.controlGroup}>
          <span className={styles.key}>Space</span>
          <span className={styles.label}>Launch Ball</span>
        </div>
        <div className={styles.controlGroup}>
          <span className={styles.key}>&uarr; &darr;</span>
          <span className={styles.label}>Nudge Table</span>
        </div>
      </div>
    </div>
  );
};

export default Pinball;
