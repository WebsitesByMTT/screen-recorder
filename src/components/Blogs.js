'use client'
import { data } from '@/articledata/Data'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Blogs = () => {
    const pathname=usePathname()
    return (
        <div className='bg-white pb-12 md:pt-12 md:pb-20'>
            <div>
               {pathname==='/blogs'?null:<div className='text-black text-center text-[2rem] md:text-[3rem]'>Blogs</div>}
                <div className='grid grid-cols-12 space-y-4 items-center md:space-y-0  md:gap-10 pt-10'>
                    {
                        data?.map((item, ind) => (
                            <Link href={`/blogs/${item?.slug}`} key={ind} className='cursor-pointer rounded-3xl   shadow-sm shadow-[#5329C4]  border-b-[1px] hover:border-[#5329C4] col-span-12 md:col-span-6 lg:col-span-4'>
                                <div className='bg-white px-3 md:px-10 py-8 md:py-12 md:h-[350px] lg:h-[400px] xl:h-[500px] rounded-3xl '>
                                    <div className='flex justify-center pb-6'>
                                        <span className='inline-block w-[60%] h-[5px] bg-[#B6A4E6]'></span>
                                    </div>
                                    <h6 className='md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.7rem] pb-5 text-[#230346]'>{item.title}</h6>
                                {item.banner && <Image src={item.banner} alt={item.bannerAlt} width={1000} height={1000} className='w-full rounded-3xl' />}
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Blogs
