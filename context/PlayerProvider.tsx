import React, { useState, createContext, FC } from "react";

type PlayerContextState = {
  episode: string;
  episodeCur: string;
  changeEpisode: (src: string) => void;
  changeEpisodeNew: (src: string) => void;
};

//   const contextDefaultValues: PlayerContextState = {
//     episode: '',
//     changeEpisode: () => {},
//   };

// TODO: Fix up the way the episodeCur and episode are being used
// There is probabbly a much cleaner way to do this, but I needed to find a way to set an initial episode and NOT play it before allowing a client to hit play on a different episode and set it to Play right away
// This solution is very messy right now

export const PlayerContext = createContext<PlayerContextState>({
  episode: "",
  episodeCur: "",
  changeEpisode: () => {},
  changeEpisodeNew: () => {},
});

const PlayerProvider: FC = ({ children }) => {
  const [episode, setEpisodeSelected] = useState("");
  const [episodeCur, setEpisodCur] = useState("");

  const changeEpisode = (src: string) => {
    setEpisodeSelected(src);
    // setEpisodCur(src);
  };

  const changeEpisodeNew = (src: string) => {
    setEpisodCur(src);
  };

  return (
    <PlayerContext.Provider
      value={{ episode, changeEpisode, changeEpisodeNew, episodeCur }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
