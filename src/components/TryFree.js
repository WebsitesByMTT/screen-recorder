import React from "react";

const TryFree = ({data}) => {
  return (
    <div className="px-5 py-5 lg:py-10 lg:px-14">
      <div className="bg-[#F0EBFA] py-[12vh] rounded-3xl px-[5vw] md:px-[10vw] flex flex-col gap-7">
        <h2 className=" text-3xl md:text-4xl lg:text-5xl text-center ">
          {data.heading}
        </h2>
        <p className=" text-base text-center">
          {data.text}
        </p>

        {data.subtext&&<p className="m-auto text-xl p-5 py-3 text-white font-light capitalize bg-black w-fit rounded-[2rem] mt-5">{data.subtext}</p>}
      </div>
    </div>
  );
};

export default TryFree;
