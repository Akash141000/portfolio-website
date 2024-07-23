export const JobProjectListWrapper: React.FC<{}> = ({ children }) => {
  return (
    <div className="bg-light p-1 mb-2 rounded-sm flex flex-col divide-y-2 divide-dashed">
      {children}
    </div>
  );
};
