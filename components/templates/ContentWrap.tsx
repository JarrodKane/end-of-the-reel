import React from "react";

import { useRouter } from "next/router";

import Nav from "../organisims/Nav";
import Hero from "../molecules/Hero";
import Footer from "../organisims/Footer";

interface Props {}

const ContentWrap: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <div className={`w-full  bg-gray-100`}>
      <Nav />
      <Hero path={router.pathname} />
      {children}
      <Footer />
    </div>
  );
};

export default ContentWrap;
