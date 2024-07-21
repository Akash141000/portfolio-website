import { NextPage } from "next";
import { useContext } from "react";
import Head from "next/head";
//components
import ProjectContext from "../store/project-context";
import ProjectList from "../components/projects/project-list/projectList";
import Loading from "../components/layout/loading";
//layout
import Main from "../components/layout/main";

const Projects: NextPage = () => {
  const projectCtx = useContext(ProjectContext);
  const { projects, loading } = projectCtx;

  const renderContent =
    projects.length <= 0 ? (
      <div className="text-2xl text-center text-electric-blue">
        No projects found!
      </div>
    ) : (
      <ProjectList list={projects} />
    );

  if (loading) {
    return (
      <Main>
        <Loading />
      </Main>
    );
  }
  return (
    <>
      <Head>
        <meta name="description" content="projects" />
        <title>Projects</title>
      </Head>
      <Main>{renderContent}</Main>
    </>
  );
};

export default PortFolio;
