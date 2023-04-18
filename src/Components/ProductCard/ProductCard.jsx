import React from 'react'
import productImage1 from '../../assets/product list image/productimage 1.svg'
import productImage2 from '../../assets/product list image/product image 2.svg'
import productImage3 from '../../assets/product list image/product image 3.svg'
import productImage4 from '../../assets/product list image/product image 4.svg'
import productImage5 from '../../assets/product list image/product image 5.svg'
import productImage6 from '../../assets/product list image/product image 6.svg'
import productImage7 from '../../assets/product list image/product image 7.svg'
import productImage8 from '../../assets/product list image/product image 8.svg'
import productImage9 from '../../assets/product list image/product image 9 .svg'
import productImage10 from '../../assets/product list image/product image 10 .svg'
import productImage11 from '../../assets/product list image/product image 11.svg'
import productImage12 from '../../assets/product list image/product image 12.svg'
import uparrow from '../../assets/product list image/uparrow.svg'
const ProductCard = () => {
    return (
        <div className='min-h-screen'>
            {/********************** product card list section start here *****************/}
            <div className='flex justify-between md:max-w-containerSmall md:mx-auto lg:max-w-contentContainer lg:mx-auto xl:max-w-container xl:mx-auto px-6 pt-6 pb-6  '>
                <span className='text-sm font-Inter font-normal text-[#99A2AC] w-1/4 lg:block hidden'>Showing 1–9 of 13 results</span>
                <span className='flex justify-between gap-2 border-b-[2px] pb-2 border-b-[#192E44] xl:w-1/4 cursor-pointer'>
                    <p className='text-white uppercase font-normal font-Inter text-[12px] hidden lg:block'>Default shorting</p>
                    <img className='hidden lg:block' src={uparrow} alt="" />
                </span>
            </div>

            <div className='grid grid-cols-1 justify-items-center gap-x-1 gap-y-12 md:grid-cols-2 md:gap-x-2 md:gap-y-12 md:max-w-containerxs md:mx-auto lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8 lg:max-w-contentContainer lg:mx-auto xl:grid-cols-4 xl:gap-x-2 xl:gap-y-16 xl:max-w-container xl:mx-auto'>

                {/********************** product card 1 start here ***********************8*/}
                <div className='w-[280px]'>

                    <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
                        <img className='mix-blend-luminosity cursor-pointer object-cover hover:mix-blend-normal hover:scale-105 duration-500' src={productImage1} alt="" />
                        <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$40.00</p>
                    </div>
                    <h1 className='text-2xl font-bold font-Cuprum text-white mt-8 mb-2'>Extended Cable</h1>
                    <button className='text-textYellow font-medium text-base font-Inter  '>Add to cart</button>
                </div>
                {/********************** product card 1 end here ***********************8*/}

                {/********************** product card 2 start here ***********************8*/}
                <div className='w-[280px] '>

                    <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
                        <img className='mix-blend-luminosity cursor-pointer object-cover hover:mix-blend-normal hover:scale-105 duration-500' src={productImage2} alt="" />
                        <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$114.40</p>
                    </div>
                    <h1 className='text-2xl font-bold font-Cuprum text-white mt-8 mb-2'>Wireless Keyboards</h1>
                    <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
                </div>
                {/********************** product card 2 end here ***********************8*/}

                {/********************** product card 3 start here ***********************8*/}
                <div className='w-[280px] '>

                    <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
                        <img className='mix-blend-luminosity cursor-pointer object-cover hover:mix-blend-normal hover:scale-105 duration-500' src={productImage3} alt="" />
                        <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$20.00</p>
                    </div>
                    <h1 className='text-2xl font-bold font-Cuprum text-white mt-8 mb-2'>Presentation Remote</h1>
                    <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
                </div>
                {/********************** product card 3 end here ***********************8*/}

                {/********************** product card 4 start here ***********************8*/}
                <div className='w-[280px] '>

                    <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
                        <img className='mix-blend-luminosity cursor-pointer object-cover hover:mix-blend-normal hover:scale-105 duration-500' src={productImage4} alt="" />
                        <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$360.00</p>
                    </div>
                    <h1 className='text-2xl font-bold font-Cuprum text-white mt-8 mb-2'>Bluetooth Headset</h1>
                    <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
                </div>
                {/********************** product card 4 end here ***********************8*/}

                {/********************** product card 5 start here ***********************8*/}
                <div className='w-[280px] '>

                    <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
                        <img className='mix-blend-luminosity cursor-pointer object-cover hover:mix-blend-normal hover:scale-105 duration-500' src={productImage5} alt="" />
                        <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$15.90</p>
                    </div>
                    <h1 className='text-2xl font-bold font-Cuprum text-white mt-8 mb-2'>Screen Share Device</h1>
                    <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
                </div>
                {/********************** product card 5 end here ************************/}

                {/********************** product card 6 start here ***********************/}
                <div className='w-[280px] '>

                    <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
                        <img className='mix-blend-luminosity cursor-pointer object-cover hover:mix-blend-normal hover:scale-105 duration-500' src={productImage6} alt="" />
                        <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$80.00</p>
                    </div>
                    <h1 className='text-2xl font-bold font-Cuprum text-white mt-8 mb-2'>Expansion Microphone</h1>
                    <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
                </div>
                {/********************** product card 6 end here ***********************/}


                {/********************** product card 7 start here ***********************/}
                <div className='w-[280px] '>

                    <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
                        <img className='mix-blend-luminosity cursor-pointer object-cover hover:mix-blend-normal hover:scale-105 duration-500' src={productImage7} alt="" />
                        <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$74.90</p>
                    </div>
                    <h1 className='text-2xl font-bold font-Cuprum text-white mt-8 mb-2'>Wireless Mouse</h1>
                    <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
                </div>
                {/********************** product card 7 end here ***********************/}


                {/********************** product card 8 start here ***********************/}
                <div className='w-[280px] '>

                    <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
                        <img className='mix-blend-luminosity cursor-pointer object-cover hover:mix-blend-normal hover:scale-105 duration-500' src={productImage8} alt="" />
                        <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$120.00</p>
                    </div>
                    <h1 className='text-2xl font-bold font-Cuprum text-white mt-8 mb-2'>Bluetooth Speaker</h1>
                    <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
                </div>
                {/********************** product card 8 end here ***********************/}

                {/********************** product card 9 start here **********************/}
                <div className='w-[280px] '>

                    <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
                        <img className='mix-blend-luminosity cursor-pointer object-cover hover:mix-blend-normal hover:scale-105 duration-500' src={productImage9} alt="" />
                        <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$100.00</p>
                    </div>
                    <h1 className='text-2xl font-bold font-Cuprum text-white mt-8 mb-2'>Streaming Camera</h1>
                    <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
                </div>
                {/********************** product card 9 end here ***********************/}

                {/********************** product card 10 start here *********************/}
                <div className='w-[280px] '>

                    <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
                        <img className='mix-blend-luminosity cursor-pointer object-cover hover:mix-blend-normal hover:scale-105 duration-500' src={productImage10} alt="" />
                        <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$38.80</p>
                    </div>
                    <h1 className='text-2xl font-bold font-Cuprum text-white mt-8 mb-2'>Wireless Phone Charger</h1>
                    <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
                </div>
                {/********************** product card 10 end here **********************/}

                {/********************** product card 11 start here *********************/}
                <div className='w-[280px] '>

                    <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
                        <img className='mix-blend-luminosity cursor-pointer object-cover hover:mix-blend-normal hover:scale-105 duration-500' src={productImage11} alt="" />
                        <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$212.90</p>
                    </div>
                    <h1 className='text-2xl font-bold font-Cuprum text-white mt-8 mb-2'>Astro Headset Case</h1>
                    <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
                </div>
                {/********************** product card 11 end here **********************/}

                {/********************** product card 12 start here ********************/}
                <div className='w-[280px] '>

                    <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
                        <img className='mix-blend-luminosity cursor-pointer  hover:mix-blend-normal  object-cover hover:scale-105 duration-500' src={productImage12} alt="" />
                        <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$26.00</p>
                    </div>
                    <h1 className='text-2xl font-bold font-Cuprum text-white mt-8 mb-2'>Wired Earbuds</h1>
                    <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
                </div>
                {/********************** product card 12 end here *********************/}


            </div>

            {/******************* pagination button start here ******************************/}
            <div className='flex justify-center items-center gap-4 mt-16'>
                <button className='h-8 w-8 rounded-full bg-[#3657CD] flex items-center justify-center text-white'>1</button>

                <button className='h-8 w-8 rounded-full bg-[#011D3A] flex items-center justify-center text-white'>2</button>

                <button className=' text-white font-Inter'>next</button>
            </div>
            {/******************* pagination button end here ******************************/}





        </div>
    )
}

export default ProductCard