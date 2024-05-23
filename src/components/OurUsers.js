"use client"
import Image from 'next/image'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const OurUsers = ({data}) => {
    return (
        <div className='bg-white py-10 md:py-20'>
            <div className='grid grid-cols-12 items-center  md:w-[90%] mx-auto p-5 md:p-20 rounded-2xl bg-[#F0EBFA]'>
                <div className='col-span-12 md:col-span-5'>
                    <div className='text-black text-[2rem] pb-8 md:pb-16 md:text-[3rem]'>Hear Our Users</div>
                    <div className='w-[130px] bg-[#D7C8FF] rounded-full p-5'>
                        <Image src={'/screen_recorder/quote.png'} alt='img' height={1000} width={1000} />
                    </div>
                </div>
                <div className='col-span-12 md:col-span-7 pt-8 md:pt-0'>
                    <div className='bg-gradient-to-r py-6 md:py-12 px-5 md:px-20 rounded-3xl from-[#402097] to-[#5329C4]'>
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
                                    data?.map((item, ind) => (
                                        <CarouselItem key={ind}>
                                            <div>
                                                <h6 className='text-white text-[1.5rem] md:text-[2rem]'>{item.heading}</h6>
                                                <p className='text-white text-[.9rem] md:text-[1.1rem] pt-2'>{item.para}</p>
                                            </div>
                                        </CarouselItem>
                                    ))
                                }

                            </CarouselContent>
                        </Carousel>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurUsers
