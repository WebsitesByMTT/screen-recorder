import React from 'react'

const RecordingSteps = ({ data, heading }) => {


    const lastindex = data.length - 1

    return (
        <div className='bg-white px-5 py-5 lg:py-10 lg:px-14 '>
            <div>
                <h2 className='text-black text-[2rem] md:text-[3rem] pb-3 md:pb-16 text-center'>{heading}</h2>
                {
                    data.map((item, ind) => (
                        <div key={ind} className='pt-8'>
                            <div className='w-full md:w-[800px] lg:w-[900px] 2xl:w-[1150px] items-start grid grid-cols-12   mx-auto' key={ind}>
                                <div key={ind} className={`col-span-12  md:col-span-6 ${ind % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                                    <div className={`md:flex  pb-6 md:pb-0 space-x-4 justify-between ${ind % 2 === 1 ? 'md:flex-row-reverse' : ''}  items-center`}>
                                        <div className='mx-auto md:mx-0 space-x-3  px-4 py-2 rounded-full flex items-center w-[200px] text-white bg-[#B6A4E6]'>
                                            {item.icon}
                                            <div className='text-[1.4rem]'>{item.steps}</div>
                                        </div>
                                        <p className='text-[1.2rem]  md:pt-0 text-center md:text-start w-[100%] md:w-[75%]'>{item.text}</p>
                                    </div>
                                </div>
                                {/* Check if the index is even to set the order */}
                                <div className={`md:flex justify-center hidden col-span-6  ${ind % 2 === 1 ? 'md:order-1' : 'md:order-2'}  `}>
                                    {ind !== lastindex && item.arrow}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RecordingSteps