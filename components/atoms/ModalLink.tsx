import React, { useContext } from "react";
import Link from "next/link";

import { ModalContext } from "../../context/ModalProvider";

interface Props {
  text: string;
  url: string;
}

const ModalLink: React.FC<Props> = ({ text, url }) => {
  const { handleModal } = useContext(ModalContext);

  return (
    <Link href={url}>
      <div
        onClick={handleModal}
        className={`flex w-full justify-center  font-body cursor-pointer uppercase font-bold px-2 align-baseline text-gray-900 hover:text-pink-700 hover:bg-white py-12`}
      >
        {text}
      </div>
    </Link>
  );
};

export default ModalLink;
