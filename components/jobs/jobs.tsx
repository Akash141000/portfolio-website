import { JOB_DATA } from "../../utils/job.data";
import { Accordian } from "../accordian/accordian";
import { IJobData } from "../../types/types";
import { JobProjectItem } from "../job-project-item/jobProjectItem";
import { JobProjectListWrapper } from "../job-project-list-Wrapper/jobProjectListWrapper";
import { IProject } from "../project/project";

export const Jobs = () => {
  const jobData: IJobData[] = JOB_DATA;
  return (
    <div>
      {jobData.map((job, i) => (
        <Accordian key={i} {...job}>
          <JobProjectListWrapper>
            {job.projects.map((project: IProject, i) => (
              <JobProjectItem key={`${i}`} {...project} />
            ))}
          </JobProjectListWrapper>
        </Accordian>
      ))}
    </div>
  );
};
