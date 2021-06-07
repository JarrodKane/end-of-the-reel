import React, { useEffect, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import CardDetails from "../../components/organisims/CardDetail";

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

const Episodes: React.FC<Props> = ({ episodes, id }) => {
  //TODO: Allow for a choice of how many episodes they want shown on the homepage

  const { episode, changeEpisode, changeEpisodeNew } =
    useContext(PlayerContext);

  let image =
    "https://storage.pinecast.net/podcasts/covers/2c8fe705-d033-4427-9211-f60aba41ff65/EndOfTheReelLogo.jpg";

  episodes = episodes.items;
  const newList = episodes.slice(0, 3);

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
    <>
      <div className="flex flex-col">
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
    </>
  );
};

export default Episodes;
