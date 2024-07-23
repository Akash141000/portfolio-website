import { Head, Layout } from "../components";
import { Jobs } from "../components/jobs/jobs";

const Work = () => {
  return (
    <>
      <Head content="work" title="Work" />
      <Layout>
        <Jobs />
      </Layout>
    </>
  );
};

export default Work;
