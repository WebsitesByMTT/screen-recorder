import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import React from "react";

const data = {
  title: "Record Live Gameplay With This Free Game Recording Software",
  desc: [
    "It is an advanced game recorder that is suitable for capturing the most demanding gameplay in 4K UHD resolution up to 480 frames per second. You can also record live gameplay along with your original audio and share it with your friends by uploading it on your YouTube channel.",
  ],
  button: "",
  image: "/game-recorder-img.png",
};

const footerText='Connecting thousands of people worldwide'


const GameRecorder = () => {
  return (
    <>
      <Hero type="" data={data} />
      <Footer FooterText={footerText}/>
    </>
  );
};

export default GameRecorder;
