import Image from "next/image";
import Link from "next/link";

//
import styles from "./project.module.css";

const ImageLoader = ({ src }) => {
  return `${src}`;
};

export interface IProject {
  id: string;
  title: string;
  image?: string;
  description: string;
  attachedImages?: string[];
  stack: string[];
  website?: string;
  platform?: string;
  source?: string[];
  contribution?: string[];
}

export const Project: React.FC<IProject> = ({
  id,
  image,
  description,
  title,
}) => {
  return (
    <Link passHref href={`/projects/${id}`}>
      <div className={styles.container}>
        {image && (
          <div className={styles.img}>
            <Image
              alt="project-image"
              unoptimized={true}
              loader={ImageLoader}
              src={image}
              layout="fill"
              objectFit="fill"
            />
            )
          </div>
        )}
        <div className="text-center font-bold text-xl m-2">{title}</div>
        <div className="text-center">{description}</div>
      </div>
    </Link>
  );
};
