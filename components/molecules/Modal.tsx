import React from "react";
import ModalLink from "../atoms/ModalLink";

interface Props {}

const Modal = () => {
  return (
    <div className={`fixed top-14 z-30 bg-red-500 w-full h-full opacity-95  `}>
      <div className={`flex flex-col  justify-center text-5xl w-full h-full`}>
        <ModalLink url="/episodes" text="Episodes" />
        <ModalLink url="/about" text="About" />
        <ModalLink url="/contact" text="Contact" />
      </div>
    </div>
  );
};

export default Modal;
