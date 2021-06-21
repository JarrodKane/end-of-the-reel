import React, { useState, useContext, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaPlay, FaPause } from "react-icons/fa";

import { PlayerContext } from "../../context/PlayerProvider";

interface Props {}

// TODO: You want the default most recent episode loaded in when someone first navigates to the site no matter whicih page they go to first. There might need to be a call to the API and then storing of the response in Context from the start?
// If they go to a specific episode page, they can get that episodes url, but if they go to any other page, they can get the most recent episode
// That only leaves Contact and About that will need to call the API to only get the most recent episode to set

const Player: React.FC<Props> = ({}) => {
  const { episode, episodeCur, changeEpisodeNew } = useContext(PlayerContext);
  const [epSrc, setEpSrc] = useState(episode);
  const [isPlaying, setIsPlaying] = useState(false);

  // Needed an audio ref because changing the src of the component does not actually update it
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    const currentState = isPlaying;
    setIsPlaying(!currentState);
  };

  const updateSong = (src: string) => {
    changeEpisodeNew(src);
    console.log(src);
    setEpSrc(src);

    if (audioRef.current !== null) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (episodeCur.length !== 0) {
      updateSong(episodeCur);
    }
  }, [episodeCur]);

  useEffect(() => {
    setEpSrc(episode);
  }, [episode]);

  return (
    <div className={`w-full  flex justify-center `}>
      <button>
        <BsArrowLeftShort />
      </button>
      <button onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button>
        <BsArrowRightShort />
      </button>
      <div>0:00</div>
      <div>
        <input type="range" />
        <div>2:49</div>
      </div>
      <audio ref={audioRef} className={`w-3/4 rounded-lg`}>
        <source key={uuidv4()} src={epSrc} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export { Player };
