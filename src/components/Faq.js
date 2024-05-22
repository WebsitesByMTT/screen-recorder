import React from 'react'

const Faq = () => {

    const faq = [
        {
            ques: 'What is Recordbro and How to use it?',
            Ans: 'It is a software from where you can record a screen, gameplay, and webcam. You can also blur that particular area that you don’t want to highlight. You can use the extension by installing it from its official website.',
            mdcols: 'md:col-span-4',
        },
        {
            ques: 'How to download the screen recording from recordbro?',
            Ans: 'It is very easy, just to the screen recording page and settings there will be an option to record the screen click that and record your screen.',
            mdcols: 'md:col-span-8',
        },
        {
            ques: 'How can I Record my face?',
            Ans: 'By using a webcam you can record your face and voice.',
            mdcols: 'md:col-span-3',
        },
        {
            ques: 'How to record HD-quality video?',
            Ans: 'While recording any video from this extension, it automatically downloads it in HD quality.',
            mdcols: 'md:col-span-4',
        },
        {
            ques: 'How can I record my screen with audio?',
            Ans: 'In the settings, there is an option where you can record your voice and keep the video in its original form.',
            mdcols: 'md:col-span-5',
        },
        {
            ques: 'Is online Screen Recording secure?',
            Ans: 'Over the last few years, thousands of people have been using this extension without any trouble. So, this extension is safe and secure to use.',
            mdcols: 'md:col-span-4',
        },
        {
            ques: 'How can I record my computer screen online for free?',
            Ans: 'It is very simple, by just installing it on your browser. This extension is free to use. So record anything for free.',
            mdcols: 'md:col-span-8',
        }
    ]

    return (
        <div className='pb-20 bg-white'>
            <div className='text-center text-[2rem] md:text-[3rem] text-black'>Frequently Asked Questions</div>
            <div className='pt-10'>
                <div className='grid  gap-y-5  md:gap-5 grid-cols-12'>
                    {
                        faq.map((item, ind) => (
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
