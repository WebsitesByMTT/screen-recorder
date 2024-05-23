import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const FreeScreenRecorder = () => {
  const initialItems = [
    {
      icon: "/screen_recorder/feature_icon1.png",
      title: "You can record your screen in a different way",
      para: "With this feature, you can record the whole screen or a specific area of your screen.",
    },
    {
      icon: "/screen_recorder/feature_icon2.png",
      title: "Record it with audio",
      para: "You can capture your screen with sounds and your own voice. yourbj screen.",
    },
    {
      icon: "/screen_recorder/feature_icon3.png",
      title: "Schedule your screen recording",
      para: "You can schedule any part of your recording. Like you can schedule it at the beginning and the end.",
    },
    {
      icon: "/screen_recorder/feature_icon4.png",
      title: "Share your recording",
      para: "After recording, you can share and save it ahead in Drive or YouTube.",
    },
    {
      icon: "/screen_recorder/feature_icon5.png",
      title: "Display and record the key you press",
      para: "While in screen recording mode you can show the keys that you press on your screen.",
    },
    {
      icon: "/screen_recorder/feature_icon6.png",
      title: "Activate and shift your webcam",
      para: "While recording, you can move your webcam or you can enlarge it to full screen.",
    },
    {
      icon: "/screen_recorder/feature_icon7.png",
      title: "Add text, images, or logos",
      para: "You can add any image, logo, or text to your recordings. gngjghghjjhm",
    },
    {
      icon: "/screen_recorder/feature_icon8.png",
      title: "Click the mouse for better visibility",
      para: "You can move your mouse for animation effects while recording your screen.",
    },
    {
      icon: "/screen_recorder/feature_icon9.png",
      title: "You can record with dual monitors",
      para: "With a free screen recorder, you can record with dual monitors. fhfyfg",
    }
  ];

  const duplicatedItems = [...initialItems, ...initialItems];
  return (
    <div className="bg-white py-20">
      <div className="text-black text-center pb-12 text-[2rem] md:text-[3rem]">
        Features of Free Screen Recorder
      </div>
      <div className="space-y-8">
        <div className="slider">
          <div className="slide-track space-x-5">
            {duplicatedItems.map((item, index) => (
              <div key={index} className="slide">
                <div className="bg-gradient-to-t rounded-3xl p-[1px] from-[#5329C4] to-[#B6A4E6] col-span-12 md:col-span-4">
                  <div className="bg-white w-[350px px-2 md:px-4 pt-2 pb-4 rounded-3xl">
                    <div className="flex justify-center">
                      <Image
                        src={item.icon}
                        alt="image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h6 className="text-[1rem] text-center text-black">
                      {item.title}
                    </h6>
                    <p className="text-black text-center text-[.9rem] pt-3">
                      {item.para}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slider-back">
          <div className="slide-track-back space-x-5">
            {duplicatedItems.map((item, index) => (
              <div key={index} className="slide">
                <div className="bg-gradient-to-t rounded-3xl p-[1px] from-[#5329C4] to-[#B6A4E6] col-span-12 md:col-span-4">
                  <div className="bg-white w-[350px px-2 md:px-4 pt-2 pb-4 rounded-3xl">
                    <div className="flex  justify-center">
                      <Image
                        src={item.icon}
                        alt="image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h6 className="text-[1rem] text-center text-black">
                      {item.title}
                    </h6>
                    <p className="text-black text-center text-[.9rem] pt-3">
                      {item.para}
                    </p>
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
