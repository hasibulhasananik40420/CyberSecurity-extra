import React from 'react'
import Header3 from '../../Components/HomeHeaders/Header3'
import Trusted from '../../Components/HomeHeaders/HeaderBottoms/Trusted'
import Services from '../../Components/Services/Services'
import CyberDefense from '../../Components/CyberDefense/CyberDefense'
import ExpertTeam from '../AboutUs/ExpertTeam'
import FeatureHero from '../../Components/Features/FeatureHero'
import ClipPath from '../../Components/ClipPath/ClipPath'
import Review from '../AboutUs/Review'
import CommonQuestion from '../../Components/CommonQuestion/CommonQuestion'
import OurBlogCard from '../AboutUs/OurBlogCard'
import ScrollToTop from '../../hooks/ScrollToTop'

function Home3() {
    return (
        <div className='text-white'>
             <ScrollToTop/>
            <Header3/>
            <Trusted/>
            <Services/>
            <FeatureHero />
            <ExpertTeam />
            <CyberDefense/>
            <ClipPath/>
            <Review/>
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
            <CommonQuestion/>

          
            
        </div>
    )
}

export default Home3