import { handelArticle } from '@/articledata/Data'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export async function generateMetadata({ params, searchParams }, parent) {
   const data = await handelArticle(params?.slug)
   return {
      title: data.title,
      description: data.seo.metadesc,
      icons:{
         icon:'/favicon.png',
      },
      openGraph: {
         title: data.seo.optitle,
         description: data.seo.opdesc,
         type:'website',
         siteName: data.seo.siteName,
         images: "/favicon.png",
      },
      alternates: {
         canonical: "/",
      },
   };
}


const page = async ({ params }) => {
   const data = await handelArticle(params?.slug)

   return (
      <>
         <div className="rounded-tl-3xl  pb-20 pt-[3%] bg-gradient-to-b rounded-3xl from-[#5329C4] to-[#F3F0FC] rounded-tr-3xl bg-custom-gradient  relative">
            <Navbar />
         </div>
         <div className='pt-10 md:w-[90%] mx-auto'>
            <div className='flex  items-center'>
               <Link href={'/blogs'} className='text-[#B6A4E6]'>Blogs</Link>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-[#B6A4E6] lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </div>
            <div className='pt-3'>
               {data?.title && <h1 className='md:text-[3rem]  text-[2rem]'>{data?.title}</h1>}
               {data?.banner && <div className='pt-10 pb-5'>
                  <Image src={data?.banner} alt={data.bannerAlt} width={1000} height={1000} className='w-full' />
               </div>}
               <div className='md:w-[90%] mx-auto'>
                  <div className='text-black text-[2rem]'>Published on</div>
                  <div className='text-[.9rem] text-black '>{data?.publishDate}</div>
                  {data?.content.length > 0 && (
                     <div className='py-3  '>
                        {data?.content?.map((item, index) => (
                           <div key={index} className='space-y-4'>
                              {item.heading && <h1 className={`${item.size ? 'text-[1.6rem] md:text-[1.6rem]' : 'text-[2rem] md:text-[2.5rem] '}`}>{item.heading}</h1>}
                              {item.desc.length > 0 && item?.desc.map((subitem, descIndex) => (
                                 <p className='pb-4 text-[1rem]' key={descIndex} dangerouslySetInnerHTML={{ __html: subitem }}></p>
                              ))}
                              {item?.points.length > 0 && <ul className='space-y-4 pl-6 py-2 list-disc'>
                                 {
                                    item?.points.map((point, ind) => (
                                       <li key={ind}>
                                          <div>
                                             <p><span className='font-semibold text-[1.1rem] pr-2' dangerouslySetInnerHTML={{ __html:point.steps }}></span><span dangerouslySetInnerHTML={{ __html: point.point }}></span></p>
                                          </div>
                                       </li>
                                    ))
                                 }
                              </ul>}
                              <div className='pb-5'>
                                 {item.image && <Image src={item.image} alt={item.Alt} width={1000} height={1000} className='w-full' />}
                              </div>
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default page
