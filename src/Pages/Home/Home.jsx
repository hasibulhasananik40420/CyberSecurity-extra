import React from 'react'
import Header1 from '../../Components/HomeHeaders/Header1'
import Features from '../../Components/Features/Features'
import FeatureHero from '../../Components/Features/FeatureHero'
import Services from '../../Components/Services/Services'
import CyberDefense from '../../Components/CyberDefense/CyberDefense'
import SimplestPricing from '../../Components/SimplestPricing/SimplestPricing'
import Review from '../AboutUs/Review'
import ClipPath from '../../Components/ClipPath/ClipPath'
import CommonQuestion from '../../Components/CommonQuestion/CommonQuestion'
import ScrollToTop from '../../hooks/ScrollToTop'
import OurBlogCard from '../AboutUs/OurBlogCard'


const Home = () => {
    return (
        <div>
            <ScrollToTop/>
            <Header1 />
            <Features />
            <FeatureHero />
            <Services />
            <ClipPath />
            <CyberDefense />
            <SimplestPricing />
            <Review />
            <CommonQuestion />

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
        </div>
    )
}

export default Home