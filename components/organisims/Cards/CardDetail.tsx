import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";

import Callout1 from "../../molecules/callouts/Callout1";
import Callout2 from "../../molecules/callouts/Callout2";

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

const CardEDetail: React.FC<Props> = ({
  title,
  src,
  description,
  date,
  postNumber,
  image,
  handleChangeEpisode,
}) => {
  let breakContent;
  if (postNumber === 0) {
    breakContent = <Callout1 />;
  } else if (postNumber === 1) {
    breakContent = <Callout2 />;
  }

  return (
    <div className={`bg-gray-200 shadow-sm `}>
      <div className={`bg-white shadow-sm p-10`}>
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
      </div>
      {breakContent}
    </div>
  );
};

export default CardEDetail;

// return (
//   <div className={`bg-gray-100 shadow-sm `}>
//     <div className={`bg-white shadow-sm p-10`}>
//       <div className={`text-4xl  text-indigo-700 font-bold`}>
//         <Link href="#">{title}</Link>
//       </div>

//       <div>{date}</div>

//       <div className="relative w-full h-36 md:h-80 ">
//         <Image
//           objectFit="cover"
//           layout="fill"
//           src={`/images/EndOfTheReelDefault.svg`}
//           alt={`Picture of End Of The Reel podcast`}
//           // height={400}
//           // width={400}
//           className={` filter saturate-150 rounded-md `}
//         />
//         <div
//           className={`fill-current  relative opacity-0 hover:opacity-100 w-full h-full rounded-md`}
//         >
//           {/* TODO: Maybe change this image into a giant play button for the episode but I'm unsure right now with that idea, coule be better to just split this image into two divs, one is a play div and the other the podcast */}
//           {/* <div
//             className={`fill-current absolute z-20 w-full h-full text-blue-200 flex justify-center items-center  `}
//           >
//             PLAY ME
//           </div>
//           <div
//             className={`fill-current relative bg-black  opacity-0 hover:opacity-50 w-full h-full rounded-md`}
//           /> */}
//         </div>
//       </div>
//       <PlayIcon />

//       <div className={`flex flex-row items-center justify-center`}>
//         <div className={`max-w-prose`}> {parse(description)}</div>
//       </div>
//     </div>
//     {breakContent}
//   </div>
// );
