import React, { useEffect, useState } from 'react'
import FaqAccordion from '../../Components/FaqAccordion/FaqAccordion'
import rightArrow from '../../assets/Regular.svg'
const FaqDetails = () => {

    const [faqs, setfaqs] = useState([])
    useEffect(() => {
        fetch('Faq.json')
            .then(res => res.json())
            .then(data => setfaqs(data))
    }, [])
    return (
        <div>
            {/******************* faqs section start here  ****************************/}
            <div className=''>
                {
                    faqs?.map(faq => <FaqAccordion key={faq._id} data={faq} />)
                }



                <div className='flex justify-center items-center pb-8 pt-8'>
                    {/* <button className='bg-[#3657CD] text-white font-Cuprum text-base font-medium px-4 py-2 flex items-center justify-center gap-1 transition-all duration-300 transform hover:scale-105'>
                        <span>Join our team</span> <span> <img className='w-4 h-3' src={rightArrow} alt="" /></span>
                    </button> */}


                    <button className="px-5 flex md:mx-auto items-center gap-4  max-w-max py-2 lg:mx-0 mx-auto mt-10 text-white bg-bodyBlue text-lg  hover:text-white hover:bg-textYellow duration-300 ">
                        More About us
                        <img
                            className="w-4 fill-black  inline-block text-left transition-all duration-300 ease-in"
                            stroke="black"
                            src={rightArrow}
                            alt=""
                        />
                    </button>
                </div>
            </div>
            {/******************* faqs section end here  ****************************/}

        </div>
    )
}

export default FaqDetails