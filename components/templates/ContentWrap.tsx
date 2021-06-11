import React, { useState, useContext } from "react";

import { useRouter } from "next/router";

import Nav from "../organisims/Nav";
import Hero from "../molecules/Hero";
import Footer from "../organisims/Footer";
// import Modal from "../molecules/Modal";
import ModalLink from "../atoms/ModalLink";

import { ModalContext } from "../../context/ModalProvider";

interface Props {}

const Modal = () => {
  return (
    // <div
    //   className={`fixed top-14 z-50  h-screen  w-screen bg-red-500 `}
    //   // style={divStyle}
    // >
    <div
      className={`fixed top-14 z-50 flex flex-col  justify-center text-5xl bg-red-500 w-full h-full `}
    >
      <ModalLink url="/episodes" text="Episodes" />

      <ModalLink url="/about" text="About" />

      <ModalLink url="/contact" text="Contact" />
    </div>
    // </div>
  );
};

const ContentWrap: React.FC<Props> = ({ children }) => {
  const { isOpen } = useContext(ModalContext);

  const router = useRouter();

  return (
    <div className={`w-full bg-gray-100 `}>
      <Nav />
      <Hero path={router.pathname} />
      {isOpen ? <Modal /> : null}

      {children}

      <Footer />
    </div>
  );
};

export default ContentWrap;
