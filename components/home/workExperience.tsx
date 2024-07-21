interface IWorkExp {
  company: {
    duration: {
      from: string;
      to: string;
    };
    projects: { stack: string[]; contribution: string[]; title: string }[];
  };
}

const WorkExperience = () => {
  const workExp: IWorkExp[] = [];
  return (
    <div className="text-white">
      {workExp.map((w) => {
        <div id="company">
          {w.company}
          {w.company.projects.map((p) => {
            <div>
              <div id="project">{p.title}</div>
              <div id="stack">{p.stack}</div>
              <div id="contribution">
                <ul>
                  {p.contribution.map((c) => {
                    <li>{c}</li>;
                  })}
                </ul>
              </div>
            </div>;
          })}
        </div>;
      })}
    </div>
  );
};

export default WorkExperience;
