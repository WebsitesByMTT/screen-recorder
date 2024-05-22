import React from 'react'

const Blogs = () => {

    const data = [
        {
            title: 'Best free screen recorder to record games in 2024',
            para: 'Visit its official website and install it on your browser and then you can select the option of a screen record and start recording.'
        },
        {
            title: 'Best free screen recorder to record games in 2024',
            para: 'Visit its official website and install it on your browser and then you can select the option of a screen record and start recording.'
        },
        {
            title: 'Best free screen recorder to record games in 2024',
            para: 'Visit its official website and install it on your browser and then you can select the option of a screen record and start recording.'
        }
    ]

    return (
        <div className='bg-white pb-12 md:pb-20'>
            <div className='w-[95%] md:w-[80%] mx-auto'>
                <div className='text-black text-center text-[2rem] md:text-[3rem]'>Blogs</div>
                <div className='grid grid-cols-12 space-y-4 md:space-y-0 md:gap-x-10 pt-10'>
                    {
                        data?.map((item, ind) => (
                            <div key={ind} className='bg-gradient-to-t rounded-3xl p-[1px] from-[#5329C4] to-[#B6A4E6] col-span-12 md:col-span-4'>
                                <div className='bg-white px-3 md:px-10 py-8 md:py-12 rounded-3xl'>
                                    <div className='flex justify-center pb-6'>
                                        <span className='inline-block w-[60%] h-[5px] bg-[#B6A4E6]'></span>
                                    </div>
                                    <div className='text-[1.8rem] text-[#230346]'>{item.title}</div>
                                    <div className='text-[#230346] text-[1rem] pt-3'>{item.para}</div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Blogs