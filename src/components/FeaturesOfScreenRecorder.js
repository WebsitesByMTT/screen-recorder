'use client'
import React, { useState } from 'react'

const FeaturesOfScreenRecorder = () => {
    const [readmore,setReadMore]=useState(false)
    const [index,setIndex]=useState()
    const handelClick=(indx)=>{
        setReadMore(!readmore)
        setIndex(indx)
    }
    const features = [
        {
            id: 1,
            title: 'Screen Record with Audio',
            para: ' With Recordbros smooth screen and audio capture, you can get the most out of your screen recordings! Our cutting-edge technology guarantees crystal-clear video and pitch-perfect audio synchronization, whether youre making tutorials, presentations, or showcasing your newest software.'
        },
        {
            id: 2,
            title: 'Game Recording program',
            para: ' With Recordbros specialized game recording program, you may enhance your gaming legacy! Capture every exhilarating second, massive conflict, and breathtaking triumph in breathtaking high definition with our screen recorder chrome extension. With no lag, thanks to our enhanced performance, you can play through your most intensive gaming moments without any problems.'
        },
        {
            id: 3,
            title: 'Webcam Recorder',
            para: 'With Recordbro, turn any regular webcam into a content creation machine! With crisp, colorful footage that presents you in the best possible light, our webcam recorder is ideal for vlogs, online meetings, and personalized video messages. Combining camera and screen recordings seamlessly results in a dynamic viewing experience that catches all of the subtleties of your presentation and facial emotions with unmatched clarity. With our chrome screen recording extension, you can easily combine camera and screen without compromising the quality.'
        },
        {
            id: 4,
            title: 'Blur Your Display',
            para: ' Recordbro has a revolutionary screen blur feature that helps you protect sensitive information while maintaining a professional recording quality. Easily blur out private information and secret data with a single click, whether youre filming a training, conducting a virtual meeting, or showcasing software. Focus on the important things, giving your audience a clear, uninterrupted view while protecting your secrets at the same time.'
        }
    ]
    return (
        <>
            <div className='text-center font-semibold text-[1.6rem]'>
                <div className='w-full md:w-[75%] text-[2rem] md:text-[2.5rem] mx-auto'>The Ultimate Software for Screen, Game, and Webcam Recording with Enhanced Privacy</div>
            </div>
            <p className='w-[90%] md:w-[50%] mx-auto text-center text-[1rem] py-5'>We proudly provide Recordbro, the best screen recorder chrome extension that will transform how you create digital content. Recordbro delivers robust features that guarantee your recordings are of the best caliber, regardless of your role—gamer, instructor, business professional, or content producer. Explore our unique features to see how Recordbro can improve your screen recording experience to the fullest!</p>
            <div className='pt-10 grid grid-cols-12 items-start transition-all gap-x-8 gap-y-8 mx-auto w-[95%] md:w-[90%]'>
                {
                    features?.map((item, indx) => (
                        <div key={indx} className='col-span-12  md:col-span-6 lg:col-span-3 transition-all px-5 py-4 rounded-xl hover:shadow-2xl hover:scale-110 bg-[#F0EBFA]'>
                            <div className='text-black font-semibold text-center text-[1.3rem]'>{item.title}</div>
                            <p className='text-black text-opacity-80 text-center pt-4 transition-all text-[.9rem]'>{readmore&&index===indx?item.para:item.para.substring(0,250)}<span onClick={()=>handelClick(indx)} className={`pl-1 ${readmore&&index===indx?'text-red-500':'text-[#4723A7]'} font-semibold cursor-pointer`}>{readmore&&index===indx?null:'Read More'}</span></p>
                        </div>
                    ))
                }
                <p className='text-center text-black col-span-12  mx-auto py-5'>With just one click to record and HD quality production free of bothersome watermarks, Recordbro guarantees a flawless and expert recording experience. Audiences are kept interested and captivated by its sophisticated features, which include picture-in-picture mode, dynamic comments, and crystal-clear audio synchronization. Use the best screen recording chrome extension today, and captivate your audience with your humor and creativity. </p>
            </div>
        </>

    )
}

export default FeaturesOfScreenRecorder
