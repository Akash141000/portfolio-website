import Image from "next/dist/client/image";
import styles from "./projectDetails.module.css";
import { IProject } from "../project/project";

interface IProjectDetails extends IProject {}

export const ProjectDetails: React.FC<IProjectDetails> = ({
  image,
  description,
  title,
}) => {
  return (
    <div className={styles.container}>
      <div className="text-2xl mb-2 font-bold text-center">{title}</div>
      {image && (
        <div className={styles.img}>
          <Image alt="image" src={image} layout="fill" unoptimized={true} />
        </div>
      )}

      <div className="text-lg my-2">{description}</div>
    </div>
  );
};
