import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {

    const data = [
        {
            title: 'Simple Tips For Game Recording Software',
            para: 'Visit its official website and install it on your browser and then you can select the option of a screen record and start recording.'
        },
        {
            title: 'Best free screen recorder to record games in 2024',
            para: 'Visit its official website and install it on your browser and then you can select the option of a screen record and start recording.'
        },
        {
            title: 'Simple Tips For Game Recording Software',
            para: 'Visit its official website and install it on your browser and then you can select the option of a screen record and start recording.'
        },
        {
            title: 'Best free screen recorder to record games in 2024',
            para: 'Visit its official website and install it on your browser and then you can select the option of a screen record and start recording.'
        },
        {
            title: 'Simple Tips For Game Recording Software',
            para: 'Visit its official website and install it on your browser and then you can select the option of a screen record and start recording.'
        },
        {
            title: 'Best free screen recorder to record games in 2024',
            para: 'Visit its official website and install it on your browser and then you can select the option of a screen record and start recording.'
        },
        {
            title: 'Simple Tips For Game Recording Software',
            para: 'Visit its official website and install it on your browser and then you can select the option of a screen record and start recording.'
        },
        {
            title: 'Best free screen recorder to record games in 2024',
            para: 'Visit its official website and install it on your browser and then you can select the option of a screen record and start recording.'
        },
        {
            title: 'Simple Tips For Game Recording Software',
            para: 'Visit its official website and install it on your browser and then you can select the option of a screen record and start recording.'
        }
    ]
    return (
        <>
            <div
                className="rounded-tl-3xl bg-gradient-to-b rounded-3xl from-[#5329C4] to-[#F3F0FC] rounded-tr-3xl bg-custom-gradient overflow-hidden relative"

            >
                <Navbar />

                <div className='pt-[30%] md:pt-[15%] lg:pt-[10%] pb-20'>
                    <div className='text-center text-black  mx-auto text-[3rem]'>Blogs</div>
                </div>
            </div>
            <div className='grid grid-cols-12 space-y-4  md:gap-5 lg:space-y-0 lg:gap-10 pt-10'>
                {
                    data?.map((item, ind) => (
                        <div key={ind} className='border border-[#5329C4] bg-white px-3 md:px-10 py-8 md:py-12 col-span-12 md:col-span-6 lg:col-span-4 rounded-3xl'>
                            <div className='flex justify-center pb-6'>
                                <span className='inline-block w-[60%] h-[5px] bg-[#B6A4E6]'></span>
                            </div>
                            <div className='text-[1.8rem] text-[#230346]'>{item.title}</div>
                            <div className='text-[#230346] text-[1rem] pt-3'>{item.para}</div>
                        </div>
                    ))
                }

            </div>
            <Footer />
        </>

    )
}

export default page
