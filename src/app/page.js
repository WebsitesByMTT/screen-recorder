import Counts from "@/components/Counts";
import HomeVideo from "@/components/HomeVideo";
import FeatureOfRecorder from "@/components/FeatureOfRecorder";
import BestScreen from "@/components/BestScreen";
import GraphicsFeature from "@/components/GraphicsFeature";
import RecordingSteps from "@/components/RecordingSteps";
import Blogs from "@/components/Blogs";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";

const data = [
  {
    id: 1,
    title: `<span>Record Your Screen  <br className="hidden lg:block" /> Like A Pro</span>`,
    desc: "Capture everything that you want to record from your screen",
  },
  {
    id: 2,
    title: `<span>Record Games In <br className="hidden lg:block" /> High Quality </span>`,
    desc: "Record while playing the game in high quality and upload it on your channel.",
  },
  {
    id: 3,
    title: `<span>Record Webcam <br className="hidden lg:block" />  Video </span>`,
    desc: "Record any webcam video professionally from any video device including USB webcam cameras, video capture cards, and many more.",
  },
  {
    id: 4,
    title: `<span>Blur Your Screen</span>`,
    desc: "Hide your sensitive details on your browser before or during the screen recording.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero type="home" homeData={data} />
      <Counts />
      <HomeVideo />
      <FeatureOfRecorder />
      <BestScreen />
      <GraphicsFeature />
      <RecordingSteps />
      <Blogs />
      <Faq />
    </main>
  );
}
