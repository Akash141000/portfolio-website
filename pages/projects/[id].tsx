import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import {
  Layout,
  Loader,
  Head,
  IProject,
  ProjectDetails,
} from "../../components";
import ProjectContext from "../../store/project-context";

const ProjectOverview: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const projectCtx = useContext(ProjectContext);
  const project: IProject = projectCtx.findProject(id as string);

  return (
    <>
      <Head content={project.description} title={project.title} />
      <Layout>
        <ProjectDetails {...project} />
      </Layout>
    </>
  );
};

export default ProjectOverview;
