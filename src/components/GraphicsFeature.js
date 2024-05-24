import Image from 'next/image'
import React from 'react'

const GraphicsFeature = () => {

  const data = [
    {
      title: 'Screen Record With Audio',
      para: 'By simply downloading the extension, you can record your screen with audio for free and save it in files.',
      image: '/hero/graphics_feature1.svg',
      gradient:"linear-gradient(90deg, #3F1F94 1.56%, #402097 10.23%, #4422A1 22.38%, #4824AA 35.2%, #5028BD 49.96%, #5329C3 56.2%, #5329C4 62.53%, #5329C4 77.37%, #5329C4 88.89%, #5329C4 100%)"
    },
    {
      title: 'Webcam Recorder',
      para: 'This extension lets you record all the external video devices including the webcam.',
      image: '/hero/graphics_feature2.svg',
      gradient:"linear-gradient(90deg, #5329C4 0%, #5329C4 18.35%, #4721AD 36.86%, #4520A8 52.69%, #5127C0 74.16%, #5329C4 79.09%, #5329C4 87.35%, #5329C4 100%)"
    },
    {
      title: 'Blur Your Screen',
      para: 'Now, you can blur that particular where you have mentioned all your sensitive information.',
      image: '/hero/graphics_feature3.svg',
      gradient:'linear-gradient(90deg, #2D1873 0%, #371C89 20.15%, #3F2099 35.05%, #42219F 49.76%, #41219D 60.41%, #3B1E91 75.15%, #2F1877 100%)'
    },
    {
      title: 'Game Recording Software',
      para: 'Whether it is 2D or 3D games with 4K UHD video, you can capture various types of games while playing.',
      image: '/hero/graphics_feature4.svg',
      gradient:'linear-gradient(91deg, #31197C 0.49%, #4322A4 50.48%, #4E26BA 73.8%, #5229C3 85.42%, #5227BF 99.55%)'
    }
  ]
  
  return (
    <div className='bg-white pb-10 md:pb-20'>
      <div className='grid grid-cols-12 space-y-5 w-[85%] md:space-y-0 md:gap-10  mx-auto'>
        {
          data.map((item, ind) => (
            <div key={ind} className='col-span-12 overflow-hidden rounded-3xl md:col-span-6'>
              <div  style={{background:item.gradient }}>
                <div className='pl-6 md:pl-12 pt-10 text-white'>
                  <div className='text-[1.5rem] md:text-[2rem]'>{item.title}</div>
                  <div className='pt-3 text-[.9rem] w-[95%] md:w-[70%]'>{item.para} </div>
                </div>
              </div>
              <div className='relative'>
                <Image src={item.image} alt='img' height={100} width={100} className='w-full  -translate-y-1 h-full' />
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
