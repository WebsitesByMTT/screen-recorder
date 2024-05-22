import Blogs from "@/components/Blogs";
import Faq from "@/components/Faq";
import FreeScreenRecorder from "@/components/FreeScreenRecorder";
import Hero from "@/components/Hero";
import WaysForRecording from "@/components/WaysForRecording";
import React from "react";

const data = {
  hero: {
    title: "Capture Your Screen For Free",
    desc: [
      "This free screen recorder Chrome is the best extension to use. It allows you to capture everything that you want on your browser. You can also draw anything while recording the video. After recording, you can download 4K UHD video quality. You can also edit your video and share it ahead. With this chrome screen recorder with audio, you can capture your original voice and give it a comprehensive narration to your recordings.",
      "So what are you waiting for?",
    ],
    button: "Try it now for free!",
    image: "/screen-recoder-img.png",
  },
  WaysForRecording: [
    {
      title: "How To Record a Video with Better Quality",
      image: "/screen_recorder/waysimg1.svg",
    },
    {
      title: "How to record a Zoom Meeting",
      image: "/screen_recorder/waysimg2.svg",
    },
    {
      title: "Use your phone as a webcam on a PC and Record",
      image: "/screen_recorder/waysimg3.svg",
    },
  ],
};

const page = () => {
  return (
    <>
      <Hero type="" data={data.hero} />
      <FreeScreenRecorder />
      <WaysForRecording data={data.WaysForRecording} />
      <Blogs />
      <Faq />
    </>
  );
};

export default page;
