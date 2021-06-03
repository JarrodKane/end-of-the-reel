import React from "react";

import parse from "html-react-parser";

interface Props {
  title: string;
  src: string;
  description: string;
  date: string;
}

const CardEDetail: React.FC<Props> = ({ title, src, description, date }) => {
  console.log(description);
  return (
    <div className={`bg-red-400`}>
      <div>{title}</div>
      <div>{date}</div>
      <div>Image</div>
      <div>Player</div>
      <div> {parse(description)}</div>
    </div>
  );
};

export default CardEDetail;
