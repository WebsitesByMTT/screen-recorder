import Image from 'next/image'
import React from 'react'

const notfound = () => {
  return (
    <div className='relative h-screen w-[90vw]'>
       <Image src={'/404.png'} alt='404' width={1000} height={1000} className='absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]'/>
    </div>
  )
}

export default notfound
