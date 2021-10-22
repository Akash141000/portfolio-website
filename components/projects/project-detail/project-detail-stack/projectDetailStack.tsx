import { IProject } from "../../../../utils/type";

//css
import styles from "./projectDetailStack.module.css";

const ProjectDetailStack = (props: { project: IProject }) => {
  const { project } = props;

  const detailInfo: string[] = ["platform", "stack"];
  const detailLink: string[] = ["website", "source"];

  return (
    <div className="flex flex-col">
      {detailLink.map((item) => {
        return (
          <div className="text-base m-2" key={item}>
            <span className="text-sm mr-4 block">{item.toUpperCase()}</span>
            <a href={project[item]} className="text-blue-400">
              {project[item]}
            </a>
          </div>
        );
      })}
      {detailInfo.map((item) => {
        return (
          <div className="text-base m-2" key={item}>
            <span className="text-sm mr-4 block">{item.toUpperCase()}</span>
            <span className="block">{project[item]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDetailStack;
