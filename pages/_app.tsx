import { AppProps } from "next/dist/shared/lib/router/router";
import Navbar from "../components/navbar/navbar";
import { ProjectsContextProvider } from "../store/project-context";

//styles
import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ProjectsContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </ProjectsContextProvider>
  );
};

export default App;
