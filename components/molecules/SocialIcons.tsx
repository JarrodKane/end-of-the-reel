import React from "react";

import Icon from "../atoms/Icon";

interface Props {
  styles?: string;
  width: number;
  height: number;
}

const SocialIcons: React.FC<Props> = ({ styles, width, height }) => {
  return (
    <div className={`flex justify-between ${styles} w-full`}>
      <Icon
        width={width}
        height={height}
        name="Spotify"
        src="spotify.svg"
        url="https://open.spotify.com/show/3Gk38MEFuJmVnt3rYzOopW?si=vyVgOYLvTZOLcSTYL8DVOQ"
      />
      <Icon
        width={width}
        height={height}
        name="Instagram"
        src="instagram.svg"
        url="https://www.instagram.com/endofthereel/"
      />
      <Icon
        width={width}
        height={height}
        name="Youtube"
        src="play-button.svg"
        url="https://www.youtube.com/channel/UCbQDfUcK1VABKkY4WkWylXw"
      />
      <Icon
        width={width}
        height={height}
        name="Apple Podcasts"
        src="applepodcasts.svg"
        url="https://podcasts.apple.com/ae/podcast/end-of-the-reel/id1466457494"
      />
      <Icon
        width={width}
        height={height}
        name="twitter"
        src="twitter.svg"
        url="https://twitter.com/reel_end"
      />
    </div>
  );
};

export default SocialIcons;
