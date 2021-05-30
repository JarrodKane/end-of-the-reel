import React from "react";
import Link from "next/link";

import NavTitle from "../atoms/NavTitle";
import LinkSlash from "../atoms/LinkSlash";
import StyledLink from "../atoms/StyledLink";

interface Props {}

const Nav: React.FC<Props> = ({}) => {
  return (
    <div className={`grid grid-flow-col grid-cols-4 text-align bg-red-500`}>
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
      <div className={`flex items-center`}>Icons</div>
    </div>
  );
};

export default Nav;
