import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";

import PlayEpisode from "../../molecules/PlayEpisode";

interface Props {
  title: string;
  src: string;
  description: string;
  date: string;
  postNumber: number;
  image: string;
  handleChangeEpisode: (src: any) => void;
}

const CardEpisode = (props: Props) => {
  let {
    title,
    src,
    description,
    date,
    postNumber,
    image,
    handleChangeEpisode,
  } = props;

  return (
    <div className={`bg-gray-100 shadow-sm w-full `}>
      <div className={`p-2`}>
        <div className={`text-2xl  text-indigo-700 font-bold`}>{title}</div>
        <div>{date}</div>
      </div>
      <div className={`relative h-60`}>
        <Image
          objectFit="cover"
          layout="fill"
          src={image}
          alt={`Picture of End Of The Reel podcast`}
          // height={400}
          // width={400}
        />
      </div>

      <div>
        <div className={`flex flex-row  justify-center p-2 `}>
          <div className={`max-w-prose`}> {parse(description)}</div>
        </div>
      </div>
    </div>
  );
};

export default CardEpisode;

{
  /* <PlayEpisode src={src} handleChangeEpisode={handleChangeEpisode} />
<div */
}
