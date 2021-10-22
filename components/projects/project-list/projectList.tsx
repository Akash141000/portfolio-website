import Project from "../project";

import styles from "./projectList.module.css";

import { useEffect, useState } from "react";
import { NextComponentType } from "next";
import Loading from "../../layout/loading";
import { IProject } from "../../../utils/type";

interface IProjectListProps {
  list: IProject[];
}

const ProjectList = (props:IProjectListProps) => {
  return props.list.length <= 0 ? (
    <Loading />
  ) : (
    <div className={styles.grid}>
      {props.list.map((item) => (
        <Project key={item.key} project={item} />
      ))}
    </div>
  );
};

export default ProjectList;
