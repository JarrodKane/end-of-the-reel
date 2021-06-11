import React, { useContext } from "react";
import ModalLink from "../atoms/ModalLink";
import { ModalContext } from "../../context/ModalProvider";

interface Props {}

const divStyle = {
  backgroundColor: "#ef4444",
  zindex: 50,
};

const ModalNav = () => {
  const { isOpen } = useContext(ModalContext);

  return (
    <div
      className={`fixed top-14 z-30  flex flex-col  justify-center text-5xl  w-screen h-screen  `}
      style={divStyle}
    >
      <ModalLink url="/episodes" text="Episodes" />
      <ModalLink url="/about" text="About" />
      <ModalLink url="/contact" text="Contact" />
    </div>
  );
};

export default ModalNav;
