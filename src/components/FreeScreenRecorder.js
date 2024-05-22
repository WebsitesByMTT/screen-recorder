import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const FreeScreenRecorder = () => {
  const initialItems = [
    {
      icon: "/screen_recorder/feature_icon1.svg",
      title: "You can record your screen in a different way",
      para: "With this feature, you can record the whole screen or a specific area of your screen.",
    },
    {
      icon: "/screen_recorder/feature_icon1.svg",
      title: "You can record your screen in a different way",
      para: "With this feature, you can record the whole screen or a specific area of your screen.",
    },
    {
      icon: "/screen_recorder/feature_icon1.svg",
      title: "You can record your screen in a different way",
      para: "With this feature, you can record the whole screen or a specific area of your screen.",
    },
    {
      icon: "/screen_recorder/feature_icon1.svg",
      title: "You can record your screen in a different way",
      para: "With this feature, you can record the whole screen or a specific area of your screen.",
    },
    {
      icon: "/screen_recorder/feature_icon1.svg",
      title: "You can record your screen in a different way",
      para: "With this feature, you can record the whole screen or a specific area of your screen.",
    },
    {
      icon: "/screen_recorder/feature_icon1.svg",
      title: "You can record your screen in a different way",
      para: "With this feature, you can record the whole screen or a specific area of your screen.",
    },
    {
      icon: "/screen_recorder/feature_icon1.svg",
      title: "You can record your screen in a different way",
      para: "With this feature, you can record the whole screen or a specific area of your screen.",
    },
    {
      icon: "/screen_recorder/feature_icon1.svg",
      title: "You can record your screen in a different way",
      para: "With this feature, you can record the whole screen or a specific area of your screen.",
    },
  ];
  const duplicatedItems = [...initialItems, ...initialItems];
  return (
    <div className="bg-white pt-20">
      <div className="text-black text-center pb-12 text-[2rem] md:text-[3rem]">
        Features of Free Screen Recorder
      </div>
      <div className="space-y-8">
        <div className="slider">
          <div className="slide-track space-x-5">
            {duplicatedItems.map((item, index) => (
              <div key={index} className="slide">
                <div className="bg-gradient-to-t rounded-3xl p-[1px] from-[#5329C4] to-[#B6A4E6] col-span-12 md:col-span-4">
                  <div className="bg-white w-[350px] px-2 md:px-4 pt-2 pb-4 rounded-3xl">
                    <div className="flex justify-center">
                      <Image
                        src={item.icon}
                        alt="image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="text-[1rem] text-center text-black">
                      {item.title}
                    </div>
                    <div className="text-black text-center text-[.9rem] pt-3">
                      {item.para}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeScreenRecorder;
