import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";

import Callout1 from "../molecules/callouts/Callout1";
import Callout2 from "../molecules/callouts/Callout2";

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
    breakContent = <Callout1 />;
  } else if (postNumber === 1) {
    breakContent = <Callout2 />;
  }

  return (
    <div className={`bg-gray-100 shadow-sm `}>
      <div className={`bg-white shadow-sm p-10 `}>
        <div className={`text-4xl  text-indigo-700 font-bold`}>
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
