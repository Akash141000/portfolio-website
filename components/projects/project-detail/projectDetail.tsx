import Image from "next/dist/client/image";

//css
import styles from "./projectDetail.module.css";

import { IProject } from "../../../utils/type";
import ProjectDetailStack from "./project-detail-stack/projectDetailStack";

const ProjectDetailComponent = (props: { project: IProject }) => {
  const { project } = props;

  return (
    <div className={styles.container}>
      <div className="text-2xl mb-2 font-bold text-center">{project.title}</div>
      {project.image && (
        <div className={styles.img}>
          <Image
            alt="project-image"
            src={project.image}
            layout="fill"
            unoptimized={true}
          />
        </div>
      )}

      <div className="text-xl my-2 text-center">{project.excerpt}</div>
      <div className="text-lg my-2">{project.description}</div>
      <ProjectDetailStack project={project} />
    </div>
  );
};

export default ProjectDetailComponent;
