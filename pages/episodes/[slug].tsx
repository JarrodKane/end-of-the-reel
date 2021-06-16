import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";

import { PlayerContext } from "../../context/PlayerProvider";
import { getEpisodes } from "../api/podcast";

import CardEpisode from "../../components/organisims/Cards/CardEpisode";

interface Props {
  episode: any;
}

interface Paths {
  params: { slug: string };
}

export async function getStaticPaths() {
  const res = await getEpisodes();

  let paths = res.items.map((item: any) => {
    let newTitle = item.title.match(/\w+/g);
    newTitle = newTitle.join("-");
    return {
      params: { slug: newTitle },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (props: Paths) => {
  let { params } = props;
  const res = await getEpisodes();

  let episode = res.items.filter((episode: { title: string }) => {
    let newTitle: string | RegExpMatchArray | null =
      episode.title.match(/\w+/g);
    if (newTitle !== null) {
      newTitle = newTitle.join("-");
      return newTitle === params.slug;
    }
  });

  return {
    props: {
      episode: episode,
    },
    // revalidate: 1,
  };
};

const Episode = (props: Props) => {
  let { id, title, content_html, date_published } = props.episode[0];
  const { url } = props.episode[0].attachments[0];

  const metaTitle = title.splice(0, 3);

  const { episode, changeEpisode, changeEpisodeNew } =
    useContext(PlayerContext);

  useEffect(() => {
    if (episode.length !== 0) {
      changeEpisode(url);
    } else {
      changeEpisode(url);
    }
  }, []);

  let image =
    "https://storage.pinecast.net/podcasts/covers/2c8fe705-d033-4427-9211-f60aba41ff65/EndOfTheReelLogo.jpg";
  // const image = "daf";

  const handleChangeEpisode = (src: string) => {
    changeEpisodeNew(src);
  };

  return (
    <div className="flex flex-col w-full">
      <Head>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} key={uuidv4()} />
      </Head>
      <CardEpisode
        handleChangeEpisode={handleChangeEpisode}
        key={id}
        postNumber={1}
        title={title}
        description={content_html}
        src={url}
        date={date_published}
        image={image}
      />
    </div>
  );
};

export default Episode;
