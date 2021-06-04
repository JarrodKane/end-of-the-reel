import React from "react";
// import simpleIcons from "simple-icons"
import Image from "next/image";

// const icon = simpleIcons.Get('simpleicons');

interface Props {
  name: string;
  src: string;
  url: string;
  width: number;
  height: number;
}

const Icon: React.FC<Props> = ({ name, src, url, height, width }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`flex `}>
      <Image
        src={`/images/${src}`}
        height={height}
        width={width}
        className={`fill-current text-blue-200 `}
      />
    </a>
  );
};

export default Icon;
