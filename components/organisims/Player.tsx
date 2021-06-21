import React, { useState, useContext, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaPlay, FaPause } from "react-icons/fa";

import { PlayerContext } from "../../context/PlayerProvider";

import { CtrlBtn } from "../atoms/player/CtrlBtn";
import { PlayBtn } from "../atoms/player/PlayBtn";
import { TimeDisp } from "../atoms/player/TimeDisp";

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
    <div
      className={` h-12  flex w-2/3 justify-items-center bg-gray-200 border border-indigo-600 border-double rounded-full items-center`}
    >
      <CtrlBtn>
        <BsArrowLeftShort />
      </CtrlBtn>
      <PlayBtn togglePlayPause={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay className={`relative left-0.5`} />}
      </PlayBtn>
      <CtrlBtn>
        <BsArrowRightShort />
      </CtrlBtn>
      <TimeDisp>0:00</TimeDisp>
      <div className={"flex mx-2 w-full flex-grow"}>
        <input
          type="range"
          className={`rounded-lg w-full flex-grow appearance-none text-purple-900 bg-green-500 h-3 cursor-pointer progressBar`}
        />
      </div>
      <TimeDisp>2:49</TimeDisp>
      <audio ref={audioRef} className={`w-0`} src={epSrc}>
        {/* <source key={uuidv4()} src={epSrc} type="audio/mpeg" /> */}
      </audio>
    </div>
  );
};

export { Player };
