import React from 'react'
import rightArrow from '../../assets/Regular.svg'
import check from '../../assets/Vector.svg'
const PricingPlanCard = () => {
    return (
        <div className='grid grid-cols-1 gap-x-2 gap-y-10 justify-items-center md:grid-cols-2 md:gap-8 md:max-w-3xl md:mx-auto lg:grid-cols-3 lg:max-w-containerSmall lg:mx-auto lg:gap-2 xl:gap-4  xl:max-w-container xl:mx-auto'>
            {/************* pricing plan card 1 start here *********************/}
            <div className='bg-[#011D3A] lg:w-[370px] w-[340px] md:w-[350px] p-6 py-8 lg:hover:scale-105 duration-500 ease-in-out'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#F9C747] font-Inter font-medium text-sm '>Monthly</p>
                    <h1 className='text-white font-bold text-5xl font-Cuprum'>$499</h1>
                    <p className='text-[#99A2AC] font-Inter font-normal text-[15px] mt-3'>Nam libero tempore soluta nobis eligendi quod maxime placeat possimus assumenda</p>

                    <div className='mt-4'>
                        <button className='bg-[#3657CD] text-white font-Cuprum text-base font-medium px-4 py-2 flex items-center justify-center gap-1 transition-all duration-300 transform hover:scale-105'>
                            <span>Get started now</span> <span> <img className='w-4 h-3' src={rightArrow} alt="" /></span>
                        </button>
                    </div>

                    <h1 className='text-xl font-bold font-Cuprum text-white mt-7'>Personal</h1>

                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>Encrypted Transactions</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>24/7 Support Service</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>Automated Daily Backup</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>Free Hardware Included</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>Scan Every 12 Hours</p>
                    </div>

                </div>
            </div>
            {/************* pricing plan card 1 end here *********************/}

            {/************* pricing plan card 2 start here *********************/}
            <div className='bg-[#011D3A] lg:w-[370px] w-[340px] md:w-[350px] p-6 py-8 lg:hover:scale-105 duration-500 ease-in-out'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#F9C747] font-Inter font-medium text-sm '>Monthly</p>
                    <h1 className='text-white font-bold text-5xl font-Cuprum'>$1499</h1>
                    <p className='text-[#99A2AC] font-Inter font-normal text-[15px] mt-3'>Nam libero tempore soluta nobis eligendi quod maxime placeat possimus assumenda</p>

                    <div className='mt-4'>
                        <button className='bg-[#3657CD] text-white font-Cuprum text-base font-medium px-4 py-2 flex items-center justify-center gap-1 transition-all duration-300 transform hover:scale-105'>
                            <span>Get started now</span> <span> <img className='w-4 h-3' src={rightArrow} alt="" /></span>
                        </button>
                    </div>

                    <h1 className='text-xl font-bold font-Cuprum text-white mt-7'>Startup</h1>

                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>Encrypted Transactions</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>24/7 Support Service</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>Automated Daily Backup</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>Free Hardware Included</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>Scan Every 12 Hours</p>
                    </div>

                </div>
            </div>
            {/************* pricing plan card 2 end here *********************/}

            {/************* pricing plan card 3 start here *********************/}
            <div className='bg-[#011D3A] lg:w-[370px] w-[340px] md:w-[350px] p-6 py-8 lg:hover:scale-105 duration-500 ease-in-out'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#F9C747] font-Inter font-medium text-sm '>Monthly</p>
                    <h1 className='text-white font-bold text-5xl font-Cuprum'>$2499</h1>
                    <p className='text-[#99A2AC] font-Inter font-normal text-[15px] mt-3'>Nam libero tempore soluta nobis eligendi quod maxime placeat possimus assumenda</p>

                    <div className='mt-4'>
                        <button className='bg-[#3657CD] text-white font-Cuprum text-base font-medium px-4 py-2 flex items-center justify-center gap-1 transition-all duration-300 transform hover:scale-105'>
                            <span>Get started now</span> <span> <img className='w-4 h-3' src={rightArrow} alt="" /></span>
                        </button>
                    </div>

                    <h1 className='text-xl font-bold font-Cuprum text-white mt-7'>Company</h1>

                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>Encrypted Transactions</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>24/7 Support Service</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>Automated Daily Backup</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>Free Hardware Included</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-3 h-3 text-[#F9C747]' src={check} alt="" />
                        <p className='text-white font-Inter text-[13px] '>Scan Every 12 Hours</p>
                    </div>

                </div>
            </div>
            {/************* pricing plan card 3 end here *********************/}


        </div>
    )
}

export default PricingPlanCard