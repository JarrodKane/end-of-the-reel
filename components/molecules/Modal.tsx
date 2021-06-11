import React from "react";
import ModalLink from "../atoms/ModalLink";

interface Props {}

// const divStyle = {
//   backgroundColor: "blue",
// };

const Modal = () => {
  return (
    // <div
    //   className={`fixed top-14 z-50  h-screen  w-screen bg-red-500 `}
    //   // style={divStyle}
    // >
    <div
      className={`fixed top-14 z-50 flex flex-col justify-center text-5xl bg-red-500 w-screen h-screen `}
    >
      <ModalLink url="/episodes" text="Episodes" />

      <ModalLink url="/about" text="About" />

      <ModalLink url="/contact" text="Contact" />
    </div>
    // </div>
  );
};

export default Modal;
