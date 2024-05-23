import React from 'react'

const RecordingSteps = ({data,heading}) => {

    
    const lastindex=data.length-1 

    return (
        <div className='bg-white px-5 py-5 lg:py-10 lg:px-14 '>
            <div>
                <h2 className='text-black text-[2rem] md:text-[3rem] pb-3 md:pb-16 text-center'>{heading}</h2>
            {
                data.map((item, ind) => (
                    <div className='w-full md:w-[70%] grid grid-cols-12 py-4 md:py-6 mx-auto' key={ind}>
                        <div key={ind} className={`col-span-12 md:col-span-7 ${ind % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                            <div className={`md:flex md:space-x-10  pb-6 md:pb-0 justify-between ${ind % 2 === 1 ? 'md:flex-row-reverse' : ''}  items-center`}>
                                <div className='w-[55%] md:w-[35%] justify-between mx-auto md:mx-0  px-4 py-2 rounded-full flex items-center text-white bg-[#B6A4E6]'>
                                    {item.icon}
                                    <div className='text-[1.4rem]'>{item.steps}</div>
                                </div>
                                <div className='text-[1.2rem] pt-2 md:pt-0 text-center md:text-start w-[100%] md:w-[75%]'>{item.text}</div>
                            </div>
                        </div>
                        {/* Check if the index is even to set the order */}
                        <div className={`md:block hidden col-span-5  ${ind % 2 === 1 ? 'md:order-1' : 'md:order-2'}  `}>
                            {ind !== lastindex && item.arrow}
                        </div>

                    </div>

                ))
            }
            </div>
        </div>
    );
};

export default RecordingSteps