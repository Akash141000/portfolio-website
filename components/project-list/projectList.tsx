import { Loader } from "../loader/loader";
import { IProject, Project } from "../project/project";

import styles from "./projectList.module.css";

interface IProjectList {
  list: IProject[];
}

const ProjectList: React.FC<IProjectList> = ({ list }) => {
  return list.length <= 0 ? (
    <Loader />
  ) : (
    <div className={styles.grid}>
      {list.map((item, i) => (
        <Project key={i} {...item} />
      ))}
    </div>
  );
};

export default ProjectList;
