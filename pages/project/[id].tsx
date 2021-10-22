import Head from "next/dist/shared/lib/head";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useContext } from "react";

//layout
import Main from "../../components/layout/main";
import Loading from "../../components/layout/loading";
import ProjectDetailComponent from "../../components/projects/project-detail/projectDetail";
import ProjectContext from "../../store/project-context";

const ProjectDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const projectCtx = useContext(ProjectContext);
  const project = projectCtx.findProject(id as string);

  if (!project) {
    return (
      <Main>
        <Loading />
      </Main>
    );
  }

  return (
    <>
      <Head>
        <meta name="description" content={project.excerpt} />
        <title>{project.title}</title>
      </Head>
      <Main>
        <ProjectDetailComponent project={project} />
      </Main>
    </>
  );
};

export default ProjectDetail;
