import type { NextPage } from "next";

//components
import {
  Bio,
  Head,
  Hobbies,
  Introduction,
  Layout,
  Skills,
} from "../components";
import { abouthandler } from "../lib/about";
import { IHome } from "../types/types";

const HomePage: NextPage<IHome> = ({
  introduction,
  hobbies,
  skills,
  children,
}) => {
  return (
    <>
      <Head content="home" title="Home" />
      <Layout>
        <Introduction intro={introduction} />
        <Skills skills={skills} />
        <Bio />
        <Hobbies hobbies={hobbies} />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const aboutInfo = await abouthandler();
  return {
    props: aboutInfo,
  };
};

export default HomePage;
