import React, { useContext } from "react";
import ModalLink from "../atoms/ModalLink";
// import { ModalContext } from "../../context/ModalProvider";

interface Props {}

const ModalNav = () => {
  // const { isOpen } = useContext(ModalContext);

  return (
    <div className={`relative`}>
      <div
        className={`fixed top-14 z-30 bg-red-500 h-screen w-screen text-3xl `}
      >
        <div className={`w-full h-full flex flex-col justify-center -mt-10`}>
          <ModalLink url="/" text="Home" />
          <ModalLink url="/episodes" text="Episodes" />
          <ModalLink url="/about" text="About" />
          <ModalLink url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default ModalNav;
