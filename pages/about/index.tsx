import React from "react";

interface Props {}

const About = (props: Props) => {
  return (
    <div className="p-3 flex flex-col w-full items-center">
      <div className={`max-w-prose whitespace-pre-line`}>
        {`Light banter and discussion about the world of bad movies.
        
        If you're down for some 80's, 90's, horror, sci-fi, schlock then this is the right podcast for you. Discussing all the great classics from The Room, to Bee Movie.
        
        Join us on our movie hunting adventure to find the very best of the worst when it comes to movies.

        https://www.instagram.com/endofthereel/
        https://www.facebook.com/EndOfTheReel
        https://twitter.com/reel_end
`}
      </div>
    </div>
  );
};

export default About;
