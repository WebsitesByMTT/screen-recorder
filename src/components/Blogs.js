'use client'
import { data } from '@/articledata/Data'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Blogs = () => {
    const pathname = usePathname()
    const newData = data.filter((item) => item.category == pathname)
    return (
        <div className='bg-white pb-12 md:pt-12 md:pb-20'>
            <div>
                {pathname === '/blogs' ? null : <div className='text-black text-center text-[2rem] md:text-[3rem]'>Blogs</div>}
                <div className={`${pathname=='/'?'':'grid grid-cols-12'}  space-y-4  md:space-y-0 md:gap-10 pt-10`}>
                    {
                        pathname === '/blogs' ? data.map((item, ind) => (
                            <Link href={`/blogs/${item.slug}`} key={ind} className='cursor-pointer rounded-3xl shadow-sm shadow-[#5329C4] border-b-[1px] hover:border-[#5329C4] col-span-12 md:col-span-6 lg:col-span-4'>
                                <div className='bg-white px-3 md:px-10 py-8 md:py-12 md:h-[350px] lg:h-[400px] xl:h-[500px] rounded-3xl'>
                                    <div className='flex justify-center pb-6'>
                                        <span className='inline-block w-[60%] h-[5px] bg-[#B6A4E6]'></span>
                                    </div>
                                    {item.banner && <Image src={item.banner} alt={item.bannerAlt} width={1000} height={1000} className='w-full rounded-3xl' />}
                                    <h6 className='md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.7rem] pt-5 text-[#230346]'>{item.title}</h6>
                                </div>
                            </Link>
                        )) : pathname == '/' ?

                            <Carousel
                                opts={{
                                    loop: true,
                                }}
                                plugins={[
                                    Autoplay({
                                        delay: 4000,
                                    }),
                                ]}
                                className='w-full'
                                
                            >
                                <CarouselContent className='py-5 space-x-5'>
                                    {
                                        [...data]?.reverse().splice(0, 5).map((item, ind) => (
                                            <CarouselItem  key={ind} className='md:basis-1/2 lg:basis-1/3  cursor-pointer rounded-3xl shadow-sm shadow-[#5329C4] border-b-[1px] hover:border-[#5329C4]'>
                                                <Link href={`/blogs/${item.slug}`} key={ind}>
                                                    <div className='bg-white px-3 md:px-10 py-8 md:py-12  rounded-3xl'>
                                                        <div className='flex justify-center pb-6'>
                                                            <span className='inline-block w-[60%] h-[5px] bg-[#B6A4E6]'></span>
                                                        </div>
                                                        <h6 className='md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.7rem] pt-5 text-[#230346]'>{item.title}</h6>
                                                        <p className='pt-2'>{item?.desc.substring(0, 200)}...read more</p>
                                                    </div>
                                                </Link>
                                            </CarouselItem>
                                        ))
                                    }

                                </CarouselContent>
                            </Carousel>
                            : newData?.map((item, ind) => (
                                <Link href={`/blogs/${item.slug}`} key={ind} className='cursor-pointer rounded-3xl shadow-sm shadow-[#5329C4] border-b-[1px] hover:border-[#5329C4] col-span-12 md:col-span-6 lg:col-span-4'>
                                    <div className='bg-white px-3 md:px-10 py-8 md:py-12  rounded-3xl'>
                                        <div className='flex justify-center pb-6'>
                                            <span className='inline-block w-[60%] h-[5px] bg-[#B6A4E6]'></span>
                                        </div>
                                        <h6 className='md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.7rem] pt-5 text-[#230346]'>{item.title}</h6>
                                        <p className='pt-2'>{item?.desc.substring(0, 200)}...read more</p>
                                    </div>
                                </Link>
                            ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs
