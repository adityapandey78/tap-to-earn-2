import React from 'react'
import Cardpg3 from '../components/CardPg3'

//importing the assests
import BlockChainLogo from '../assets/Our Comprehensive_icons/Blockchain Integration.webp'
import TaptoEarnGameDev from '../assets/Our Comprehensive_icons/Tap-to-Earn Game Development.webp'
import WhiteLabelTaptoEarn from '../assets/Our Comprehensive_icons/Earn Games.webp'
import GameMonetizationModels from '../assets/Our Comprehensive_icons/Game Monetization Models.webp'
import GameDesign from '../assets/Our Comprehensive_icons/Game Design.webp'
import MarketingandCommunityBuilding from '../assets/Our Comprehensive_icons/Marketing and Community Building.webp'
import TaptoEarnGameCloning from '../assets/Our Comprehensive_icons/Tap-to-Earn Game Cloning.webp' 

// All data stored in an array of objects

const data=[
    {
    iconSrc:TaptoEarnGameDev,
    heading:"Custom Tap-to-Earn Game Development",
    content:"We specialize in building custom Tap-to-Earn games with innovative mechanics and crypto rewards, ensuring immersive gameplay that attracts players and drives long-term engagement.",
    },
    {
    iconSrc:BlockChainLogo,
    heading:"Blockchain Integration",
    content:"Our Tap-to-Earn crypto games integrate blockchain technology for secure, transparent transactions, allowing players to earn and trade rewards in the form of cryptocurrency.",
    },
    {
    iconSrc:WhiteLabelTaptoEarn,
    heading:"White-Label Tap-to-Earn Games",
    content:"As a leading Tap-to-Earn game development company, we provide white-label solutions to customize and launch games quickly, empowering brands to stand out with unique identities.",
    },
    {
    iconSrc:GameMonetizationModels,
    heading:"Game Monetization Models",
    content:"We incorporate effective T2E game development monetization models, including in-game ads, microtransactions, and staking, maximizing revenue while keeping gameplay enjoyable for users.",
    },
    {
    iconSrc: GameDesign,
    heading:"Game Design",
    content:"Our Tap-to-Earn game development services include creating appealing, user-friendly designs and rich features like boosters, rewards, and daily challenges to engage players consistently.",
    },
    {
    iconSrc:MarketingandCommunityBuilding,
    heading:"Marketing and Community Building",
    content:"We assist in building strong communities around your T2E game development, leveraging social media, influencer partnerships, and referral programs to boost visibility and engagement.",
    },
    {
    iconSrc:TaptoEarnGameCloning,
    heading:"Tap-to-Earn Game Cloning",
    content:"For quick market entry, we offer Tap-to-Earn game clones based on popular games, customized to meet your branding and business objectives, ensuring rapid launch and success.",
    },

]


const Page3 = () => {
  return (
    <div id='page3' className='flex flex-col items-start px-14 py-14 relative '>
        <div id='header-page-3' className='inline-flex flex-col justify-center gap-3.5 px-20 py-12 items-center relative'>
            <h1 className='relative w-[260] -mt-1 font-nunitoBold text-white text-5xl text-center leading-normal tracking-[0] '>Our Comprehensive Tap-to-Earn Game Development Services</h1>

            <p className='relative w-[70vw] font-nunitoReg font-bold text-gray-400 text-xl text-center tracking-[0] leading-9'>At Metaprolane, we offer full-fledged Tap-to-Earn Game Development Services that enable businesses to create engaging T2E crypto games with unique features.</p>
        </div>

        <div id='grid-layout' className='grid grid-cols-2 grid-rows-4 items-stretch place-content-stretch'>
           {data.map((item,index)=>(
               <Cardpg3 
                        key={index} 
                        data={item}
                        className={`${index % 2 === 0 ? 'border-r-2 border-b-2 border-dashed  border-[#eaa2f3]' : ' border-b-2 border-dashed border-[#eaa2f3]'}
                        ${index === data.length-1  ? 'col-span-2 !border-r-0 ' : ''}`}/>
           ))}
        </div>
    </div>
  )
}

export default Page3