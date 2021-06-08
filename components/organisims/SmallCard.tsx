import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";

import Callout1 from "../molecules/callouts/Callout1";
import Callout2 from "../molecules/callouts/Callout2";

import PlayEpisode from "../molecules/PlayEpisode";

interface Props {
  title: string;
  src: string;
  description: string;
  date: string;
  postNumber: number;
  image: string;
  handleChangeEpisode: (src: any) => void;
}

const SmallCard = (props: Props) => {
  let {
    title,
    src,
    description,
    date,
    postNumber,
    image,
    handleChangeEpisode,
  } = props;

  let breakContent;
  if (postNumber === 0) {
    breakContent = <Callout1 />;
  } else if (postNumber === 1) {
    breakContent = <Callout2 />;
  }

  return (
    <div
      className={`w-full h-full bg-gray-200 shadow-sm rounded-b-lg hover:shadow-md border border-indigo-300 transform scale-100 hover:scale-102 duration-200 cursor-pointer`}
    >
      <div className={`fill-current bg-gray-700  relative  h-60   `}>
        <Image
          objectFit="cover"
          layout="fill"
          src={image}
          alt={`Picture of End Of The Reel podcast`}
          // height={400}
          // width={400}
          className={` filter saturate-150 `}
        />
      </div>
      <div className={`flex flex-col items-center m-3`}>
        <div className={`text-1xl  text-indigo-600 font-bold`}>
          <Link href="#">{title}</Link>
        </div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default SmallCard;
