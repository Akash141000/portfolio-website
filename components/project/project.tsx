import Image from "next/image";
import { Chip } from "../chip/chip";

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
  image,
  description,
  title,
  source,
  stack,
}) => {
  return (
    // <Link passHref href={`/projects/${id}`}>
    <>
      <div
        className={
          "w-inhert flex flex-col text-primary border-solid border-2 border-primary rounded-md px-0.5 py-1"
        }
      >
        {image && (
          <div className="h-10 w-100 relative rounded-md">
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
        <div className="font-bold text-xl m-1 tracking-widest">{title}</div>
        <div className="mx-2 tracking-widest">{description}</div>
        <div>
          {stack.map((s, i) => (
            <Chip key={i} title={s} />
          ))}
        </div>
      </div>
    </>
    // </Link>
  );
};
