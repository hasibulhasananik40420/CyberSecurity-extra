import React from 'react'
import BlogListDetails from './BlogListDetails'

const BlogList = () => {
    return (
        <div className='bg-bodyColor'>
            {/***************** Blog details section start here ***********************/}
            <div className='text-center pt-28 p-4'>
                <h1 className='lg:text-5xl text-2xl text-white font-Cuprum font-bold'>Blog List  </h1>
                <p className='text-[#F9C747] font-medium text-sm font-Inter leading-8'>Home / Blog list</p>
            </div>

            {/************************* blogs list  flex start here **********************/}
            <div>
                <BlogListDetails />

            </div>
            {/************************* blogs list flex end here **********************/}

        </div>
    )
}

export default BlogList