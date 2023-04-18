import React from 'react'
import productImage1 from '../../../assets/product list image/productimage 1.svg'
import productImage2 from '../../../assets/product list image/product image 2.svg'
import productImage3 from '../../../assets/product list image/product image 3.svg'
import productImage4 from '../../../assets/product list image/product image 4.svg'
const RecemtlyView = () => {
  return (
    <div>
      {/******************** Recently Viewed  section start here ****************************/}
      <div className='text-center p-3 '>
        <h1 className='lg:text-6xl md:text-4xl text-4xl text-white font-Cuprum font-bold'>Recently Viewed</h1>
      </div>
      {/************************ Recently Viewed end here ********************************/}



      {/************************ Recently Viewed card start here ********************************/}
      <div className='pt-10 pb-20'>
        <div className='grid grid-cols-1 justify-items-center gap-x-1 gap-y-12 md:grid-cols-2 md:gap-x-2 md:gap-y-12 md:max-w-containerxs md:mx-auto lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8 lg:max-w-contentContainer lg:mx-auto xl:grid-cols-4 xl:gap-x-2 xl:gap-y-16 xl:max-w-container xl:mx-auto'>

          {/********************** product card 1 start here ***********************8*/}
          <div className='w-[280px] '>

            <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
              <img className='mix-blend-luminosity cursor-pointer hover:mix-blend-normal hover:duration-500 ease-in-out' src={productImage1} alt="" />
              <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$40.00</p>
            </div>
            <h1 className='text-2xl font-bold font-Cuprum text-white mt-4'>Extended Cable</h1>
            <button className='text-textYellow font-medium text-base font-Inter  '>Add to cart</button>
          </div>
          {/********************** product card 1 end here ***********************8*/}

          {/********************** product card 2 start here ***********************8*/}
          <div className='w-[280px] '>

            <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
              <img className='mix-blend-luminosity cursor-pointer hover:mix-blend-normal hover:duration-500 ease-in-out' src={productImage2} alt="" />
              <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$114.40</p>
            </div>
            <h1 className='text-2xl font-bold font-Cuprum text-white mt-4'>Wireless Keyboards</h1>
            <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
          </div>
          {/********************** product card 2 end here ***********************8*/}

          {/********************** product card 3 start here ***********************8*/}
          <div className='w-[280px] '>

            <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
              <img className='mix-blend-luminosity cursor-pointer hover:mix-blend-normal hover:duration-500 ease-in-out' src={productImage3} alt="" />
              <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$20.00</p>
            </div>
            <h1 className='text-2xl font-bold font-Cuprum text-white mt-4'>Presentation Remote</h1>
            <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
          </div>
          {/********************** product card 3 end here ***********************8*/}

          {/********************** product card 4 start here ***********************8*/}
          <div className='w-[280px]'>

            <div className='w-[280px]  shadow bg-[#011D3A] shrink-0'>
              <img className='mix-blend-luminosity cursor-pointer hover:mix-blend-normal hover:duration-500 ease-in-out' src={productImage4} alt="" />
              <p className='bg-[#3657CD] text-white w-20 text-center font-Cuprum font-medium text-base px-2 py-1'>$360.00</p>
            </div>
            <h1 className='text-2xl font-bold font-Cuprum text-white mt-4'>Bluetooth Headset</h1>
            <button className='text-textYellow font-medium text-base font-Inter  '>Uncategorized</button>
          </div>
        </div>

        {/********************** product card 4 end here ***********************8*/}

      </div>

      {/************************ Recently Viewed card end here ********************************/}





    </div>
  )
}

export default RecemtlyView