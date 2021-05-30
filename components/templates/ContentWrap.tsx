import React from "react";

interface Props {}

const ContentWrap: React.FC<Props> = ({ children }) => {
  return (
    <div className={`max-w-screen-lg flex-grow bg-gray-100`}>{children}</div>
  );
};

export default ContentWrap;
