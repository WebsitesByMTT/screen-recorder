import Faq from '@/components/Faq';
import FeaturesOfScreenRecorder from '@/components/FeaturesOfScreenRecorder';
import Footer from '@/components/Footer'
import Hero from '@/components/Hero';
import OurUsers from '@/components/OurUsers';
import React from 'react'

export const metadata = {
    title: "Unleash Your Creativity With The Best Screen Recording Software",
    description: "Unleash your creative mind to the world using Recordbro, the best screen recording software for professionals and real-time editing, multi-format exporting, Recordbro has an easy-to-use UI for a smooth user experience.",
    icons: {
        icon: '/favicon.png',
    },
    keywords: "Free and Secure screen recorder, best recording software, online video recorder, screen record with audio, free screen recording software, screen recording on Chrome, game recording software, Real-time Draw Tool, Real-Time Blur Display, Download 4K UHD Video Quality, Webcam Recorder, free screen recorder, free screen recorder Chrome, how to screen record on Chrome, screen recorder free download, Chrome screen recorder with audio, free Game recording software, best game recording software, how to Game record on Chrome, Game screen recorder free download, record gameplay with audio, record gameplay, Free Webcam Recorder, webcam recording software, free webcam recording software, online video recorder, Capture HD Quality Video",
    openGraph: {
        title: "Unleash Your Creativity With The Best Screen Recording Software",
        description: "Unleash your creative mind to the world using Recordbro, the best screen recording software for professionals and real-time editing, multi-format exporting, Recordbro has an easy-to-use UI for a smooth user experience.",
        type: 'website',
        siteName: "Recordbro - Features",
        images: "/favicon.png",
    },
    alternates: {
        canonical: "/",
    },
};
const page = () => {
    const data = {
        hero: {
          title: "Unleash Your Creativity With The Best Screen Recording Software ",
          desc: ["Unleash your creative mind to the world using Recordbro, the best screen recording software for professionals and enthusiasts! Easily record high-quality videos with a few clicks. Recordbro is perfect for creating captivating instructional videos for your students or consumers, recording complex processes for your employees, or showing off your gaming skills on social media platforms. Use Recordbro, the best screen recorder Chrome extension, to show the world what makes you the best.",],
          button: "Try this Extension for free!",
          image: "/webcam-recorder-img.png",
          type:'feature'
        },
        ourusers : [
            {
                heading: 'James',
                para: 'Its SO EASY to use that a child could use it! I love how in a matter of seconds and with just a few clicks I can send the client or prospect screenshots or videos.'
            },
            {
                heading: 'Rabond',
                para: 'This is for sure the best screen recorder for Windows! It helped us improve communications within my software development team.'
            },
            {
                heading: 'Tesla',
                para: 'We absolutely love how much Recordbro has improved our internal workflow as well as communications with our customers.'
            }
        ],
        faq : [
            {
              ques: 'How does Recordbro ensure high-quality screen and audio capture?',
              Ans: 'Recordbro uses state-of-the-art technology to deliver flawless audio synchronization and crystal-clear video. Smooth screen recordings with excellent audio quality are guaranteed by our sophisticated technology, regardless of whether youre making tutorials, presentations, or presenting new applications.',
              mdcols: 'md:col-span-4',
            },
            {
              ques: 'Is Recordbro able to run long gaming sessions without stuttering?',
              Ans: 'Of course! With Recordbros dedicated game recording software, you can record every exciting second of your games in breathtaking high definition. Our improved performance guarantees that there is never any lag, letting you experience uninterrupted gameplay at its most intense.',
              mdcols: 'md:col-span-8',
            },
            {
              ques: 'How can I Record my face?',
              Ans: 'By using a webcam you can record your face and voice.',
              mdcols: 'md:col-span-3',
            },
            {
              ques: 'What webcam recording features is Recordbro offering?',
              Ans: 'With Recordbros webcam recorder, any regular camera may be used to create content effectively. It provides explicit, colorful videos for vlogs, online conferences, and customized messaging. For a dynamic viewing experience, you can also effortlessly blend screen and camera recordings, capturing your presentations subtleties and facial expressions with remarkable clarity.',
              mdcols: 'md:col-span-4',
            },
            {
              ques: 'How can I use Recordbro to record while protecting sensitive data?',
              Ans: 'With just a single click, you can effortlessly obscure essential and confidential information using Recordbros innovative screen blur feature. This is ideal for preserving professional recording quality and safeguarding private information when shooting training sessions, holding virtual meetings, or presenting software.',
              mdcols: 'md:col-span-5',
            },
            {
              ques: 'What more tools does Recordbro provide to improve recordings?',
              Ans: 'In addition to one-click recording and watermark-free HD quality output, Recordbro has advanced features, including picture-in-picture mode, dynamic commentary, and perfectly synchronized audio. These features guarantee a faultless and expert recording experience by keeping your audience interested.',
              mdcols: 'md:col-span-4',
            },
            {
              ques: 'Can I annotate or comment on recordings using any of the tools that Recordbro offers?',
              Ans: 'Yes, you can directly annotate and remark on your recordings using Recordbros dynamic comment features. This keeps your audience interested throughout the presentation by emphasizing important points and adding interactivity and information to your films.',
              mdcols: 'md:col-span-8',
            }
          ]
          
    }
    return (
        <>
            <Hero type={data.hero.type} data={data.hero} />
            <FeaturesOfScreenRecorder/>
            <OurUsers data={data.ourusers}/>
            <Faq faq={data.faq}/>
            <Footer FooterText={data.footerText} />
        </>
    )
}

export default page
