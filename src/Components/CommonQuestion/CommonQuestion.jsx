import React from 'react'
import FaqDetails from '../../Pages/Faqs/FaqDetails'

const CommonQuestion = () => {
  return (
    <div className='bg-bodyColor '>

        <div className=' lg:flex lg:justify-center lg:gap-x-20 lg:gap-y-16 lg:max-w-container lg:mx-auto md:max-w-containerSmall md:gap-x-12 md:gap-y-16 md:mx-auto lg:pt-16 pt-12 lg:p-0 p-4'>

            <div className='lg:w-1/3 w-full'>
                <h1 className='lg:text-5xl md:text-3xl text-3xl font-bold font-Cuprum text-white'>Here Are the Most Common Questions From Clients</h1>
            </div>

             <div className='lg:w-2/4 lg:pt-0 pt-16 w-full '>
                <FaqDetails/>
             </div>

        </div>
        
    </div>
  )
}

export default CommonQuestion