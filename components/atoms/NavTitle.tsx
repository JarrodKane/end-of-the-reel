import React from "react";

interface Props {
  title: string;
}

const NavTitle: React.FC<Props> = ({ title }) => {
  return <h3 className={`flex items-center font-Nav text-3xl`}>{title}</h3>;
};

export default NavTitle;
