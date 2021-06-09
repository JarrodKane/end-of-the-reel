import React from "react";
import parse from "html-react-parser";
import Image from "next/image";

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
        <div className={`flex flex-col pt-5 p-3 items-start`}>
          <button
            className={` p-2 rounded-lg shadow hover:shadow-md duration-500 bg-green-700 hover:bg-green-900 uppercase font-bold text-white  `}
            onClick={() => {
              handleChangeEpisode(src);
            }}
          >
            Play Episode
          </button>

          <div className={`max-w-prose self-center`}> {parse(description)}</div>
        </div>
      </div>
    </div>
  );
};

export default CardEpisode;
