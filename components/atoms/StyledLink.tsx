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
        className={`flex items-center bg-red-300 font-body cursor-pointer uppercase font-bold px-3 align-baseline`}
      >
        Episodes
      </div>
    </Link>
  );
};

export default StyledLink;
