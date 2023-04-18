import React from 'react'
import header2Image from '../../assets/video/header 2 video.svg'
import header2Button from '../../assets/video/header 2 button.svg'
const Videos = () => {
  return (
   <div className='bg-bodyColor'>
     <div className='relative'>
    <img className='w-full h-full mix-blend-luminosity hover:mix-blend-normal duration-300' src={header2Image} alt="" />
    <img className='lg:w-16 lg:h-16 w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2' src={header2Button} alt="" />
  </div>
   </div>
  
  )
}

export default Videos