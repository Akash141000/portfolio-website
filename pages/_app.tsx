import { AppProps } from "next/dist/shared/lib/router/router";

//components
import Navbar from "../components/header/header";
import { ProjectsContextProvider } from "../store/project-context";

//styles
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ProjectsContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </ProjectsContextProvider>
  );
};

export default MyApp;
