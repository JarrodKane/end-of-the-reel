import React from "react";

import { getEpisodes } from "../api/podcast";

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
  // let { title, content_html, date_published } = props.episode[0];
  // const { url } = props.episode[0].attachments[0];

  return <div>title</div>;
};

export default Episode;
