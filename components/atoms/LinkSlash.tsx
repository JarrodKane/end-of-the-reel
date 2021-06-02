import React from "react";

interface Props {}

const LinkSlash: React.FC<Props> = ({}) => {
  return (
    <div className={`flex items-center px-1  text-gray-800 cursor-default`}>
      /
    </div>
  );
};

export default LinkSlash;
