import React from "react";

// interface Props {
//   width: number;
//   height: number;
// }

const Hamburger = (props: Props) => {
  //   const { width, height } = props;
  return (
    <svg
      width=""
      height=""
      viewBox="0 0 308 308"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Hamburger">
        <rect
          id="Rectangle 1"
          x="39"
          y="49"
          width="230"
          height="40"
          rx="15"
          fill="black"
        />
        <rect
          id="Rectangle 2"
          x="39"
          y="134"
          width="230"
          height="40"
          rx="15"
          fill="black"
        />
        <rect
          id="Rectangle 3"
          x="39"
          y="219"
          width="230"
          height="40"
          rx="15"
          fill="black"
        />
      </g>
    </svg>
  );
};

export default Hamburger;
