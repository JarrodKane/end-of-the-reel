import React, { useState, createContext, FC } from "react";

type PlayerContextState = {
  episode: string;
  changeEpisode: (src: string) => void;
};

//   const contextDefaultValues: PlayerContextState = {
//     episode: '',
//     changeEpisode: () => {},
//   };

export const PlayerContext = createContext<PlayerContextState>({
  episode: "",
  changeEpisode: () => {},
});

const PlayerProvider: FC = ({ children }) => {
  const [episode, setEpisodeSelected] = useState("");

  const changeEpisode = (src: string) => setEpisodeSelected(src);

  return (
    <PlayerContext.Provider value={{ episode, changeEpisode }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
