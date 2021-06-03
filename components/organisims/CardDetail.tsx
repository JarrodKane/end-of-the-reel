import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";

import Callout1 from "../molecules/callouts/Callout1";

interface Props {
  title: string;
  src: string;
  description: string;
  date: string;
  postNumber: number;
}

const CardEDetail: React.FC<Props> = ({
  title,
  src,
  description,
  date,
  postNumber,
}) => {
  let breakContent;
  if (postNumber === 0) {
    breakContent = <Callout1>Break 1</Callout1>;
  } else if (postNumber === 1) {
    breakContent = <div className={`bg-red-700 m-5`}>Break 2</div>;
  }

  return (
    <div className={` `}>
      <div className={`m-5 bg-gray-100 `}>
        <div className={`text-5xl  text-indigo-700 font-bold`}>
          <Link href="#">{title}</Link>
        </div>

        <div>{date}</div>
        <div className="relative w-full h-36 md:h-80 ">
          <Image
            objectFit="cover"
            layout="fill"
            src={`/images/EndOfTheReelDefault.svg`}
            alt={`Picture of End Of The Reel podcast`}
            // height={400}
            // width={400}
            className={` filter saturate-150 rounded-md `}
          />
        </div>

        <div>Player</div>
        <div className={`flex flex-row items-center justify-center`}>
          <div className={`max-w-prose`}> {parse(description)}</div>
        </div>
      </div>
      {breakContent}
    </div>
  );
};

export default CardEDetail;
