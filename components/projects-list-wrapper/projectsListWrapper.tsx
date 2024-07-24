import styles from "./projectsListWrapper.module.css";

interface IProjectList {}

export const ProjectsListWrapper: React.FC<IProjectList> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};
