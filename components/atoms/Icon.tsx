import React from "react";
// import simpleIcons from "simple-icons"
import Image from "next/image"



// const icon = simpleIcons.Get('simpleicons');


interface Props {
  name: string;
  src: string;
  url: string;

}

const Icon: React.FC<Props> = ({ name, src,url }) => {
  return (
    <a href={url}  target="_blank" rel="noopener noreferrer">
    <Image src={`/images/${src}`} height={100} width={100} className={`fill-current text-blue-200`}/>
      {/* <img
        className={`flex items-center font-body cursor-pointer uppercase font-bold px-3 align-baseline fill-current text-green-600`}
src={`/images/${src}`}
        alt={name} 
      /> */}
    </a>
  );
};

export default Icon;
