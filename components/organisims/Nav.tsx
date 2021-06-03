import React from "react";

import NavTitle from "../atoms/NavTitle";
import LinkSlash from "../atoms/LinkSlash";
import StyledLink from "../atoms/StyledLink";
import Icon from "../atoms/Icon";

interface Props {}

const Nav: React.FC<Props> = ({}) => {
  return (
    <div
      className={`grid grid-flow-col grid-cols-4 text-align bg-white py-1 px-5`}
    >
      <NavTitle title="End of the Reel" />
      <div className={`col-span-2 flex items-center place-content-center`}>
        <StyledLink url="/episodes" text="Episodes"></StyledLink>
        <LinkSlash />
        <StyledLink url="/about" text="About">
          About
        </StyledLink>
        <LinkSlash />
        <StyledLink url="/contact" text="Contact">
          Contact
        </StyledLink>
      </div>
      <div className={`flex items-center`}>
        <Icon
          name="Spotify"
          src="spotify.svg"
          url="https://open.spotify.com/show/3Gk38MEFuJmVnt3rYzOopW?si=vyVgOYLvTZOLcSTYL8DVOQ"
        />
        <Icon
          name="Instagram"
          src="instagram.svg"
          url="https://www.instagram.com/endofthereel/"
        />
        <Icon
          name="Youtube"
          src="play-button.svg"
          url="https://www.youtube.com/channel/UCbQDfUcK1VABKkY4WkWylXw"
        />
        <Icon
          name="Apple Podcasts"
          src="applepodcasts.svg"
          url="https://podcasts.apple.com/ae/podcast/end-of-the-reel/id1466457494"
        />
        <Icon
          name="twitter"
          src="twitter.svg"
          url="https://twitter.com/reel_end"
        />
      </div>
    </div>
  );
};

export default Nav;
