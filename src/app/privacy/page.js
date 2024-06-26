import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'


export const metadata = {
    title: "Visit free and secure screen recording privacy policy page.",
    description: " If you have any doubt regarding our extension, you can visit the free and secure screen recording privacy policy page and solve all your queries.",
    icons: {
      icon: '/favicon.png',
    },
    keywords: "Free and Secure screen recorder, best recording software, online video recorder, screen record with audio, free screen recording software, screen recording on Chrome, game recording software, Real-time Draw Tool, Real-Time Blur Display, Download 4K UHD Video Quality, Webcam Recorder, free screen recorder, free screen recorder Chrome, how to screen record on Chrome, screen recorder free download, Chrome screen recorder with audio, free Game recording software, best game recording software, how to Game record on Chrome, Game screen recorder free download, record gameplay with audio, record gameplay, Free Webcam Recorder, webcam recording software, free webcam recording software, online video recorder, Capture HD Quality Video",
    openGraph: {
      title: "Privacy policy - Recordbro",
      description:"f you have any doubt regarding our extension, you can visit the free and secure screen recording privacy policy page and solve all your queries.",
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

                <div className='pt-[30%] w-[89%] md:w-[70%] mx-auto md:pt-[15%] lg:pt-[10%] pb-20'>
                    <div>
                        <div className='text-start text-black  pb-4 mx-auto text-[2.5rem]'>Privacy Policy</div>
                        <div className='text-black text-[1rem]  mx-auto'>We highly respect your privacy rights. You can search for any information related to our website <a className='text-blue-100' href='/'>(Recordbro)</a> without sharing your personal information. There we have mentioned everything including which type of information we collect and how we utilize your personal details in such situations. Remember that we change our privacy policy from time to time. So, it will be best if you keep track of it.</div>
                    </div>
                    <div className='py-5'>
                        <div className='text-start text-black pb-4 mx-auto text-[2.5rem]'>Cookies</div>
                        <div className='text-black text-[1rem]   mx-auto'>Our company uses cookies to store your information. It is a small text file that is stored on your computer&apos;s hard drive and can be read by our system only. Most of the companies allow them to control but we do not.</div>
                    </div>
                    <div>
                        <div className='text-start text-black  pb-4 mx-auto text-[2.5rem]'>Children</div>
                        <div className='text-black text-[1rem]  mx-auto'>If your kid is below 18 and he/she has entered their personal information then we remove all the details and do not disclose it.</div>
                        <div className='text-black text-[1rem] py-5  mx-auto'>If you use our extension, we can save your email address on our server but we only use it for important purposes, such as administrative needs or notifying you about the updates. Our aim is to prioritize your security and encrypt all your personal details by using SSL technology to safeguard them. We maintain reasonable security measures. We do not disclose your sensitive details without your permission unless it is legally obligated.</div>
                        <div className='text-black text-[1rem]  mx-auto'>In our forums, we refrain from sharing your information and if it is disclosed by another communication then we are not responsible for it. We update our privacy policy page based on the company&apos;s feedback.</div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default page
