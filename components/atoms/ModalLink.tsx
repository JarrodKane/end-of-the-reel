import React from "react";
import Link from "next/link";

interface Props {
  text: string;
  url: string;
}

const ModalLink: React.FC<Props> = ({ text, url }) => {
  return (
    <Link href={url}>
      <div
        className={`flex w-full justify-center  font-body cursor-pointer uppercase font-bold px-2 align-baseline text-gray-900 hover:text-pink-700 hover:bg-white py-12`}
      >
        {text}
      </div>
    </Link>
  );
};

export default ModalLink;
