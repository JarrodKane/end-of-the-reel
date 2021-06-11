import React, { useContext } from "react";
import ModalLink from "../atoms/ModalLink";
import { ModalContext } from "../../context/ModalProvider";

interface Props {}

const ModalNav = () => {
  const { isOpen } = useContext(ModalContext);

  return (
    <div
      className={`fixed top-14 z-30  flex flex-col bg-red-500  justify-center text-5xl  w-screen h-screen  `}
    >
      <ModalLink url="/episodes" text="Episodes" />
      <ModalLink url="/about" text="About" />
      <ModalLink url="/contact" text="Contact" />
    </div>
  );
};

export default ModalNav;
