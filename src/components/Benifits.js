"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Benifits = () => {
    const data = [
        {
            id: 1,
            image: '/benifits_img_1.png',
            title: 'One-Click Recording',
            para: 'With our one-click recording feature, you may begin recording video without following any hectic procedure. With the help of our screen recorder chrome extension tool, you can record impromptu moments or ensure you never miss an essential picture during presentations.'
        },
        {
            id: 2,
            image: '/benifits_img_2.png',
            title: 'HD quality',
            para: "With the help of our software, which automatically optimizes video quality, you can see every detail in transparent, sharp film. Your audience will value expert-caliber precision and clarity whether you're filming a live event, or an instructional message.            "
        },
        {
            id: 3,
            image: '/benifits_img_3.png',
            title: 'No watermarks',
            para: 'Unlike other tools that include flashy and prominent watermarks, we guarantee no branding elements in your films. This enables you to keep total control over your material and provide your audience with a polished, businesslike appearance. Our chrome screen recorder extension is accessible for download and installation.'
        },
        {
            id: 4,
            image: '/benifits_img_4.png',
            title: 'Easily Share',
            para: 'Our program has built-in options to share your videos directly with friends, coworkers, or on other social media networks.'
        }
    ]

    const [activeSlide, setActiveSlide] = useState(0);

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prevActiveSlide) =>
                prevActiveSlide === data.length - 1 ? 0 : prevActiveSlide + 1
            );
        }, 2000);

        return () => clearInterval(timer);
    }, [data]);

    return (
        <div>
            <div className='pb-5 md:pt-12'>
                <div className='text-[2rem] font-normal md:text-[2.5rem] text-center'>Features of Free and Secure Recordbro</div>
                <div className='space-y-5  py-5 text-black text-center'>
                    <p className='md:w-[60%] mx-auto'>Introducing our cutting-edge screen recorder chrome extension software for recording videos, which is made to make the process easier while maintaining excellent quality. Recordbro offers a smooth and practical experience whether you&apos;re creating material for social networking, business presentations, or personal use.</p>
                    <p className='md:w-[60%] mx-auto'>Bid farewell to the era of silent videos and provide your audience with a comprehensive visual and audio experience using our screen recorder chrome extension that communicates volumes!</p>
                </div>
            </div>
            <div className='bg-[#E2D7FF] p-6 relative rounded-[2rem] h-[610px] md:h-[600px]  md:w-[90%] mx-auto border'>
                {
                    data.map((item, ind) => (
                        <React.Fragment key={ind}>
                            <div
                                className={` md:gap-x-10 absolute h-full left-[4.5%] items-start top-[3%] md:top-0 md:left-0  md:items-center md:px-[5%]  grid grid-cols-1 md:grid-cols-2 transition-opacity duration-700 transform ${activeSlide === ind ? 'opacity-100' : ' opacity-0'
                                    }`}
                            >
                                <div>
                                    <Image src={item.image} alt='image' width={2000} height={1500} className="w-[95%] h-full" quality={100} />
                                </div>
                                <div className="space-y-4  pt-4 md:pt-8">
                                    <div className="text-black text-[2rem] md:text-[2.5rem]">{item.title}</div>
                                    <p className="text-black text-[1.1rem]">{item.para}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    ))
                }
                {/* Dots */}
                <div className='flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-6%] md:translate-y-[-10%] h-full pt-10 space-x-5'>
                    {data.map((_, ind) => (
                        <span
                            key={ind}
                            className={`inline-block cursor-pointer ${ind === activeSlide ? 'bg-[#5329C4]' : 'bg-white'} w-[18px] border rounded-full h-[18px]`}
                            onClick={() => setActiveSlide(ind)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Benifits
