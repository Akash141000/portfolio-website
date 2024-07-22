import { useState } from "react";
import { WORK_EXPERIENCE } from "./work.data";
import { DownArrow, UpArrow } from "@styled-icons/boxicons-solid";

export interface IWorkExp {
  companyName: string;
  designation: string;
  duration: {
    from: string;
    to: string;
  };
  projects: {
    title: string;
    description: string;
    stack: string[];
    contribution: string[];
  }[];
}

const WorkExperience = () => {
  const workExp: IWorkExp[] = WORK_EXPERIENCE;
  return (
    <div>
      {workExp.map((w, i) => (
        <ListItem
          key={i}
          id="company"
          designation={w.designation}
          companyName={w.companyName}
          duration={w.duration}
        >
          <div
            id="projects"
            className="bg-white p-1 rounded-sm flex flex-col divide-y-2 divide-dashed"
          >
            {w.projects.map((p, i) => (
              <div key={i} className="text-black">
                <div key={i} className="mt-5">
                  <span id="project" className="font-bold mr-1 text-lg">
                    {p.title} -
                  </span>
                  <span
                    id="description"
                    className="text-sm tracking-wide italic"
                  >
                    {p.description}
                  </span>
                  <div id="stack">
                    <span className="text-md font-bold">Tech - </span>
                    <span>
                      {p.stack.map((t, i) => (
                        <span
                          key={i}
                          className="text-sm m-1 italic bg-black text-white px-2 py-0.5 rounded-md inline-block"
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div id="contribution" className="mt-2">
                    <ul className="list-disc">
                      {p.contribution.map((c, i) => (
                        <li
                          key={i}
                          className="ml-4 list-item text-sm tracking-wide"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ListItem>
      ))}
    </div>
  );
};

const ListItem: any = ({ children, designation, companyName, duration }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="text-white">
      <div id="header" className="flex flex-col w-100 justify-between">
        <div className="flex flex-row mb-10 justify-between">
          <div id="title">
            <div className="font-bold text-xl">{designation}</div>
            <div className="flex flex-col">
              <div className="font-semibold text-lg">{companyName}</div>
              <div className="italic text-sm">
                <span>
                  {duration?.from} - {duration?.to}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <button onClick={() => setIsExpanded((prev) => !prev)}>
              {!isExpanded ? (
                <DownArrow className="w-5 h-5" />
              ) : (
                <UpArrow className="w-5 h-5" />
              )}
            </button>
            <span className="text-xs">
              {isExpanded ? `Collapse` : `Expand`}
            </span>
          </div>
        </div>
      </div>
      {isExpanded ? children : <></>}
    </div>
  );
};

export default WorkExperience;
