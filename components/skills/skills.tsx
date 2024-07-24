import { ISkills } from "../../types/types";

export const Skills = (props: { skills: ISkills }) => {
  const { skills } = props;

  const skillElement = [];

  for (const key in skills) {
    skillElement.push(
      <div
        key={key}
        className={
          "flex flex-row mx-1 my-2 px-1 py-0.5 bg-light text-dark rounded-sm"
        }
      >
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
    <div className={"flex flex-col nowrap text-primary mt-8"}>
      <span className="text-xl tracking-wide font-bold underline mb-2">
        Skills
      </span>
      <div className="flex flex-wrap">{skillElement}</div>
    </div>
  );
};
