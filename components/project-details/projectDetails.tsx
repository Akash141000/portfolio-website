import Image from "next/dist/client/image";
import { IProject } from "../project/project";

interface IProjectDetails extends IProject {}

export const ProjectDetails: React.FC<IProjectDetails> = ({
  image,
  description,
  title,
}) => {
  return (
    <div className={"flex flex-col nowrap h-100v w-100 text-primary"}>
      <div className="text-2xl mb-2 font-bold text-center">{title}</div>
      {image && (
        <div className={"relative h-90 w-100 rounded-sm"}>
          <Image alt="image" src={image} layout="fill" unoptimized={true} />
        </div>
      )}

      <div className="text-lg my-2">{description}</div>
    </div>
  );
};
