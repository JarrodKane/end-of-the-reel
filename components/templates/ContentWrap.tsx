import React from "react";

import { useRouter } from "next/router";

import Nav from "../organisims/Nav";
import Hero from "../molecules/Hero";
import Footer from "../organisims/Footer";

interface Props {}

const ContentWrap: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <div className={`max-w-screen-lg flex-grow  bg-gray-100`}>
      <Nav />
      <Hero path={router.pathname} />
      {children}
      <Footer />
    </div>
  );
};

export default ContentWrap;
