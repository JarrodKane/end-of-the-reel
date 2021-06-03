import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import Base from "../components/templates/Base";
import CardDetails from "../components/organisims/CardDetail";

import { getEpisodes } from "./api/podcast";

interface Props {
  episodes: [];
  episodeList: [];
  id: string;
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

const Home: React.FC<Props> = ({ episodes, id }) => {
  //TODO: Allow for a choice of how many episodes they want shown on the homepage
  const newList = episodes.slice(0, 3);
  console.log(newList);
  return (
    <Base>
      <div>Search Bar here</div>
      {newList.map((episode) => (
        <CardDetails
          key={episode.id}
          title={episode.title}
          description={episode.content_html}
          src={episode.attachments[0].url}
          date={episode.date_published}
        />
      ))}
      <div>Episodes, one per row with breaks inbetween, max 3 on page</div>
      <div>Call to action thingy</div>
      <div>Footer information</div>
    </Base>
  );
};

export default Home;
