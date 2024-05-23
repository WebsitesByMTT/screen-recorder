import Hero from "@/components/Hero";
import TypeFree from "@/components/TryFree";
import WaysForRecording from "@/components/WaysForRecording";
import OurUsers from "@/components/OurUsers";
import React from "react";

const data = {
  hero: {
    title: "Record Live Gameplay With This Free Game Recording Software",
    desc: [
      "It is an advanced game recorder that is suitable for capturing the most demanding gameplay in 4K UHD resolution up to 480 frames per second. You can also record live gameplay along with your original audio and share it with your friends by uploading it on your YouTube channel.",
    ],
    button: "",
    image: "/game-recorder-img.png",
  },
  typeFree: {
    heading: "Experience the most famous game recording software",
    text: "This is the best game recording software that is perfect for capturing high-resolution games with DirectX, OpenGL, and many more technologies while keeping its original resolution. It also lets you record your own video, audio, and camera feed simultaneously. Just select game recording mode to record your gameplay and share your videos on your most preferred streaming platforms. Do you know what's the best part of downloading the extension on your browser? ",
    subtext: "While recording it will not slow down your desktop!",
  },
  WaysForRecording: {
    heading: "Have The High-Performance Game Recorder",
    text: [
      {
        title: "Capture high-resolution game screens in real time",
        desc: "Download the extension and record gameplay from the most demanding high-resolution games. It supports up to 4K UHD and 480 FPS and it also compresses videos to save storage space.",
        image: "/game_recorder/way1.png",
      },
      {
        title: "Capture original game sound and audio simultaneously",
        desc: "With this free game recording software, record gameplay with audio and download 4K UHD video quality. You can also save voice tracks in WAV files.",
        image: "/game_recorder/way2.png",
      },
      {
        title: "Enhance your recording performance",
        desc: "With Hardware acceleration embedded graphics that process unit (GPU) in the computer hardware (CPU or graphics card), you can record it in high-resolution gameplays at high quality. It will not even slow down your browser.",
        image: "/game_recorder/way3.png",
      },
      {
        title: "Capture live player with a webcam",
        desc: "You can record gameplay with your favorite player's live face and audio by using a webcam and a microphone. You can also blur the background with the chroma key feature and save it.",
        image: "/game_recorder/way4.png",
      },
      {
        title: "Record your gameplay and upload it on your YouTube channel",
        desc: "It can record real-time gameplay from the latest online games and upload them to your YouTube channel without additional encoding. You can make videos with 1080p/4K quality.",
        image: "/game_recorder/way5.png",
      },
    ],
  },
};

const GameRecorder = () => {
  return (
    <>
      <Hero type="" data={data.hero} />
      <TypeFree data={data.typeFree} />
      <WaysForRecording data={data.WaysForRecording} />
      <OurUsers />
    </>
  );
};

export default GameRecorder;
