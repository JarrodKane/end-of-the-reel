import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import CardDetails from "../../components/organisims/Cards/CardDetail";
import EpisodeGrid from "../../components/organisims/EpisodeGrid";

import { PlayerContext } from "../../context/PlayerProvider";

import { getEpisodes } from "../api/podcast";

// interface EpisodeO {
//   [index: number]: {
//     author: {};
//     description: string;
//     feed_url: string;
//     hoome_page_url: string;
//     icon: string;
//     items: [];
//     title: string;
//     version: string;
//     attachments: [Attatchments];
//   };
// }

// interface Attatchments {
//   url: string;
// }

// interface Props {
//   episodes: [
//     {
//       id: string;
//       title: string;
//       content_html: any;
//       attachments: [Attatchments];
//       date_published: string;
//     }
//   ];
//   image: string;
// }

interface Props {
  episodes: {
    author: {};
    description: string;
    feed_url: string;
    hoome_page_url: string;
    icon: string;
    items: [];
    title: string;
    version: string;
    attachments: [
      {
        url: string;
        duration_in_seconds: number;
        mime_type: string;
        size_in_bytes: number;
      }
    ];
  };

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
  let { episodes } = props;

  // TODO: Remove the use of any
  // let episodeList: Array<EpisodeO> = [...episodes.items];
  let episodeList: Array<any> = [...episodes.items];

  const { episode, changeEpisode, changeEpisodeNew } =
    useContext(PlayerContext);

  let image =
    "https://storage.pinecast.net/podcasts/covers/2c8fe705-d033-4427-9211-f60aba41ff65/EndOfTheReelLogo.jpg";

  // const handleChangeEpisode = (src: string) => {
  //   changeEpisodeNew(src);
  // };

  // Checks on load if an episode is loaded in, if there are no episodes loaded in it'll load the most recent
  useEffect(() => {
    if (episode.length !== 0) {
      if (episodeList[0].attachments[0] !== undefined) {
        changeEpisode(episodeList[0].attachments[0].url);
      }
    }
  }, []);

  return (
    <>
      <EpisodeGrid episodes={episodeList} image={image} />
    </>
  );
};

export default Episodes;

// if (title !== null) {
//   let slugName: string | RegExpMatchArray | null;
//   slugName = title.match(/\w+/g);
//   if (slugName !== null) {
//     slugName = slugName.join("-");
//     setSlug(slugName);
//   }
// }
