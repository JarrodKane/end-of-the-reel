import React from "react";

import SmallCard from "../organisims/SmallCard";

interface Props {
  episodes: {};
  image: string;
}

//TODO: Need to select the correct image to send, either the default of the episode image

const EpisodeGrid = (props: Props) => {
  const { episodes, image } = props;
  console.log(episodes);
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5  m-5`}>
      {episodes.map((episode, i) => (
        <SmallCard
          //   handleChangeEpisode={handleChangeEpisode}
          key={episode.id}
          postNumber={i}
          title={episode.title}
          description={episode.content_html}
          src={episode.attachments[0].url}
          date={episode.date_published}
          image={image}
        />
      ))}
    </div>
  );
};

export default EpisodeGrid;
