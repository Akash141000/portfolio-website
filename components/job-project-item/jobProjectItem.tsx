import { Chip } from "../chip/chip";
import { IProject } from "../project/project";

export const JobProjectItem: React.FC<IProject> = ({
  title,
  description,
  stack,
  contribution,
}) => {
  return (
    <div className="text-dark">
      <div className="mt-5 h-100v">
        <JobProjectHeader title={title} description={description} />
        <ProjectTechList stack={stack} />
        <ProjectContributionList contribution={contribution} />
      </div>
    </div>
  );
};

interface IJobProjectHeader {
  title: IProject["title"];
  description: IProject["description"];
}

const JobProjectHeader: React.FC<IJobProjectHeader> = ({
  title,
  description,
}) => {
  return (
    <>
      <span id="project" className="font-bold mr-1 text-lg italic">
        {title} -
      </span>
      <span id="description" className="text-sm tracking-widest">
        {description}
      </span>
    </>
  );
};

interface IProjectTechList {
  stack: IProject["stack"];
}

const ProjectTechList: React.FC<IProjectTechList> = ({ stack }) => {
  return (
    <div className="mt-3">
      <span className="text-md font-bold italic">Tech - </span>
      <span>
        {stack.map((title, i) => (
          <Chip title={title} key={i} />
        ))}
      </span>
    </div>
  );
};

interface IProjectContributionList {
  contribution: IProject["contribution"];
}

const ProjectContributionList: React.FC<IProjectContributionList> = ({
  contribution,
}) => {
  return (
    <div id="contribution" className="mt-2 mb-5">
      <ul className="list-disc">
        {contribution.map((c, i) => (
          <li key={i} className="ml-6 list-item text-sm tracking-widest">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
};
