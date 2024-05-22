import Blogs from '@/components/Blogs'
import Faq from '@/components/Faq'
import FreeScreenRecorder from '@/components/FreeScreenRecorder'
import WaysForRecording from '@/components/WaysForRecording'
import React from 'react'

const page = () => {
  return (
   <>
    <FreeScreenRecorder />
    <WaysForRecording />
    <Blogs />
    <Faq />
   </>
  )
}

export default page
