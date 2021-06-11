import React, { useState, createContext, FC } from "react";

type ModalContextState = {
  isOpen: boolean;
  handleModal: () => void;
};

//   const contextDefaultValues: PlayerContextState = {
//     episode: '',
//     changeEpisode: () => {},
//   };

export const ModalContext = createContext<ModalContextState>({
  isOpen: false,
  handleModal: () => {},
});

const ModalProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    const curOpen = isOpen;
    setIsOpen(!curOpen);
  };

  return (
    <ModalContext.Provider value={{ isOpen, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
