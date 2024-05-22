import Image from 'next/image'
import React from 'react'

const WaysForRecording = () => {
    const data = [
        {
            title: 'How To Record a Video with Better Quality',
            image: '/screen_recorder/waysimg1.svg'
        },
        {
            title: 'How to record a Zoom Meeting',
            image: '/screen_recorder/waysimg2.svg'
        },
        {
            title: 'Use your phone as a webcam on a PC and Record',
            image: '/screen_recorder/waysimg3.svg'
        }
    ]
    return (
        <div className='bg-white py-10 md:py-20'>
            <div>
                <div className='text-center text-black text-[2rem] md:text-[3rem] md:pb-10'>Ways For Screen Recording</div>
                {
                    data.map((item, ind) => (
                        <div key={ind} className='grid grid-cols-12 space-y-12  items-center'>
                            <div className={`${ind%2===1?' md:order-2':'md:order-1'} order-2 col-span-12 md:col-span-6`}>
                                <div className={`text-[1.3rem] pt-3 md:pt-0 md:text-[2rem] text-center md:w-[80%] ${ind===1?'md:ml-auto':'md:mr-auto'} `}>{item.title}</div>
                            </div>
                            <div className={`${ind%2===1?'md:order-1':'md:order-2'} order-1 col-span-12 md:col-span-6`}>
                                <Image src={item.image} alt='image' height={100} width={100} className='w-[100%]' />
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default WaysForRecording
