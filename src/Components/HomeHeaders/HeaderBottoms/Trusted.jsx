import React from 'react'
import line from '../../../assets/line.svg'
import company1 from '../../../assets/company/company1.png'
import company2 from '../../../assets/company/company2.png'
import company3 from '../../../assets/company/company3.png'
import company4 from '../../../assets/company/company4.png'
import company5 from '../../../assets/company/company5.png'
import { useLocation } from 'react-router-dom'

function Trusted() {
    const location = useLocation()
    let home2 = '/home-two'
    let home3 = '/home-three'
    let path = location?.pathname
    return (
        <div  className='bg-transparent mt-8 lg:mt-24 py-10 min-h-max w-full max-w-6xl mx-auto text-white'>
            {
                path == '/' && <img className='w-full max-w-7xl h-3 block mx-auto  mb-10' src={line} alt="" />
            } 
             
            <p className='text-lg text-center '>Trusted by more than <span className="text-[#f9c747]">+750</span> companies around the globe</p>
            <div className='my-10  w-full max-w-7xl h-3  mx-auto'>
            <div className='grid grid-cols-3 md:grid-cols-5 content-center items-center flex-wrap gap-8 lg:gap-20 justify-center p-3'>
            <img className='block mr-4 hover:scale-110 duration-500 ease-linear' src={company1} alt="" />
            <img className='block mr-4 mx-auto hover:scale-110 duration-500 ease-linear' src={company2} alt="" />
            <img className='block mr-4 hover:scale-110 duration-500 ease-linear' src={company3} alt="" />
            <img className='block mr-4 hover:scale-110 duration-500 ease-linear' src={company4} alt="" />
            <img className='block mr-4 hover:scale-110 duration-500 ease-linear' src={company5} alt="" />
            </div>
            </div>
            {
                path !== '/' && <img className='w-full max-w-7xl h-3 block mx-auto mt-52 xl:mt-24' src={line} alt="" />
            }
           
       
        </div>
    )
}

export default Trusted