import React from "react";

import SmallCard from "../organisims/SmallCard";

interface Props {
  episodes: {};
  image: string;
}

const EpisodeGrid = (props: Props) => {
  const { episodes, image } = props;
  console.log(episodes);
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2`}>
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
