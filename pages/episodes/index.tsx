import React, { useEffect, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import CardDetails from "../../components/organisims/CardDetail";
import EpisodeGrid from "../../components/organisims/EpisodeGrid";

import { PlayerContext } from "../../context/PlayerProvider";

import { getEpisodes } from "../api/podcast";

// Fix up the prop types herre
interface Props {
  episodes: { items: [] };
  episodeList: [];
  id: string;
}

export const getStaticProps = async () => {
  const res = await getEpisodes();

  return {
    props: {
      episodes: res,
    },
    revalidate: 1,
  };
};

const Episodes = (props: Props) => {
  let { episodes, id } = props;

  const { episode, changeEpisode, changeEpisodeNew } =
    useContext(PlayerContext);

  let image =
    "https://storage.pinecast.net/podcasts/covers/2c8fe705-d033-4427-9211-f60aba41ff65/EndOfTheReelLogo.jpg";

  episodes = episodes.items;

  const handleChangeEpisode = (src: string) => {
    changeEpisodeNew(src);
  };

  // Checks on load if an episode is loaded in, if there are no episodes loaded in it'll load the most recent
  useEffect(() => {
    if (episode.length === 0) {
      changeEpisode(episodes[0].attachments[0].url);
    }
  }, []);

  return (
    <>
      <EpisodeGrid episodes={episodes} image={image} />
    </>
  );
};

export default Episodes;
