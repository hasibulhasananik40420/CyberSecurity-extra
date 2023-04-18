import React from 'react'

import OurBlogCard from './OurBlogCard'
import Review from './Review'
import ClipPath from '../../Components/ClipPath/ClipPath'
import FollowingThreeSteps from './FollowingThreeSteps'
const FollowingSteps = () => {
    return (
        <div className='bg-bodyColor'>
            {/***************** our following steps  section start here ***********************/}
            {/* <div className='text-center pt-16 p-4'>
                <h1 className='lg:text-4xl text-2xl text-white font-Cuprum font-bold'>Become Totaly Secured by  </h1>
                <h1 className='lg:text-4xl text-2xl pt-1 text-white font-Cuprum font-bold'> Following 3 Steps </h1>
            </div> */}


            {/********************* Following steps card  start here **************************/}

              <FollowingThreeSteps/>

            {/********************* Following steps card  end here **************************/}




            {/********************* Clip path section start  here **************************/}
             <div>
                <ClipPath/>
             </div>
          

            {/********************* Clip path section end  here **************************/}



            {/********************* Review section start  here **************************/}

            <Review />


            {/********************* Review  section end  here **************************/}




            {/********************* blog  section start  here **************************/}


            <div>
                <div className='text-center pt-16 p-4'>
                    <h1 className='lg:text-4xl text-2xl text-white font-Cuprum font-bold'>Get the Latest Articles and   </h1>
                    <h1 className='lg:text-4xl text-2xl pt-1 text-white font-Cuprum font-bold'> News From Our Blog </h1>
                </div>

                {/********************* blog card section start  here **************************/}
                <div className='pt-8'>
                    <OurBlogCard />
                </div>

                {/********************* blog card section end  here **************************/}
            </div>


            {/********************* blog  section end  here **************************/}










            {/***************** our following steps  section end here ***********************/}
        </div>
    )
}

export default FollowingSteps