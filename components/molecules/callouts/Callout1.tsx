import React from "react";

interface Props {}

const Callout1 = (props: Props) => {
  return (
    <div className={`container w-full flex h-64 relative my-10`}>
      <div
        className={`z-0 bg-purple-700 h-4/5  text-indigo-50 text-3xl flex justify-center w-1/2 ml-4 md:ml-8  items-center p-5 whitespace-pre-line text-left shadow-md rounded-md  font-bold`}
      >
        {`Watch us on
        Youtube`}
      </div>
      <div
        className={`p-4 md:p-8 absolute right-4 md:right-8 top-10 h-full z-10  bg-black text-white w-1/2  shadow-md rounded-md whitespace-pre-line text-base  md:text-lg flex flex-col justify-center items-center`}
      >
        {`From episode 44 we started to also record every podcast with video!
        
        Now you don't just have to hear us, but you can see us too!`}
        <button
          className={` border border-white 4/5  md:w-3/5  p-2 m-2 mb-0 hover:bg-purple-500  transform duration-150 uppercase`}
        >
          Youtube
        </button>
      </div>
    </div>
  );
};

export default Callout1;
