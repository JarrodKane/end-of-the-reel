import React from "react";

import { useRouter } from "next/router";

import Nav from "../organisims/Nav";
import Hero from "../molecules/Hero";

interface Props {}

const ContentWrap: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  console.log(router);
  return (
    <div className={`max-w-screen-lg flex-grow  bg-gray-100`}>
      <Nav />
      <Hero path={router.pathname} />
      {children}
    </div>
  );
};

export default ContentWrap;
