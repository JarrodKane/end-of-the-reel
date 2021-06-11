import React, { useEffect, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

// import styles from '../styles/Home.module.css'
import Base from "../components/templates/Layout";
import CardDetails from "../components/organisims/Cards/CardDetail";

import { PlayerContext } from "../context/PlayerProvider";

import { getEpisodes } from "./api/podcast";
import ContentWrap from "../components/templates/ContentWrap";

// Fix up the prop types herre
//TODO: Remove interfaces that are shared into a Interface file/folders
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
    // revalidate: 1,
  };
};

const Home: React.FC<Props> = ({ episodes, id }) => {
  //TODO: Allow for a choice of how many episodes they want shown on the homepage

  const { episode, changeEpisode, changeEpisodeNew } =
    useContext(PlayerContext);

  let image =
    "https://storage.pinecast.net/podcasts/covers/2c8fe705-d033-4427-9211-f60aba41ff65/EndOfTheReelLogo.jpg";

  let episodeList: Array<any> = [...episodes.items];

  const newList = episodeList.slice(0, 3);

  const handleChangeEpisode = (src: string) => {
    changeEpisodeNew(src);
  };

  // Checks on load if an episode is loaded in, if there are no episodes loaded in it'll load the most recent
  useEffect(() => {
    if (episode.length === 0) {
      changeEpisode(newList[0].attachments[0].url);
    }
  }, []);

  return (
    <ContentWrap>
      <div className="flex flex-col w-full ">
        {/* IF there is an image for that episode it'll grab it, if there is not it'll grab the default icon for your podcast */}
        {newList.map((episode, i) => {
          if (episode.image !== undefined) {
            image = episode.image;
            return (
              <CardDetails
                handleChangeEpisode={handleChangeEpisode}
                key={episode.id}
                postNumber={i}
                title={episode.title}
                description={episode.content_html}
                src={episode.attachments[0].url}
                date={episode.date_published}
                image={image}
              />
            );
          }

          return (
            <CardDetails
              handleChangeEpisode={handleChangeEpisode}
              key={episode.id}
              postNumber={i}
              title={episode.title}
              description={episode.content_html}
              src={episode.attachments[0].url}
              date={episode.date_published}
              image={image}
            />
          );
        })}
      </div>
    </ContentWrap>
  );
};

export default Home;
