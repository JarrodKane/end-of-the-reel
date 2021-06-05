import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import Base from "../../components/templates/Base";

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
  //TODO: Allow for a choice of how many episodes they want shown on the homepage
  const newList = episodes.slice(0, 3);

  return (
    <div>
      {newList.map((episode) => (
        <div>{episode.title}</div>
      ))}
      <div>Search Bar here</div>
      <div>Episodes, one per row with breaks inbetween, max 3 on page</div>
      <div>Call to action thingy</div>
      <div>Footer information</div>
    </div>
  );
};

export default Podcast;
