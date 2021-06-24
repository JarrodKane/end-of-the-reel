import React from "react";

interface Props {
  children: React.ReactNode;
}

export const TimeDisp = (props: Props) => {
  return (
    <button
      className={`relative left-0.5 flex h-full mt-1.5 items-center px-3 font-mono `}
    >
      {props.children}
    </button>
  );
};
