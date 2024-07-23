import { JOB_DATA } from "../../utils/job.data";
import { Accordian } from "../accordian/accordian";
import { IJobData } from "../../types/types";
import { JobProjectItem } from "../job-project-item/jobProjectItem";
import { JobProjectList } from "../job-project-list-Wrapper/jobProjectListWrapper";

export const Jobs = () => {
  const jobData: IJobData[] = JOB_DATA;
  return (
    <div>
      {jobData.map((job, i) => (
        <Accordian key={i} {...job}>
          <JobProjectList>
            {job.projects.map((project, i) => (
              <JobProjectItem key={`${i}`} {...project} />
            ))}
          </JobProjectList>
        </Accordian>
      ))}
    </div>
  );
};
