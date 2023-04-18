import React from 'react'
import ExpertTeamCard from './ExpertTeamCard'

const ExpertTeam = () => {
  return (
    <div className='bg-[#3657CD] h-full'>
            {/***************** our expert team section start here ***********************/}
            <div className='text-center pt-8'>
                <h1 className='lg:text-4xl text-2xl text-white font-Cuprum font-bold'>Expert Team Who Are Behind </h1>
                <h1 className='lg:text-4xl text-2xl text-white font-Cuprum font-bold'>the Whole Security </h1>
            </div>

            {/*********************** our expart  team Card  here**********************/}
            <div className='pt-12 pb-12 '>
              
             <ExpertTeamCard/>
      
            </div>

        </div>
  )
}

export default ExpertTeam