import React from 'react'
import image1 from '../../assets/unsplash_Py8F6-hRn5o.svg'
import image2 from '../../assets/unsplash_IF9TK5Uy-KI.svg'
import image3 from '../../assets/unsplash_KIPqvvTOC1s.svg'
import image4 from '../../assets/image4 (2).svg'
import image5 from '../../assets/image5.svg'
import image6 from '../../assets/unsplash_v4zgNaKjBe4.svg'
import image7 from '../../assets/unsplash_W6yWt3AGQpU.png'
import image8 from '../../assets/image8.svg'
import rightArrow from '../../assets/Regular.svg'
const OurTeamCard = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-y-8 justify-items-center md:grid-cols-4 md:gap-4 lg:grid-cols-4 lg:gap-8 max-w-containerSmall mx-auto'>
                {/*************** Our tram cart number 1 start here**************************/}
                <div className='w-[170px]'>

                    <img className='mix-blend-luminosity hover:mix-blend-normal hover:duration-500 ' src={image1} alt="" />

                    <h1 className='text-white font-Cuprum font-semibold text-2xl mt-3'>Morgan Cooper</h1>
                    <p className='text-sm font-medium text-textYellow text-center font-Inter mt-1'>Ceo & founder</p>

                </div>
                {/*************** Our tram cart number 1 end here**************************/}

                {/*************** Our tram cart number 2 start here**************************/}
                <div className='w-[170px]'>

                    <img className=' mix-blend-luminosity hover:mix-blend-normal hover:duration-500 ease-in' src={image2} alt="" />

                    <h1 className='text-white font-Cuprum font-semibold text-2xl mt-3'>Harry Peterson</h1>
                    <p className='text-sm font-medium text-textYellow text-center font-Inter mt-1'>Security Head</p>

                </div>
                {/*************** Our tram cart number 2 end here**************************/}

                {/*************** Our tram cart number 3 start here**************************/}
                <div className='w-[170px]'>

                    <img className='mix-blend-luminosity hover:mix-blend-normal hover:duration-500 ease-in' src={image3} alt="" />

                    <h1 className='text-white font-Cuprum font-semibold text-2xl mt-3'>Michel Donald</h1>
                    <p className='text-sm font-medium text-textYellow text-center mt-1 font-Inter'>Programmer</p>

                </div>
                {/*************** Our tram cart number 3 end here**************************/}

                {/*************** Our tram cart number 4 start here**************************/}
                <div className='w-[170px]'>

                    <img className='mix-blend-luminosity hover:mix-blend-normal hover:duration-500 ease-in' src={image4} alt="" />

                    <h1 className='text-white font-Cuprum font-semibold text-2xl mt-3'>Kiara Montesinor</h1>
                    <p className='text-sm font-medium text-textYellow text-center mt-1 font-Inter'>Programmer</p>


                </div>
                {/*************** Our tram cart number 4 end here**************************/}

                {/*************** Our tram cart number 5 start here**************************/}
                <div className='w-[170px]'>

                    <img className='mix-blend-luminosity hover:mix-blend-normal hover:duration-500 ease-in' src={image5} alt="" />

                    <h1 className='text-white font-Cuprum font-semibold text-2xl mt-3'>Duglas Rovland</h1>
                    <p className='text-sm font-medium text-textYellow text-center mt-1 font-Inter'>Cyber analyst</p>


                </div>
                {/*************** Our tram cart number 5 end here**************************/}

                {/*************** Our tram cart number 6 start here**************************/}
                <div className='w-[170px]'>

                    <img className='mix-blend-luminosity hover:mix-blend-normal hover:duration-500 ease-in' src={image6} alt="" />

                    <h1 className='text-white font-Cuprum font-semibold text-2xl mt-3'>David Harrison</h1>
                    <p className='text-sm font-medium text-textYellow text-center mt-1 font-Inter'>Programmer</p>


                </div>
                {/*************** Our tram cart number 6 end here**************************/}

                {/*************** Our tram cart number 7 start here**************************/}
                <div className='w-[170px]'>

                    <img className='mix-blend-luminosity hover:mix-blend-normal hover:duration-500 ease-in' src={image7} alt="" />
                    <h1 className='text-white font-Cuprum font-semibold text-2xl mt-3'>Christina Jonson</h1>
                    <p className='text-sm font-medium text-textYellow text-center mt-1 font-Inter'>Ethical Hacker</p>


                </div>
                {/*************** Our tram cart number 7 end here**************************/}

                {/*************** Our tram cart number 8 start here**************************/}
                <div className='w-[170px] '>

                    <img className='mix-blend-luminosity hover:mix-blend-normal hover:duration-500 ease-in' src={image8} alt="" />
                    <h1 className='text-white font-Cuprum font-semibold text-2xl mt-3'>Kiara Montesino</h1>
                    <p className='text-sm font-medium text-textYellow text-center mt-1 font-Inter'>Programmer</p>



                </div>
                {/*************** Our tram cart number 8 end here**************************/}



            </div>

            <div className='mt-16 flex justify-center items-center'>
                <button className='bg-[#3657CD] text-white font-Cuprum text-base font-medium px-4 py-2 flex items-center justify-center gap-1 transition-all duration-300 transform hover:scale-105'>
                    <span>Join our team</span> <span> <img className='w-4 h-3' src={rightArrow} alt="" /></span>
                </button>
            </div>

        </div>
    )
}

export default OurTeamCard