import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

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
                        <div className='text-black text-[1rem]  mx-auto'>We highly respect your privacy rights. You can search for any information related to our website without sharing your personal information. There we have mentioned everything including which type of information we collect and how we utilize your personal details in such situations. Remember that we change our privacy policy from time to time. So, it will be best if you keep track of it.</div>
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
