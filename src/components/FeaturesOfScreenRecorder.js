'use client'
import React, { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
import Link from 'next/link';

const FeaturesOfScreenRecorder = () => {
    const [readmore, setReadMore] = useState(false)
    const [index, setIndex] = useState()
    const handelClick = (indx) => {
        setReadMore(!readmore)
        setIndex(indx)
    }
    const features = [
        {
            id: 1,
            title: 'Screen Record with Audio',
            link:'/screen-recorder',
            para: "With Recordbro's smooth screen and audio capture, you can get the most out of your screen recordings! Our cutting-edge technology guarantees crystal-clear video and pitch-perfect audio synchronization."
        },
        {
            id: 2,
            title: 'Game Recording program',
            link:'/game-recorder',
            para:"With Recordbro's specialized game recording program, you may enhance your gaming legacy! Capture every exhilarating second, massive conflict, and breathtaking triumph in breathtaking high definition with our screen recorder chrome extension."
        },
        {
            id: 3,
            title: 'Webcam Recorder',
            link:'/webcam-recorder',
            para: 'With crisp, colorful footage that presents you in the best possible light, our webcam recorder is ideal for vlogs, online meetings, and personalized video messages. With our chrome screen recording extension, you can easily combine camera and screen without compromising the quality.'
        },
        {
            id: 4,
            title: 'Blur Your Display',
            link:'/',
            para: "Easily blur out private information and secret data with a single click, whether you're filming a training, conducting a virtual meeting, or showcasing software. Focus on the important things, giving your audience a clear, uninterrupted view while protecting your secrets simultaneously."
        }
    ]
    return (
        <>
            <div className='text-center text-[1.6rem]'>
                <div className='w-full md:w-[75%] text-[2rem] font-normal md:text-[2.5rem] mx-auto'>Recordbro: The Ultimate Software for Screen, Game, and Webcam Recording with Enhanced Privacy</div>
            </div>
            <p className='w-[90%] md:w-[50%] mx-auto text-center text-[1rem] py-5'>We proudly provide Recordbro, the best screen recorder chrome extension that will transform how you create digital content. Explore our unique features to see how Recordbro can improve your screen recording experience to the fullest!</p>
            <div className='relative  col-span-12 md:col-span-7 md:w-[70%]  2xl:w-[50%] mx-auto pt-8 md:pt-12'>
                <div className=' py-6 cursor-pointer hover:scale-110 transition-all md:py-12 px-5 md:px-20 bg-gradient-to-t rounded-[2rem]  from-[#5F38C8] to-[#F3F0FC]'>
                    <Image src="/hero/feature_line.svg" alt='img' height={100} width={100} className='absolute w-auto right-0 max-w-none top-0 h-full' />
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 4000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {
                                features?.map((item, ind) => (
                                    <CarouselItem key={ind}>
                                        <Link href={item.link} className='cursor-pointer '>
                                            <h6 className='text-white text-[1.5rem] md:text-[2rem]'>{item.title}</h6>
                                            <p className='text-white text-[.9rem] md:text-[1.1rem] pt-2'>{item.para}</p>
                                        </Link>
                                    </CarouselItem>
                                ))
                            }

                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </>

    )
}

export default FeaturesOfScreenRecorder
