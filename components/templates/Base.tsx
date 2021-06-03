import React from "react";
import Content from "./ContentWrap";

interface Props {}

const Base: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={`min-h-screen bg-eoth-pattern flex  justify-center pb-20  bg-repeat   `}
    >
      <div className={`z-10 mt-14 shadow-lg`}>
        <Content>{children}</Content>
        <div
          className={` fixed inset-x-0 bottom-0 h-16 flex justify-center items-center bg-red-600`}
        >
          <div className={` bg-red-200 `}>Player</div>
        </div>
      </div>
      <div
        className={`fixed  bg-gradient-to-b from-blue-400 via-red-500 to-yellow-500 min-h-screen opacity-60  w-full`}
      />
    </div>
  );
};

export default Base;
