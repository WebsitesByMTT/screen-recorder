import Blogs from '@/components/Blogs'
import CaptureAnyThing from '@/components/CaptureAnyThing'
import Faq from '@/components/Faq'
import FreeScreenRecorder from '@/components/FreeScreenRecorder'
import OurUsers from '@/components/OurUsers'
import WaysForRecording from '@/components/WaysForRecording'
import React from 'react'

const page = () => {
  return (
   <>
    <CaptureAnyThing />
    <OurUsers />
    <FreeScreenRecorder />
    <WaysForRecording />
    <Blogs />
    <Faq />
   </>
  )
}

export default page
