import React from "react";

import SocialIcons from "../molecules/SocialIcons";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className={`flex flex-col h-40 justify-evenly items-center   w-full `}>
      <div className="uppercase font-bold text-sm">End Of The Reel</div>
      <p className={`text-sm`}>A podcast about movies so bad they're good</p>
      <p className={`text-sm`}>Produced by Jarrod Kane, and Ethan Kane</p>
      {/* Button for patron or shoutout here */}
      <div
        className={`w-4/6 md:w-2/6 flex flex-col justify-evenly items-center `}
      >
        <SocialIcons width={35} height={35} />
      </div>
    </div>
  );
};

export default Footer;
