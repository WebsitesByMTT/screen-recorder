import Counts from "@/components/Counts";
import Hero from "../components/Hero";
import HomeVideo from "@/components/HomeVideo";
import FeatureOfRecorder from "@/components/FeatureOfRecorder";
import BestScreen from "@/components/BestScreen";
import GraphicsFeature from "@/components/GraphicsFeature";
import RecordingSteps from "@/components/RecordingSteps";
import Blogs from "@/components/Blogs";
import Faq from "@/components/Faq";

export default function Home() {
 
  return (
    <main>
      <Hero/>
      <Counts/>
      <HomeVideo/>
      <FeatureOfRecorder />
      <BestScreen />
      <GraphicsFeature />
      <RecordingSteps/>
      <Blogs />
      <Faq />
    </main>
  );
}
