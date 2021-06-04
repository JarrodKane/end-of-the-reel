import React from "react";
// import simpleIcons from "simple-icons"
import Image from "next/image";

// const icon = simpleIcons.Get('simpleicons');

interface Props {
  name: string;
  src: string;

  width: number;
  height: number;
}

const PlayIcon: React.FC<Props> = ({ name, src, height, width }) => {
  return (
    <Image
      src={`/images/PlayBtn.svg`}
      height={30}
      width={30}
      className={`fill-current text-blue-200 `}
    />
  );
};

export default PlayIcon;
