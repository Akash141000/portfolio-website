import { NextPage } from "next";
import { useContext } from "react";
import ProjectContext from "../store/project-context";
import { Head, Layout } from "../components";
import ProjectList from "../components/project-list/projectList";

const Projects: NextPage = () => {
  const projectCtx = useContext(ProjectContext);
  const { projects } = projectCtx;

  return (
    <>
      <Head content="projects" title="Projects" />
      <Layout>
        <ProjectList list={projects} />
      </Layout>
    </>
  );
};

export default Projects;
