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
    <Link passHref href={`/projects/${props.project.key}`}>
      <div className={styles.container}>
        {props.project.image && (
          <div className={styles.img}>
            <Image
              alt="project-image"
              unoptimized={true}
              loader={myLoader}
              src={props.project.image}
              layout="fill"
              objectFit="fill"
            />
            )
          </div>
        )}
        <div className="text-center font-bold text-xl m-2">{project.title}</div>
        <div className="text-center">{project.excerpt}</div>
      </div>
    </Link>
  );
};

export default Project;
