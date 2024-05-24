import { data } from '@/articledata/Data';
import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


export const metadata = {
    title: "Blogs - recordbro",
    description: "Read our latest blogs by directly visiting the free and secure screen recording extension and learn our latest features and updates.",
    icons: {
        icon: '/favicon.png',
    },
    keywords: "Free and Secure screen recorder, best recording software, online video recorder, screen record with audio, free screen recording software, screen recording on Chrome, game recording software, Real-time Draw Tool, Real-Time Blur Display, Download 4K UHD Video Quality, Webcam Recorder, free screen recorder, free screen recorder Chrome, how to screen record on Chrome, screen recorder free download, Chrome screen recorder with audio, free Game recording software, best game recording software, how to Game record on Chrome, Game screen recorder free download, record gameplay with audio, record gameplay, Free Webcam Recorder, webcam recording software, free webcam recording software, online video recorder, Capture HD Quality Video",
    openGraph: {
        title: "Blogs - recordbro",
        description: "Read our latest blogs by directly visiting the free and secure screen recording extension and learn our latest features and updates.",
        type: 'website',
        siteName: "Screen Recorder",
        images: "/favicon.png",
    },
    alternates: {
        canonical: "/",
    },
};

const page = () => {

    return (
        <>
            <div
                className="  rounded-tl-3xl bg-gradient-to-b rounded-3xl from-[#5329C4] to-[#F3F0FC] rounded-tr-3xl bg-custom-gradient relative"

            >
                <Navbar />

                <div className='pt-[30%] md:pt-[15%] lg:pt-[10%] pb-20'>
                    <div className='text-center text-black  mx-auto text-[3rem]'>Blogs</div>
                </div>
            </div>
            <Blogs/> 
            <Footer />
        </>

    )
}

export default page
