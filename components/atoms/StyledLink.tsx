import React from "react";
import Link from "next/link";

interface Props {
  text: string;
  url: string;
}

const StyledLink: React.FC<Props> = ({ text, url }) => {
  return (
    <Link href="/episodes">
      <div
        className={`flex items-center font-body cursor-pointer uppercase font-bold  align-baseline text-gray-900 hover:text-pink-700`}
      >
        {text}
      </div>
    </Link>
  );
};

export default StyledLink;
