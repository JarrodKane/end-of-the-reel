import React from "react";
import Nav from "../organisims/Nav";

interface Props {}

const ContentWrap: React.FC<Props> = ({ children }) => {
  return (
    <div className={`max-w-screen-lg flex-grow  bg-gray-100`}>
      <Nav />
      {children}
    </div>
  );
};

export default ContentWrap;
