import React from 'react'
import styles from '../styles'
import reward1 from '../assets/reward1.png'
import reward from '../assets/reward.png'

import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic7 from '../assets/pic7.png'  
import { useLanguage } from '../constant/LanguageContext'
import europeContent from './content/europeContent'


const Europe = () => {
    const { activeLang } = useLanguage();
    const content = europeContent[activeLang]
  return (
    <div className={`${styles.paddingY} flex items-center flex-col bg-[#DDAC680F]`}>
        <div className='xl:max-w-[1280px] xs:flex-col xs:items-center xs:justify-center'>
            <div className='text-[#3C3C3B] font-bold xs:text-xl sm:text-4xl xs:pl-10 md:pl-20 xs:justify-center xs:flex-col'>
                {content.title} <span className='text-[#DDAC68]'>{content.first}</span>
            </div>
            <div className='flex sm:pl-10 xs:pl-0 xs:flex-col sm:flex-row xs:pt-0 sm:pt-10 '>
                <div className='flex xs:flex-row sm:flex-col sm:w-[800px] xs:w-full xs:items-center xs:justify-center'>
                    <div className='flex xs:flex-col sm:flex-row relative py-2 items-center'>
                        <div className="relative w-40 h-40">
                            <div className="absolute inset-0 rounded-full bg-bg filter blur-lg"></div>
                            <img src={reward1} className='w-40 z-10 relative' style={{ zIndex: 10 }} />
                        </div>
                        <span className='font-bold xs:text-md md:text-2xl xs:pl-8 md:pl-10'>    {content.second}<br />     {content.third}</span>
                    </div>
                    <div className='flex xs:flex-col sm:flex-row relative py-2 items-center'>
                        <div className="relative w-40 h-40">
                            <div className="absolute inset-0 rounded-full bg-bg filter blur-lg"></div>
                            <img src={reward} className='w-40 z-10 relative' style={{ zIndex: 10 }} />
                        </div>
                            <span className='font-bold xs:text-md md:text-2xl xs:pl-6 md:pl-10'>     {content.fourth} <br />   {content.fifth}</span>
                    </div>   
                    <a href={content.wpl} className='mt-5 flex xs:ml-20 xs:hidden md:flex'>
                        <img src={content.wp} className='w-60 h-20 hover:scale-125' />
                    </a>
                </div>
                <div className='sm:items-start xs:items-center pl-10 gap-2 max-w-[800px] flex flex-wrap'>
                    <img src={pic1} className='sm:w-[200px] sm:h-[250px] xs:w-[150px] xs:h-[150px] rounded-md' />
                    <img src={pic2} className='sm:w-[200px] sm:h-[250px] xs:w-[150px] xs:h-[150px] rounded-md ' />
                    <img src={pic3} className='sm:w-[200px] sm:h-[250px] xs:w-[150px] xs:h-[150px] rounded-md' />
                    <img src={pic4} className='sm:w-[200px] sm:h-[200px] xs:w-[150px] xs:h-[150px] rounded-md ' />
                    <img src={pic5} className='sm:w-[200px] sm:h-[200px] xs:w-[150px] xs:h-[150px] rounded-md ' />
                    <img src={pic7} className='sm:w-[200px] sm:h-[200px] xs:w-[150px] xs:h-[150px] rounded-md ' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Europe