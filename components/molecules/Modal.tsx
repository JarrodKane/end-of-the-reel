import React from "react";
import ModalLink from "../atoms/ModalLink";

interface Props {}

const Modal = (props: Props) => {
  return (
    <div
      className={`fixed flex justify-center items-center top-14 z-30 inset-0 overflow-y-auto  w-screen h-screen bg-blue-200 opacity-95`}
    >
      <div
        className={`flex flex-col items-center justify-around text-5xl w-full`}
      >
        <ModalLink url="/episodes" text="Episodes" />

        <ModalLink url="/about" text="About" />

        <ModalLink url="/contact" text="Contact" />
      </div>
    </div>
  );
};

export default Modal;
