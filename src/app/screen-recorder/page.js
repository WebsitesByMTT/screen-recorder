import Blogs from "@/components/Blogs";
import CaptureAnyThing from '@/components/CaptureAnyThing'
import Faq from "@/components/Faq";
import FreeScreenRecorder from "@/components/FreeScreenRecorder";
import Hero from "@/components/Hero";
import WaysForRecording from "@/components/WaysForRecording";
import OurUsers from '@/components/OurUsers'
import Footer from "@/components/Footer";


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
 faq : [
    {
        ques: 'How can I record audio?',
        Ans: 'It is very easy to record audio with sound recording mode. You can start or pause the audio. You can also reduce or increase its time.',
        mdcols: 'md:col-span-4',
    },
    {
        ques: 'Can I record full screen?',
        Ans: 'Yes, you can record full screen for free.',
        mdcols: 'md:col-span-2',
    },
    {
        ques: 'Can I trim off my recorded video?',
        Ans: 'Yes, in case you don’t want a particular part then you can trim it from your recorded video and save it.',
        mdcols: 'md:col-span-6',
    },
    {
        ques: 'Can I take a screenshot while recording a screen?',
        Ans: 'If you don’t want to capture the entire screen, then you can take a screenshot of a particular area.',
        mdcols: 'md:col-span-8',
    },
    {
        ques: 'How to screen record on Chrome?',
        Ans: 'Visit its official website and install it on your browser and then you can select the option of a screen record and start recording.',
        mdcols: 'md:col-span-4',
    }
  ]
};

const page = () => {
  return (
    <>
      <Hero type="" data={data.hero} />
      <FreeScreenRecorder />
      <CaptureAnyThing />
      <OurUsers />
      <WaysForRecording data={data.WaysForRecording} />
      <Blogs />
      <Faq faq={data.faq}/>
      <Footer />
    </>
  );
};

export default page;
