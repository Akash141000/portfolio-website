import React from "react";

export const Layout: React.FC = (props) => {
  return (
    <div className="w-full flex flex-col h-screen overflow-scroll bg-dark fixed  z-10">
      <div className="w-full max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl self-center mt-24 absolute z-20">
        {props.children}
      </div>
    </div>
  );
};
