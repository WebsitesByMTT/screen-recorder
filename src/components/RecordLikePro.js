import React from 'react'

const RecordLikePro = () => {

    const data = [
        {
            para: 'With customized settings, rapid sharing choices, and unrivalled ease of use, experience unsurpassed versatility. You can revolutionize your screen recording game with Recordbro, where creativity and simplicity collide.'
        },
        {
            para: 'Don’t just record—captivate, create, and conquer with Recordbro, the pinnacle of screen recording excellence. Join the revolution today and let your screen’s story unfold like never before!'
        }
    ]

    return (
        <div className='pt-20 pb-12'>
            <div className='text-center text-[1.6rem]'>
                <div className='w-full md:w-[75%] text-[2rem] font-normal md:text-[2.5rem] mx-auto'>Record Like a Pro: Elevate Your Content with Recordbro's Unmatched Screen Recording Excellence!</div>
            </div>
            <div className='grid grid-cols-1 w-[90%] space-y-10 md:space-y-0 md:w-[85%] pt-16 mx-auto md:gap-x-10 md:grid-cols-2'>
                {
                    data?.map((item) => (
                        <div className='p-6 md:px-20  md:py-32 text-[1rem] md:text-[1.6rem] text-center rounded-3xl bg-gradient-to-b from-[#E1D6FF] to-[#FFFFFF]'>
                            <p>{item.para}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecordLikePro
