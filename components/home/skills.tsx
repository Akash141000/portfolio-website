import { ISkills } from "../../utils/type";

//css
import styles from "./skills.module.css";

const Skills = (props: { skills: ISkills }) => {
  const { skills } = props;

  const skillElement = [];

  for (const key in skills) {
    skillElement.push(
      <div key={key} className={styles.skillItem}>
        <span className="bg">
          <div className="text-md tracking-widest md:text-md flex justify-center font-medium">
            {skills[key].title}
          </div>
          <div className="text-sm md:text-sm tracking-wide flex justify-center italic">
            {skills[key].content}
          </div>
        </span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <span className="text-xl tracking-wide font-bold underline mb-2">
        Skills
      </span>
      <div className="flex flex-wrap">{skillElement}</div>
    </div>
  );
};

export default Skills;
