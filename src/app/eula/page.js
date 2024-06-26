import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'


export const metadata = {
    title: "End User License Agreement & Terms of Service - recordbro",
    description: "It would be best if you visit our End User License Agreement and Terms of Service page and review it thoroughly. After accepting it you can download it.",
    icons: {
      icon: '/favicon.png',
    },
    keywords: "Free and Secure screen recorder, best recording software, online video recorder, screen record with audio, free screen recording software, screen recording on Chrome, game recording software, Real-time Draw Tool, Real-Time Blur Display, Download 4K UHD Video Quality, Webcam Recorder, free screen recorder, free screen recorder Chrome, how to screen record on Chrome, screen recorder free download, Chrome screen recorder with audio, free Game recording software, best game recording software, how to Game record on Chrome, Game screen recorder free download, record gameplay with audio, record gameplay, Free Webcam Recorder, webcam recording software, free webcam recording software, online video recorder, Capture HD Quality Video",
    openGraph: {
      title: "End User License Agreement & Terms of Service - recordbro",
      description:"It would be best if you visit our End User License Agreement and Terms of Service page and review it thoroughly. After accepting it you can download it.",
      type: 'website',
      siteName: "Screen Recorder",
      images: "/favicon.png",
    },
    alternates: {
      canonical: "/",
    },
  };

const page = () => {
    return (
        <>
            <div
                className="rounded-tl-3xl bg-gradient-to-b rounded-3xl from-[#5329C4] to-[#F3F0FC] rounded-tr-3xl bg-custom-gradient overflow-hidden relative"

            >
                <Navbar />
                <div className='pt-[30%] md:pt-[15%] mx-auto lg:pt-[10%] w-[89%] md:w-[70%]  space-y-4 pb-20'>
                    <div>
                        <h6 className='text-start text-black pb-4 mx-auto text-[2.5rem]'>End User License Agreement and Terms of Service</h6>
                        <p className='text-black text-[1rem]   mx-auto'>Before installing free and <a href='/' className='text-blue-100'>secure screen recording</a> on your browser, you need to agree to the terms of the end user license agreement. If you do not agree to it, then you can not use the software. All the images, icons, and text are owned by the free and secure screen recorder and are protected by copyright laws and international treaties.</p>
                    </div>
                    <div >
                        <div className='text-start text-black  pb-4 mx-auto text-[2.5rem]'>License grant</div>
                        <div className='text-black text-[1rem]   mx-auto'>We will provide you with a non-exclusive, royalty-free license to use the software. Use means you can store, load, install, and execute the software on your browser. You cannot modify the software disable any licensing or control its features. Additionally, you cannot copy our content. You may make a copy of it as long as it remains unmodified. Renting or leasing your rights to the extension is not permitted. You can test the main features of the extension and install it for testing purposes at home, office, or any other location. Remember if the software is not registered, a watermark will be added to your video. Only registered customers can have permission to use its features.</div>
                    </div>
                    <div>
                        <div className='text-start text-black  pb-4 mx-auto text-[2.5rem]'>Ownership</div>
                        <div className='text-black text-[1rem]  mx-auto'>The extension is owned and copyrighted by the company and your license does not grant you any ownership of the software nor does it constitute a sale of any rights of the company. It does not provide you with a license under any patent application of the company.</div>
                    </div>
                    <div>
                        <div className='text-start text-black  pb-4 mx-auto text-[2.5rem]'>No disassembly, recommendation, or decryption</div>
                        <div className='text-black text-[1rem]  mx-auto'>You are not required to disassemble or decrypt the software without obtaining prior written consent from the company.</div>
                    </div>
                    <div>
                        <div className='text-start text-black  pb-4 mx-auto text-[2.5rem]'>No liability for damages</div>
                        <div className='text-black text-[1rem]  mx-auto'>In case of any damages, neither the company nor its suppliers are liable for any incidental, special, or consequential damages related to the use or inability of the software. It includes the loss of business profit, business interruption, loss of business information, or any other loss. There are some jurisdictions that do not allow the exclusion or limitation of liability for the damages. Additionally, it shall not exceed the license fee directly to the company.</div>
                    </div>
                    <div>
                        <div className='text-start text-black  pb-4 mx-auto text-[2.5rem]'>License policy</div>
                        <div className='text-black text-[1rem]  mx-auto'>The extension provides personal and business licenses. For personal license is required for non-commercial use by individuals and a business license is required for commercial use such as by government entities, non-profits, or educational institutions. The annual license is valid for the contracted period where there will be free technical support and updates will be provided for one year with the lifetime license. Each license is valid for use on the browser only. You can reuse or transfer it when you will uninstall the registered software.</div>
                    </div>
                    <div>
                        <div className='text-start text-black  pb-4 mx-auto text-[2.5rem]'>Termination</div>
                        <div className='text-black text-[1rem]   mx-auto'>This agreement will remain in effect for as long as the software holds the copyright unless it is terminated. We reserve the right to terminate your license without notice if you fail to comply with any terms of this agreement.</div>
                    </div>
                    <div className='pt-4'>
                        <div className='text-[1.2rem]   mx-auto text-black font-semibold'>Note:- For more information, you can contact us or directly mail us, we will be happy to help you.</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page
