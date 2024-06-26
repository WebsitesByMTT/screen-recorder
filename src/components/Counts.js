import Image from 'next/image'
import React from 'react'

const Counts = () => {
    const data = [
        {
            id: 1,
            image1: '/hero/user.png',
            image2: '/hero/blur_color.png',
            text1: '100K',
            text2: 'Active user',
        },
        {
            id: 2,
            image1: '/hero/screenshot.png',
            image2: '/hero/blur_color.png',
            text1: '10K',
            text2: 'Screenshots',
        },
        {
            id: 3,
            image1: '/hero/screenrecording.png',
            image2: '/hero/blur_color.png',
            text1: '90K',
            text2: 'Screen Recording',
        }
    ]
    return (
        <div className='bg-white  pb-12  md:py-20'>
            <div>
                <div className='grid grid-cols-12 space-y-12 lg:space-y-0 items-center w-full'>
                    {
                        data.map((item, ind) => (
                            <div key={ind} className='col-span-12 md:col-span-6 lg:col-span-4'>

                                <div className='relative pt-[50px]'>
                                    <Image src={item.image1} width={1000} height={1000} className='absolute w-[150px] left-[50%] translate-x-[-50%] top-0 mx-auto' alt="image"/>
                                    <Image src={item.image2} width={100} height={100} className='absolute w-[150px] left-[50%] translate-x-[-50%] top-0 mx-auto' alt="image"/>
                                    <div className=''>
                                        <p className='text-[3.5rem] leading-[3rem] text-[#230346] text-center font-semibold'>{item.text1}</p>
                                        <p className='text-black text-[.9rem] text-center '>{item.text2}</p>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>
                {/* text */}
                <div className='pt-16 md:pt-28'>
                    <div className='text-[1.5rem] md:text-[3rem] tracking-wide text-center'>Overview of Free Screen Recording <br className='md:block hidden'/>Software</div>                        
                    <div className='text-[.8rem] md:text-[1rem] pt-3 md:pt-5 text-center text-black'>Learn more about the free and secure screen recorder</div>
                </div>
            </div>
        </div>
    )
}

export default Counts
