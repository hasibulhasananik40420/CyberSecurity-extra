import React from 'react'
import PricingPlanCard from '../../Pages/PricingPlan/PricingPlanCard'

const SimplestPricing = () => {
    return (
        <div>
            
           <div className='mt-12'>
           <h1 className='lg:text-5xl text-3xl text-white font-Cuprum font-bold text-center'>The Simplest Pricing Plan to</h1>
           <h1 className='lg:text-5xl text-3xl text-white font-Cuprum font-bold text-center mt-[2px]'> Secure Your Data</h1>
           </div>
             
            {/*pricing Card  here*/}
            <div className='pt-12 pb-12 '>

                <PricingPlanCard />



            </div>
        </div>
    )
}

export default SimplestPricing