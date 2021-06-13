import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  url: string;
}

const NavTitle: React.FC<Props> = ({ title, url }) => {
  return (
    <Link href={url}>
      <h2
        className={`inline-flex  items-center font-Nav text-3xl font-bold tracking-tight text-gray-800 cursor-pointer`}
      >
        {title}
      </h2>
    </Link>
  );
};

export default NavTitle;
