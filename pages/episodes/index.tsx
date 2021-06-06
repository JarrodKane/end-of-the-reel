import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import Base from "../../components/templates/Layout";
import { PlayerContext } from "../../context/PlayerProvider";

import { getEpisodes } from "../api/podcast";

interface Props {
  episodes: [];
  episodeList: [];
}

export const getStaticProps = async () => {
  const res = await getEpisodes();

  return {
    props: {
      episodes: res.items,
    },
    revalidate: 1,
  };
};

const Podcast: React.FC<Props> = ({ episodes }) => {
  const { episode, changeEpisode } = useContext(PlayerContext);

  //TODO: Allow for a choice of how many episodes they want shown on the homepage
  const newList = episodes.slice(0, 3);

  return (
    <>
      {newList.map((episode) => (
        <div>{episode.title}</div>
      ))}
    </>
  );
};

export default Podcast;
