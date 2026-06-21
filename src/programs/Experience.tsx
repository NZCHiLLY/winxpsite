import { CareerTimeline, Achievements, PersonalProjects } from "@/appData";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h3>Experience &amp; Achievements</h3>
        <p>Career timeline, key projects, and personal work.</p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Career Timeline</h4>
        <div className={styles.timeline}>
          {CareerTimeline.map((role) => (
            <div key={role.id} className={styles.role}>
              <div className={styles.roleHeader}>
                <span className={styles.roleTitle}>{role.title}</span>
                <span className={styles.rolePeriod}>{role.period}</span>
              </div>
              <p className={styles.roleSummary}>{role.summary}</p>
              {role.bullets.length > 0 && (
                <ul className={styles.bullets}>
                  {role.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Selected Achievements</h4>
        <div className={styles.achievements}>
          {Achievements.map((a) => (
            <div key={a.id} className={styles.achievement}>
              <span className={styles.achievementNum}>
                {String(a.id).padStart(2, "0")}
              </span>
              <div className={styles.achievementContent}>
                <h5 className={styles.achievementTitle}>{a.title}</h5>
                <p className={styles.achievementDesc}>{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Personal Projects</h4>
        <div className={styles.projects}>
          {PersonalProjects.map((p) => (
            <div key={p.id} className={styles.project}>
              <h5 className={styles.projectTitle}>{p.title}</h5>
              <p className={styles.projectDesc}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
