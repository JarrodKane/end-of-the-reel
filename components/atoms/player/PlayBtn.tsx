import React from "react";

interface Props {
  children: React.ReactNode;
  togglePlayPause: () => void;
}

export const PlayBtn = (props: Props) => {
  const { togglePlayPause } = props;
  return (
    <button
      onClick={togglePlayPause}
      className={`flex items-center  justify-items-center w-16 h-10 cursor-pointer bg-pink-700 text-yellow-400  text-1xl rounded-full justify-center `}
    >
      {props.children}
    </button>
  );
};
