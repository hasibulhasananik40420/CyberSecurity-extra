import React from 'react'
import FeatureHero from '../../Components/Features/FeatureHero'
const HeroFeaturContent = () => {
    return (
        <div>

            {/***************** About us  section start here ************************************/}

            <div className='text-center p-3 pt-28 pb-12'>
                <h1 className='lg:text-6xl md:text-4xl text-4xl text-white font-Cuprum font-bold'>About Us</h1>
                <p className='text-[#F9C747] font-medium text-sm font-Inter leading-8'>Home / About Us</p>
            </div>


            <div>
                <FeatureHero />
            </div>

            {/*************************** About us  section end here **************************/}

        </div>
    )
}

export default HeroFeaturContent