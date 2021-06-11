import React, { useContext } from "react";
import ModalLink from "../atoms/ModalLink";
import { ModalContext } from "../../context/ModalProvider";

interface Props {}

// const divStyle = {
//   backgroundColor: "blue",
// };

const Modal = () => {
  const { isOpen } = useContext(ModalContext);

  console.log(isOpen);
  return (
    <div
      className={`fixed top-14 z-50  flex flex-col  justify-center text-5xl bg-red-500 w-screen h-screen  transition duration-500  ${
        isOpen ? "" : "hidden"
      } `}
    >
      <ModalLink url="/episodes" text="Episodes" />

      <ModalLink url="/about" text="About" />

      <ModalLink url="/contact" text="Contact" />
    </div>
  );
};

export default Modal;
