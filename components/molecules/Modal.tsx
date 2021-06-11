import React, { useContext } from "react";
import ModalLink from "../atoms/ModalLink";
import { ModalContext } from "../../context/ModalProvider";

interface Props {}

const divStyle = {
  backgroundColor: "red",
  zindex: 50,
};

const Modal = () => {
  const { isOpen } = useContext(ModalContext);

  return (
    <div
      className={`fixed top-14 z-30  flex flex-col  justify-center text-5xl bg-red-500 w-screen h-screen  `}
    >
      <ModalLink url="/episodes" text="Episodes" />
      <ModalLink url="/about" text="About" />
      <ModalLink url="/contact" text="Contact" />
    </div>
  );
};

export default Modal;
