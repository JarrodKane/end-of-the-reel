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
    <div className={`w-full h-40 bg-gray-300 shadow-sm`}>
      asd
      {/* <div className={`bg-white shadow-sm p-10`}>
        <div className={`text-4xl  text-indigo-700 font-bold`}>
          <Link href="#">{title}</Link>
        </div>

        <div>{date}</div>

        <div className="flex w-full h-36 md:h-80 ">
          <PlayEpisode src={src} handleChangeEpisode={handleChangeEpisode} />
          <div
            className={`fill-current bg-gray-700  relative  w-1/2 h-full rounded-r-md`}
          >
            <Image
              objectFit="cover"
              layout="fill"
              src={image}
              alt={`Picture of End Of The Reel podcast`}
              // height={400}
              // width={400}
              className={` filter saturate-150 rounded-r-md `}
            />
          </div>
        </div>
        <div className={`flex flex-row items-center justify-center`}>
          <div className={`max-w-prose`}> {parse(description)}</div>
        </div>
      </div> */}
    </div>
  );
};

export default SmallCard;
