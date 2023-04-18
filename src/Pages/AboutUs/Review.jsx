import React from 'react'
import commonIcon from '../../assets/about us/common icon .svg'
import starIcon from '../../assets/about us/star.svg'
import image1 from '../../assets/unsplash_Py8F6-hRn5o.svg'
const Review = () => {
    return (
        <div className='max-w-container mx-auto'>
            {/********************* Review section start  here **************************/}
            <div className='pt-8 pb-10 flex flex-col justify-center lg:w-2/4 w-full p-6 items-center mx-auto'>
                <img className='w-12 h-12' src={commonIcon} alt="" />
                <p className='text-base text-white font-Cuprum font-normal leading-6 pt-6'>“Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae”</p>

                <div className='flex gap-6 pt-12'>
                    <div>
                        <img className='w-16 h-16 mix-blend-luminosity' src={image1} alt="" />
                    </div>
                    <div className=''>
                        <p className='text-base text-white font-normal font-Cuprum pb-3'>Peterson / Ceo & Founder</p>
                        <span className='flex items-center gap-2'>
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                        </span>
                    </div>
                </div>
            </div>

            {/********************* Review  section end  here **************************/}

        </div>
    )
}

export default Review