import Hero from "@/components/Hero";
import RecordingSteps from "@/components/RecordingSteps";
import TryFree from "@/components/TryFree";
import WaysForRecording from "@/components/WaysForRecording";
import React from "react";

const data = {
  hero: {
    title: "Record With Webcam For Free",
    desc: [
      "This free Webcam recorder allows you to capture your video by using a webcam in top-notch quality. You can even picture yourself with this extension.",
      "So what are you waiting for?",
    ],
    button: "Try this Extension for free!",
    image: "/webcam-recorder-img.png",
  },
  WaysForRecording: [
    {
      title: "Record Webcam videos on your screen",
      desc: "Record live webcam videos with a high quality by using this free webcam recorder.",
      image: "/record-webcam-videos.png",
    },
    {
      title: "You can also use your phone as a webcam on your Desktop",
      desc: "Record your videos by using your smartphone camera on your computer.",
      image: "/use-your-phone-as-webcam.png",
    },
    {
      title: "Capture your smartphone screen on your desktop",
      desc: "Record high-quality video of your smartphone screen by using this free webcam recorder.",
      image: "/capture-smartphone.png",
    },
  ],
};

const WebcamRecorder = () => {
  return (
    <>
      <Hero type="" data={data.hero} />
      <TryFree />
      <WaysForRecording data={data.WaysForRecording} />
      <RecordingSteps />
    </>
  );
};

export default WebcamRecorder;
