import React from "react";
import Image from "next/image";

interface Props {
  path: string;
}

const Header: React.FC<Props> = ({ path }) => {
  let pathSrc = path;
  let text = path;

  switch (path) {
    case "/":
      pathSrc = "testing.jpg";
      text = "End Of The Reel";
      break;
    case "episodes":
      pathSrc = "testing.jpg";
      text = "Episodes";
      break;
    case "contact":
      pathSrc = "testing.jpg";
      text = "Contact";
      break;
    case "about":
      pathSrc = "testing.jpg";
      text = "About";
      break;

    default:
      pathSrc = "testing.jpg";
      text = "End Of The Reel";

      break;
  }

  return (
    <div className="relative w-full h-40">
      <Image
        objectFit="cover"
        layout="fill"
        src={`/images/${pathSrc}`}
        alt={`Picture of ${path}`}
        // height={400}
        // width={400}
        className={` opacity-90  filter  contrast-100  saturate-150 `}
      />
      <h1
        className={`absolute inset-0  z-10 flex flex-col items-center justify-center text-3xl md:text-5xl text-white font-bold bg-black  bg-opacity-40 uppercase text-center`}
      >
        {text}
      </h1>
    </div>
  );
};

export default Header;
