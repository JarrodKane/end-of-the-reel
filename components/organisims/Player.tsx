import React, { useState, useContext, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaPlay, FaPause } from "react-icons/fa";

import { PlayerContext } from "../../context/PlayerProvider";

import { CtrlBtn } from "../atoms/player/CtrlBtn";
import { PlayBtn } from "../atoms/player/PlayBtn";
import { TimeDisp } from "../atoms/player/TimeDisp";

interface Props {}

const Player: React.FC<Props> = ({}) => {
  const { episode, episodeCur, changeEpisodeNew } = useContext(PlayerContext);
  const [epSrc, setEpSrc] = useState(episode);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Refernces
  const progressBar = useRef<HTMLInputElement | null>(null); //This is a refernce to the progressbar
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number | HTMLAudioElement | null | undefined>(); // refernce to animation

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (audioRef.current !== null) {
      if (!prevValue) {
        audioRef.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
        audioRef.current.pause();
        // cancelAnimationFrame(animationRef.current);
      }
    }
  };

  const whilePlaying = () => {
    if (audioRef.current !== null && progressBar.current !== null) {
      progressBar.current.value = audioRef.current.currentTime.toString();
      setCurrentTime(parseInt(progressBar.current.value));
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current !== null) {
      const seconds = Math.floor(audioRef.current.duration);
      setDuration(seconds);
      // progressBarRef.current.max = seconds;
    }
  };

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const updateSong = () => {
    changeEpisodeNew(episodeCur);
    setEpSrc(episodeCur);

    if (audioRef.current !== null) {
      setIsPlaying(true);
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  // Updates the player when ever a new song is clicked and an episode is running
  useEffect(() => {
    if (episodeCur.length !== 0) {
      updateSong();
    }
  }, [episodeCur]);

  // Only ran when the page loads or the episode changes
  useEffect(() => {
    if (
      episode.length !== 0 &&
      audioRef.current !== null &&
      progressBar.current !== null
    ) {
      setEpSrc(episode);
      const seconds = Math.floor(audioRef.current.duration);
      setDuration(seconds);

      progressBar.current.max = seconds as unknown as string;
    }
  }, [audioRef?.current?.onloadedmetadata, audioRef?.current?.readyState]);

  const changeRange = () => {
    if (audioRef.current !== null && progressBar.current !== null) {
      audioRef.current.currentTime = parseInt(progressBar.current.value);
      setCurrentTime(parseInt(progressBar.current.value));
    }
  };

  const thirty = (dir: boolean) => {
    if (progressBar.current !== null) {
      if (dir) {
        const back = Number(progressBar.current.value) - 30;
        progressBar.current.value = back.toString();
        changeRange();
      } else {
        const forward = Number(progressBar.current.value) + 30;
        progressBar.current.value = forward.toString();
        changeRange();
      }
    }
  };

  return (
    <div
      className={` md:h-12 h-full flex md:w-2/3 w-full justify-items-center bg-gray-200 border   md:rounded-full items-center  border-indigo-600`}
    >
      <CtrlBtn>
        <BsArrowLeftShort
          onClick={() => {
            thirty(true);
          }}
        />
      </CtrlBtn>
      <PlayBtn togglePlayPause={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay className={`relative left-0.5`} />}
      </PlayBtn>
      <CtrlBtn>
        <BsArrowRightShort
          onClick={() => {
            thirty(false);
          }}
        />
      </CtrlBtn>
      <TimeDisp>{calculateTime(currentTime)}</TimeDisp>
      <div className={"flex mx-2  flex-grow"}>
        <input
          type="range"
          defaultValue={0}
          ref={progressBar}
          onChange={changeRange}
          className={`rounded-lg w-full flex-grow appearance-none text-purple-900 bg-green-500 h-3 cursor-pointer progressBar`}
        />
      </div>
      <TimeDisp>
        {duration && !isNaN(duration) ? calculateTime(duration) : `00:00`}
      </TimeDisp>
      <audio
        ref={audioRef}
        className={`w-0`}
        preload="metadata"
        onLoadedMetadata={onLoadedMetadata}
      >
        <source key={uuidv4()} src={epSrc} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export { Player };
