import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import PlayEpisode from "../../molecules/PlayEpisode";

interface Props {
  title: string | null;
  src: string;
  description: string;
  date: string;
  postNumber: number;
  image: string;
  // handleChangeEpisode: (src: any) => void;
}

const SmallCard = (props: Props) => {
  let {
    title = "",
    src,
    description,
    date,
    postNumber,
    image,
    // handleChangeEpisode,
  } = props;

  const [slug, setSlug] = useState("");

  const router = useRouter();

  // This will go through and get the slugs for each episode based off the title
  // There needed to be a bit of checking that the slig is not null, and that the regex returns a string
  useEffect(() => {
    if (title !== null) {
      let slugName: string | RegExpMatchArray | null;
      slugName = title.match(/\w+/g);
      if (slugName !== null) {
        slugName = slugName.join("-");
        setSlug(slugName);
      }
    }
  }, []);

  // This handles the episode routing, it will send you to the episodes and then the converted title
  const handleEpisode = () => {
    router.push(`episodes/${slug}`);
  };

  return (
    <div
      onClick={handleEpisode}
      className={`w-full h-full bg-gray-200 shadow-sm rounded-b-lg hover:shadow-md border border-indigo-300 transform scale-100 hover:scale-102 duration-200 cursor-pointer `}
    >
      <div className={`fill-current bg-gray-700  relative  h-60   `}>
        <Image
          objectFit="cover"
          layout="fill"
          src={image}
          alt={`Picture of End Of The Reel podcast`}
          // height={400}
          // width={400}
          className={` `}
        />
      </div>
      <div className={`flex flex-col items-center p-3`}>
        <div className={`text-1xl  text-indigo-600 font-bold`}>
          <Link href="#">{title}</Link>
        </div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default SmallCard;
