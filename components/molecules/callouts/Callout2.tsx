import React from "react";
import Image from "next/image";

interface Props {}

// TODO: Have the data sent to be backend to be stored in a database
// For now to just get the look of the poll, it'll be using hooks to store data
// TODO: Display a poll with data after a user has submitted their decision
// Will need some basic chekcing in place to prevent people from spamming submissions
const Callout2 = (props: Props) => {
  return (
    <div className={` flex justify-center  relative my-16 shadow-lg`}>
      <Image
        objectFit="cover"
        layout="fill"
        src={`/images/nicCage.jpg`}
        alt={`Picture of End Of The Reel podcast`}
        // height={400}
        // width={400}
        className={`w-full `}
      />

      <div
        className={`p-4 m-16  bg-black opacity-75 h-52 text-white w-4/5  shadow-md rounded-md whitespace-pre-line text-base  md:text-lg flex flex-col justify-center items-center`}
      >
        <div
          className={`text-3xl text-center`}
        >{`Is Nic Cage a good actor or a bad actor?`}</div>
        <div className={`w-full flex justify-center`}>
          <button
            className={` border border-white 1/5  md:w-1/5  p-2 m-2 mb-0 hover:bg-red-700  transform duration-150 uppercase`}
          >
            Good
          </button>
          <button
            className={` border border-white 1/5  md:w-1/5  p-2 m-2 mb-0 hover:bg-red-700  transform duration-150 uppercase`}
          >
            Bad
          </button>
          <button
            className={` border border-white 1/5  md:w-1/5  p-2 m-2 mb-0 hover:bg-red-700  transform duration-150 uppercase`}
          >
            Good Bad
          </button>
        </div>
      </div>
    </div>
  );
};

export default Callout2;
