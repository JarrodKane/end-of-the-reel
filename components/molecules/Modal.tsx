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

  console.log(isOpen);
  return (
    <div
      // className={`fixed top-14 z-50  flex flex-col  justify-center text-5xl bg-red-500 w-screen h-screen   ${
      //   isOpen ? "bg-red-500" : "hidden "
      // } `}
      className={`fixed top-14 z-50  flex flex-col justify-center text-5xl  w-screen h-screen `}
      style={divStyle}
    >
      <div
        className={`fixed top-14 z-50  flex flex-col  justify-center  bg-red-500 w-full h-full
       `}
      >
        <ModalLink url="/episodes" text="Episodes" />
        <ModalLink url="/about" text="About" />
        <ModalLink url="/contact" text="Contact" />
      </div>
    </div>
  );
};

export default Modal;
