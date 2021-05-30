import React from "react";

interface Props {}

const LinkSlash: React.FC<Props> = ({}) => {
  return (
    <div className={`flex items-center px-4  text-gray-800 cursor-default`}>
      /
    </div>
  );
};

export default LinkSlash;
