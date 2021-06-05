import React, { useState } from "react";

interface Props {
  src: string;
}

// const [episode, setEpisode] = useState();

const Player: React.FC<Props> = ({ src }) => {
  return (
    <div className={`  bg-red-200 `}>
      <audio controls className={`w-full rounded-xl`}>
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Player;
