import React from 'react'

const Faq = ({faq}) => {

    

    return (
        <div className='pb-20 bg-white'>
            <div className='text-center text-[2rem] md:text-[3rem] text-black'>Frequently Asked Questions</div>
            <div className='pt-10'>
                <div className='grid  gap-y-5  md:gap-5 grid-cols-12'>
                    {
                        faq?.map((item, ind) => (
                            <div key={ind} className={`p-[1px] bg-gradient-to-t  rounded-2xl ${item.mdcols} col-span-12 h-[100%] from-[#5329C4] to-[#B6A4E6]   border`}>
                                <div className='bg-[#F5F1FF]  rounded-2xl px-3 md:px-5 py-8 h-full'>
                                    <div className='text-[1.8rem] '>{item.ques}</div>
                                    <div className='text-[#230346] text-[1rem] pt-3'>{item.Ans}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq
