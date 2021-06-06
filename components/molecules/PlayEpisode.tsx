import React, { useState, useContext } from "react";

import { PlayerContext } from "../../context/PlayerProvider";

import { updateSong } from "../organisims/Player";

interface Props {
  src: string;
  handleChangeEpisode: (src: string) => void;
}

const PlayEpisode: React.FC<Props> = ({ src, handleChangeEpisode }) => {
  const [isHover, setIsHover] = useState(false);
  const { changeEpisode } = useContext(PlayerContext);

  const handleHover = () => {
    const curH = isHover;
    setIsHover(!curH);
  };

  return (
    <div
      onClick={() => handleChangeEpisode(src)}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
      className="w-1/2 bg-indigo-700 rounded-l-md hover:bg-indigo-900 transform duration-300 cursor-pointer"
    >
      <div className={`w-full h-full flex justify-center items-center`}>
        <svg
          width="146"
          height="169"
          viewBox="0 0 146 169"
          xmlns="http://www.w3.org/2000/svg"
          className={`md:w-28 w-12`}
        >
          <path
            id="btnArrow"
            d="M142.596 80.1811C145.904 82.1105 145.904 86.8895 142.596 88.8189L7.51934 167.614C4.18605 169.558 -1.1908e-05 167.154 -1.17393e-05 163.295L-4.85086e-06 5.70517C-4.68218e-06 1.84622 4.18607 -0.558131 7.51935 1.38628L142.596 80.1811Z"
            fill="white"
            // className={`fill-current transform duration-300 text-gray-300 ${
            //   isHover ? "text-gray-100" : ""
            // }`}
          />
        </svg>
      </div>
    </div>
  );
};

export default PlayEpisode;
