import React, { useState } from "react";
import Content from "./ContentWrap";
import { Player } from "../organisims/Player";
import ContentWrap from "../templates/ContentWrap";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={`min-h-screen bg-eotr-pattern flex  justify-center pb-20  bg-repeat `}
    >
      <div
        className={`z-10 mt-0 lg:mt-14 shadow-lg h-full  lg:w-7/12 w-full flex justify-center  `}
      >
        <ContentWrap>{children}</ContentWrap>

        <div
          className={` z-20 fixed inset-x-0 bottom-0 h-16 flex justify-center items-center `}
        >
          <Player />
        </div>
      </div>
      <div
        className={`fixed  bg-gradient-to-b from-blue-400 via-red-500 to-yellow-500 min-h-screen opacity-60  w-full`}
      />
    </div>
  );
};

export default Layout;
