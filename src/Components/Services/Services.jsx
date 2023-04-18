import React from 'react'
import Servicesgrid from './Servicesgrid'

function Services() {
    return (
        <div className=" bg-bodyColor w-full min-h-[30vh] py-16 px-4  font-Cuprum text-white">
            <h1 className='text-center text-3xl lg:text-5xl'>We Provide Professional <br /> Security Solutions</h1>
            <Servicesgrid/>
        </div>
    )
}

export default Services