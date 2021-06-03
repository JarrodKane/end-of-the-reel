import React from "react";

interface Props {
  title: string;
}

const NavTitle: React.FC<Props> = ({ title }) => {
  return (
    <h3
      className={`flex items-center font-Nav text-3xl font-bold tracking-tight text-gray-800`}
    >
      {title}
    </h3>
  );
};

export default NavTitle;
