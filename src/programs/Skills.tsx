import { SkillsData } from "@/appData";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h3>Skills &amp; Technologies</h3>
        <p>Select a category to expand and view proficiency levels.</p>
      </div>
      <div className={styles.categories}>
        {SkillsData.map((category) => (
          <div key={category.id} className={styles.category}>
            <h4 className={styles.categoryTitle}>{category.title}</h4>
            <div className={styles.skillsList}>
              {category.skills.map((skill) => (
                <div key={skill.name} className={styles.skillRow}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
