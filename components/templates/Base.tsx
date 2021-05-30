import React from "react";
import Content from "./ContentWrap";

interface Props {}

const Base: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={`min-h-screen bg-gray-600 flex w-screen justify-center  pb-20 pt-12`}
    >
      <Content>{children}</Content>
      <div
        className={` fixed inset-x-0 bottom-0 h-16 flex justify-center items-center bg-red-600`}
      >
        <div className={` bg-red-200 `}>Player</div>
      </div>
    </div>
  );
};

export default Base;
