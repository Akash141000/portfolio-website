import { ISkills } from "../../utils/type";

//css
import styles from "./skills.module.css";

const Skills = (props: { skills: ISkills }) => {
  const { skills } = props;

  const skillElement = [];

  for (const key in skills) {
    skillElement.push(
      <div key={key} className={styles.skillItem}>
        <span className="text-lg md:text-xl ">{skills[key].title}</span>
       <span className="text-base md:text-lg tracking-wide">{skills[key].content}</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <span className="text-2xl font-bold underline mb-2">Skills</span>
      {skillElement}
    </div>
  );
};

export default Skills;
