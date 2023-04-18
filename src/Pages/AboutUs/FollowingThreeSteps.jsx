import React from 'react'
import choiseImage1 from '../../assets/about us/choise 1.svg'
import choiseImage2 from '../../assets/about us/choise 2.svg'
import choiseImage3 from '../../assets/about us/choise 3.svg'
const FollowingThreeSteps = () => {
    return (
        <div className='pb-12 max-w-container mx-auto'>

            {/***************** our following steps  section start here ***********************/}
            <div className='text-center pt-16 p-4'>
                <h1 className='lg:text-4xl text-2xl text-white font-Cuprum font-bold'>Become Totaly Secured by  </h1>
                <h1 className='lg:text-4xl text-2xl pt-1 text-white font-Cuprum font-bold'> Following 3 Steps </h1>
            </div>


            {/********************* Following steps card  start here **************************/}

            <div className='grid grid-cols-1 gap-y-8 justify-items-center md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8 max-w-contentContainer mx-auto pt-10 pb-4'>
                {/********************* Following steps card 1 start here **************************/}
                <div className='w-[330px] flex flex-col justify-center items-center gap-4 p-4'>
                    <img src={choiseImage1} alt="" />
                    <h1 className='text-2xl font-Cuprum font-bold text-white'>Choose Security Package</h1>
                    <p className='text-[#99A2AC] font-normal font-Inter text-center'>Nam libero tempore soluta nobis eligendi optio cumque minus quod maxime</p>
                    <p className='text-textYellow text-[12px] font-Inter uppercase cursor-pointer'>Step one</p>
                </div>


                {/********************* Following steps card 1 end here **************************/}

                {/********************* Following steps card 2 start here **************************/}
                <div className='w-[330px] flex flex-col justify-center items-center gap-4 p-4'>
                    <img src={choiseImage2} alt="" />
                    <h1 className='text-2xl font-Cuprum font-bold text-white'>Prepare for Security Test</h1>
                    <p className='text-[#99A2AC] font-normal font-Inter text-center'>Nam libero tempore soluta nobis eligendi optio cumque minus quod maxime</p>
                    <p className='text-textYellow text-[12px] font-Inter uppercase cursor-pointer'>Step Two</p>
                </div>


                {/********************* Following steps card 2 end here **************************/}

                {/********************* Following steps card 3 start here **************************/}
                <div className='w-[330px] flex flex-col justify-center items-center gap-4 p-4'>
                    <img src={choiseImage3} alt="" />
                    <h1 className='text-2xl font-Cuprum font-bold text-white'>Get the Result & Solutions</h1>
                    <p className='text-[#99A2AC] font-normal font-Inter text-center'>Nam libero tempore soluta nobis eligendi optio cumque minus quod maxime</p>
                    <p className='text-textYellow text-[12px] font-Inter uppercase cursor-pointer'>Step Three</p>
                </div>


                {/********************* Following steps card 3 end here **************************/}



            </div>

            {/********************* Following steps card  end here **************************/}


        </div>
    )
}

export default FollowingThreeSteps