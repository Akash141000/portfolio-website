import type { NextPage } from "next";
import Head from "next/head";

//components
import Bio from "../components/home/bio";
import Hobbies from "../components/home/hobbies";
import Intro from "../components/home/intro";
import Skills from "../components/home/skills";
//layout
import Main from "../components/layout/main";
import { abouthandler } from "../lib/about";
import { IAbout } from "../utils/type";

const HomePage: NextPage<{ about: IAbout }> = (props) => {
  const { description, hobbies, skills } = props.about;
  return (
    <>
      <Head>
        <meta name="description" content="portfolio" />
        <title>Portfolio</title>
      </Head>
      <Main>
        <Intro intro={description} />
        <Skills skills={skills} />
        <Bio />
        <Hobbies hobbies={hobbies} />
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
  const aboutInfo = await abouthandler();
  return {
    props: {
      about: aboutInfo,
    },
  };
};

export default HomePage;
