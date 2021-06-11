import React, { useState, useContext } from "react";

import { useRouter } from "next/router";

import Nav from "../organisims/Nav";
import Hero from "../molecules/Hero";
import Footer from "../organisims/Footer";
import Modal from "../molecules/Modal";

import { ModalContext } from "../../context/ModalProvider";

interface Props {}

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
