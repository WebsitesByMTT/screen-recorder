import Image from 'next/image'
import React from 'react'

const GraphicsFeature = () => {

  const data = [
    {
      title: 'Screen Record With Audio',
      para: 'By simply downloading the extension, you can record your screen with audio for free and save it in files.',
      image: '/hero/graphics_feature1.svg'
    },
    {
      title: 'Webcam Recorder',
      para: 'This extension lets you record all the external video devices including the webcam.',
      image: '/hero/graphics_feature2.svg'
    },
    {
      title: 'Blur Your Screen',
      para: 'Now, you can blur that particular where you have mentioned all your sensitive information.',
      image: '/hero/graphics_feature3.svg'
    },
    {
      title: 'Game Recording Software',
      para: 'Whether it is 2D or 3D games with 4K UHD video, you can capture various types of games while playing.',
      image: '/hero/graphics_feature4.svg'
    }
  ]

  return (
    <div className='bg-white pb-10 md:pb-20'>
      <div className='grid grid-cols-12 space-y-5 md:space-y-0 md:gap-10 w-[95%] md:w-[80%] mx-auto'>
        {
          data.map((item, ind) => (
            <div key={ind} className='col-span-12 md:col-span-6'>
              <div className={`bg-gradient-to-r ${ind===1?'from-[#5229C4]':'from-[#3F2195]'}  rounded-tl-3xl rounded-tr-3xl to-[rgb(86,41,209)]`}>
                <div className='pl-3 md:pl-12 pt-10 text-white'>
                  <div className='text-[1.5rem] md:text-[2rem]'>{item.title}</div>
                  <div className='pt-3 text-[.9rem] w-[95%] md:w-[70%]'>{item.para} </div>
                </div>
              </div>
              <div className='relative'>
                <Image src={item.image} alt='img' height={100} width={100} className='w-full h-full' />
                {ind===0&&<Image src={'/hero/audio_icon.svg'} alt='img' height={100} width={100} className='absolute top-[20%] w-[15%] md:w-[15%] right-[20%]' />}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default GraphicsFeature
