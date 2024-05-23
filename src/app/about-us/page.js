import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <>
            <div
                className="rounded-tl-3xl bg-gradient-to-b rounded-3xl from-[#5329C4] to-[#F3F0FC] rounded-tr-3xl bg-custom-gradient overflow-hidden relative"

            >
                <Navbar />

                <div className='pt-[30%] md:pt-[15%] lg:pt-[10%] pb-20'>

                    <h6 className='text-center text-black  mx-auto text-[3rem]'>About Us</h6>
                    <p className='text-black text-[1rem] text-center w-[95%] md:w-[70%] mx-auto'>We are the most leading multimedia company that is renowned for developing top-notch screen recording, game recording, and webcam recording. We aim to make suitable software which is very easy to use and help you in your projects professionally. It has some great features like you can draw in real-time which is best for educational and presentation videos. There you can also blur that particular part and hide your sensitive information. It is very easy to use and has a fast video-cutting program where you can trim any part of your video while keeping its original quality. The best part is while recording it does not slow down your desktop and it is free to use. So what are you doing? downloading the extension now and start recording.</p>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default page
