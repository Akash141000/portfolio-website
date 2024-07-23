import { createContext, useEffect, useState } from "react";
import { PROJECT_DATA } from "../utils/project.data";
import { IProject } from "../types/types";

interface IProjectsContext {
  loading: boolean;
  projects: IProject[];
  fetchProjects: () => void;
  findProject: (id: string) => IProject;
}

const ProjectContext = createContext<IProjectsContext>({
  loading: false,
  projects: [],
  fetchProjects: (): void => {},
  findProject: (id: string): any => {},
});

export const ProjectsContextProvider = (props) => {
  const [data, setData] = useState<IProject[]>([]);
  const [loading, isLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    isLoading(true);
    // const response = await fetch("/api/projects");
    // const result = await response.json();
    // setData(result.content);
    setData(PROJECT_DATA);
    isLoading(false);
  };

  const findProject = (projectId: string): IProject => {
    const project = data.find((item) => {
      return item.key === projectId;
    });
    return project;
  };

  const context = {
    loading: loading,
    projects: data,
    fetchProjects: fetchProjects,
    findProject: findProject,
  };

  return (
    <ProjectContext.Provider value={context}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
