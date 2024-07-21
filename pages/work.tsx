import WorkExperience from "../components/home/workExperience";
import Head from "next/head";
import Main from "../components/layout/main";

const Work = () => {
  return (
    <>
      <Head>
        <meta name="description" content="projects" />
        <title>Projects</title>
      </Head>
      <Main>
        <WorkExperience />
      </Main>
    </>
  );
};

export default Work;
