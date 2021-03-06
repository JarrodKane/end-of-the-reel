import React, { useState, useContext } from "react";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

// Context
import { ModalContext } from "../../context/ModalProvider";

// HOOKS
import useWindowSize from "../../hooks/useWindowSize";

// COMPONENTS
import ModalNav from "../molecules/ModalNav";
import Hamburger from "../atoms/svg/Hamburger";
import NavTitle from "../atoms/NavTitle";
import LinkSlash from "../atoms/LinkSlash";
import StyledLink from "../atoms/StyledLink";

import SocialIcons from "../molecules/SocialIcons";

// TODO: Store the state of isOpen in context, so that you can turn off the overflow when it's open, but it's not really an issue since you'll only really see this in mobile view

interface Props {}

const Nav = (props: Props) => {
  const { isOpen, handleModal } = useContext(ModalContext);

  const window = useWindowSize();

  if (window.width !== undefined && window.width < 1024) {
    return (
      <>
        {isOpen ? <ModalNav /> : ""}

        <div
          className={`sticky top-0  flex justify-center text-align bg-white py-1 px-5 md:px-2 shadow-md opacity-90 z-30`}
        >
          <div
            className={`flex h-12 w-12 cursor-pointer`}
            onClick={() => handleModal()}
          >
            <Hamburger />
          </div>
          <div className={`flex w-full justify-center `}>
            <NavTitle title="End Of The Reel" url="/" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div
        className={`sticky top-0 opacity-90 z-30 grid grid-flow-col grid-cols-4 text-align bg-white py-1 px-5`}
      >
        <div className={`flex`}>
          <NavTitle title="End of the Reel" url="/" />
        </div>

        <div className={`col-span-2 flex items-center place-content-center`}>
          <StyledLink url="/episodes" text="Episodes" />
          <LinkSlash />
          <StyledLink url="/about" text="About" />
          <LinkSlash />
          <StyledLink url="/contact" text="Contact" />
        </div>
        <SocialIcons width={35} height={35} />
      </div>
    );
  }
};

export default Nav;
