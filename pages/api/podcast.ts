// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

// This is using .then syntax
// export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
//   res.status(200).json({ name: "John Doe" });
// };

// export const getEpisodes = () => {
//   const response = fetch("https://pinecast.com/jsonfeed/end-of-the-reel")
//     .then((response) => response.json())
//     .then((data) => data);

//   return response;
// };

// TODO: Change this so that it grabs the podcast variable name, this way other people can just use what
// ever their name is for their podcast and grab it rather than only getting my podcast

// Changed to using async await syntax
export const getEpisodes = async () => {
  try {
    const response = await fetch(
      "https://pinecast.com/jsonfeed/end-of-the-reel"
    );

    const dataJson = await response.json();

    return dataJson;
  } catch (error) {
    console.log(`An error is being thrown: ${error}`);
  }
};
