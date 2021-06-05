import React from "react";

import PlayIcon from "../atoms/PlayIcon";

interface Props {
  src: string;
  handleEpisode?: (src: string) => void;
}

const PlayEpisode: React.FC<Props> = ({ src }) => {
  console.log(src);
  return (
    <div className="w-1/2 bg-gray-500 rounded-l-md">
      <div className={`w-full flex justify-center `}></div>
    </div>
  );
};

export default PlayEpisode;
