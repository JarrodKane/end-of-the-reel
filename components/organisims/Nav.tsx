import React from "react";

import NavTitle from "../atoms/NavTitle";
import LinkSlash from "../atoms/LinkSlash";
import StyledLink from "../atoms/StyledLink";
import SocialIcons from "../molecules/SocialIcons";

interface Props {}

const Nav: React.FC<Props> = ({}) => {
  return (
    <div
      className={`grid grid-flow-col grid-cols-4 text-align bg-white py-1 px-5`}
    >
      <div className={`flex`}>
        <NavTitle title="End of the Reel" url="/" />
      </div>

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
      <SocialIcons width={35} height={35} />
    </div>
  );
};

export default Nav;
