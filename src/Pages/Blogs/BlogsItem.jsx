import React from 'react'
import BlogsItemCard from './BlogsItemCard'

const BlogsItem = () => {
    return (

        <div className='bg-bodyColor '>

            {/* our blogs item section start here */}
            <div className='text-center pt-28'>
                <h1 className='text-6xl text-white font-Cuprum font-bold'>Blog Grid</h1>
                <p className='text-[#F9C747] font-medium text-sm font-Inter leading-8'>Home / Blog list</p>
            </div>

            {/*Blog items  Card  here*/}
            <div className='pt-12 pb-12 '>
                <BlogsItemCard />


            </div>

        </div>
    )
}

export default BlogsItem