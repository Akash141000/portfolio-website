import { NextComponentType } from "next";
import { IProject } from "../../utils/type";
import Image from "next/image";
import Link from "next/link";

//
import styles from "./project.module.css";

interface projProps {
  project: IProject;
}

const myLoader = ({ src }) => {
  return `${src}`;
};

const Project: React.FC<projProps> = (props) => {
  const { project } = props;

  return (
    <Link href={`/project/${props.project.key}`}>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image
            unoptimized={true}
            loader={myLoader}
            src={props.project.image}
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div className="text-center font-bold text-xl m-2">
          {project.title}
        </div>
        <div className="text-center">{project.excerpt}</div>
      </div>
    </Link>
  );
};

export default Project;
