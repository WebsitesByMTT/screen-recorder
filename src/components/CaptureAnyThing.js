import Image from 'next/image'
import React from 'react'

const CaptureAnyThing = () => {

    const grid1data = [
        {
            heading: 'Record all types of videos and audio',
            para: 'Record all types of videos and audio and share them with multiple platforms like Facebook, Vimeo, YouTube, and many more. You can also record video conferences and calls from Meet and Skype in full resolution. You can do all these for free with unlimited time duration.'
        },
        {
            heading: 'Record your face and voice together with a webcam and microphone',
            para: 'You can record your content with your face and voice with a webcam. This feature is perfect for making tutorial, educational, and business presentation videos with a personal touch.'
        },
        {
            heading: 'Turn your Browser into a CCTV camera with its long-term recording feature',
            para: 'If you have enough storage in your computer, then it can record and store activities nonstop 24/7.'
        }
    ]

    const grid2data = [
        {
            heading: 'Create engaging videos with dynamic content with a real-time draw tool for your screencasts',
            para: 'Whether it is for educational content creation or business presentations, you can record anything and make it more creative and understandable with real-time pen drawings.'
        },
        {
            heading: 'Just capture one window while doing so many things in the background',
            para: 'Are you doing so many things in the background and only want to capture one particular program? then dont worry with its one specific window mode you can only select and record one particular program or an area that you want to capture.'
        }
    ]

    return (
        <div>
            <div className='text-center text-[2rem] md:text-[3rem]'>Capture Anything For Free</div>

            <div className='grid md:space-x-5 pt-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3'>
                <div className='space-y-10 lg:order-1 order-2 md:px-10'>
                    {
                        grid1data.map((item, ind) => (
                            <div key={ind}>
                                <div className='text-[1.2rem]'>{item.heading}</div>
                                <span className='w-[110px] -translate-y-3 h-[3px] inline-block bg-[#ba9af9]'></span>
                                <div className='text-black text-[.9rem]'>{item.para}</div>
                            </div>
                        ))
                    }

                </div>
                <div className='space-y-10 lg:order-2 order-3 md:px-10'>
                    {
                        grid2data.map((item, ind) => (
                            <div key={ind}>
                                <div className='text-[1.2rem]'>{item.heading}</div>
                                <span className='w-[110px] -translate-y-3 h-[3px] inline-block bg-[#ba9af9]'></span>
                                <div className='text-black text-[.9rem]'>{item.para}</div>
                            </div>
                        ))
                    }
                </div>
                <div className='lg:order-3 pb-5 md:pb-0 order-1'>
                    <Image src={'/screen_recorder/capture.svg'} alt='image' height={100} width={100} className='w-full'/>
                </div>
            </div>
        </div>
    )
}

export default CaptureAnyThing
