import Image from 'next/image'
import React from 'react'

const Counts = () => {
    const data = [
        {
            id: 1,
            image1: '/hero/user.png',
            image2: '/hero/blur_color.png',
            text1: '600K',
            text2: 'Active user',
        },
        {
            id: 2,
            image1: '/hero/screenshot.png',
            image2: '/hero/blur_color.png',
            text1: '5M',
            text2: 'Screenshots',
        },
        {
            id: 3,
            image1: '/hero/screenrecording.png',
            image2: '/hero/blur_color.png',
            text1: '8M',
            text2: 'Screen Recording',
        }
    ]
    return (
        <div className='bg-white w-full py-12 md:py-20'>
            <div className='w-[95%] md:w-[80%] mx-auto'>
                <div className='grid grid-cols-12 space-y-8 md:space-y-0 items-center w-full'>
                    {
                        data.map((item, ind) => (
                            <div key={ind} className='col-span-12 lg:col-span-4'>

                                <div className='relative'>
                                    <Image src={item.image1} width={100} height={100} className='mx-auto w-[50%] lg:w-[35%]' />
                                    <Image src={item.image2} width={100} height={100} className='mx-auto absolute w-[35%] top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
                                    <div className='absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                        <div className='text-[3.5rem] leading-[3rem] text-[#230346] text-center font-semibold'>{item.text1}</div>
                                        <div className='text-black text-[.9rem] text-center '>{item.text2}</div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>
                {/* text */}
                <div className='pt-10 md:pt-28'>
                    <div className='text-[1.5rem] md:text-[3rem] tracking-wide text-center'>Overview of Free Screen Recording <br className='md:block hidden'/>Software</div>                        
                    <div className='text-[.8rem] md:text-[1rem] pt-3 md:pt-5 text-center text-black'>Learn more about the free and secure screen recorder</div>
                </div>
            </div>
        </div>
    )
}

export default Counts
