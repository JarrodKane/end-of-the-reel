import React, { useContext } from "react";

import { ModalContext } from "../../context/ModalProvider";
import Modal from "../molecules/Modal";

interface Props {}

const ModalWrap: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {isOpen ? <Modal /> : null}
      {children}
    </div>
  );
};

export default ModalWrap;
