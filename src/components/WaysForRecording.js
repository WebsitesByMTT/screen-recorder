import Image from "next/image";
import React from "react";

const WaysForRecording = ({ data }) => {
  return (
    <div className="bg-white py-5 lg:py-10 lg:px-14 ">
      <div className="">
        <h2 className="text-center text-black text-[2rem] md:text-[3rem] md:pb-10">
          {data.heading}
        </h2>
        {data.text.map((item, ind) => (
          <div
            key={ind}
            className="grid grid-cols-12 space-y-12 gap-[5vw] items-center"
          >
            <div
              className={`${
                ind % 2 === 1 ? " md:order-2" : "md:order-1"
              } order-2 col-span-12 md:col-span-6 `}
            >
              <h3
                className={`text-[1.5rem] md:text-[2.2rem] text-left ${
                  ind === 1 ? "md:ml-auto" : "md:mr-auto"
                } `}
              >
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
            <div
              className={`${
                ind % 2 === 1 ? "md:order-1" : "md:order-2"
              } order-1 col-span-12 md:col-span-6  md:p-6`}
            >
              <Image src={item.image} alt="image" height={1000} width={1000} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaysForRecording;
