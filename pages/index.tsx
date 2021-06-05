import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import Base from "../components/templates/Base";
import CardDetails from "../components/organisims/CardDetail";

import { getEpisodes } from "./api/podcast";

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

const Home: React.FC<Props> = ({ episodes, id }) => {
  //TODO: Allow for a choice of how many episodes they want shown on the homepage
  console.log(episodes);
  let image =
    "https://storage.pinecast.net/podcasts/covers/2c8fe705-d033-4427-9211-f60aba41ff65/EndOfTheReelLogo.jpg";

  episodes = episodes.items;
  const newList = episodes.slice(0, 3);

  return (
    <>
      <div className="flex flex-col">
        {/* IF there is an image for that episode it'll grab it, if there is not it'll grab the default icon for your podcast */}
        {newList.map((episode, i) => {
          if (episode.image !== undefined) {
            image = episode.image;
            return (
              <CardDetails
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

export default Home;
