import { DownArrow, UpArrow } from "@styled-icons/boxicons-solid";
import { useState } from "react";

interface IAccordian {
  designation: string;
  companyName: string;
  duration: {
    from: string;
    to: string;
  };
}

export const Accordian: React.FC<IAccordian> = ({
  children,
  designation,
  companyName,
  duration,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="text-primary m-5 px-3 border-solid border-primary border-2 rounded-lg">
      <div
        id="header"
        className="flex flex-col w-100 justify-between align-center"
      >
        <div className="flex flex-row mb-2 justify-between">
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
          <div className="flex flex-col align-center justify-center">
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
      {isExpanded && children}
    </div>
  );
};
