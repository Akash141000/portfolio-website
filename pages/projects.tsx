import { NextPage } from "next";
import { useContext } from "react";
import ProjectContext from "../store/project-context";
import { Head, Layout, Project } from "../components";
import { ProjectsListWrapper } from "../components/projects-list-wrapper/projectsListWrapper";

const Projects: NextPage = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <>
      <Head content="projects" title="Projects" />
      <Layout>
        <ProjectsListWrapper>
          {projects.map((project, key) => (
            <Project key={key} {...project} />
          ))}
        </ProjectsListWrapper>
      </Layout>
    </>
  );
};

export default Projects;
