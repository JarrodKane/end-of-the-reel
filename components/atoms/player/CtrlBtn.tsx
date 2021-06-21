import React from "react";

interface Props {
  children: React.ReactNode;
}

export const CtrlBtn = (props: Props) => {
  return (
    <button
      className={`flex items-center cursor-pointer hover:text-pink-700 text-4xl flex h-full items-center`}
    >
      {props.children}
    </button>
  );
};
