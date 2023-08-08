import React from 'react'
import iconteeth from '../assets/iconteeth.png'
import iconchild from '../assets/iconchild.png'
import icontooth from '../assets/icontooth.png'
import iconconnect from '../assets/iconconnect.png'
import iconmouth from '../assets/iconmouth.png'
import iconshine from '../assets/iconshine.png'
import iconscraw from '../assets/iconscraw.png'
import iconsiezer from '../assets/iconsiezer.png'
import { useLanguage } from '../constant/LanguageContext'
import specialist from './content/specialistContent'


const Specialist = () => {
    const { activeLang } = useLanguage();
    const specialistContent = specialist[activeLang];
  return (
    <div className='justify-center bg-bg1 sm:flex'>
    <div className={` xl:max-w-[1280px] w-full pt-10 relative`}>
        <div class="text-main items-center flex justify-center lg:text-[55px] leading-normal md:pb-10 ">
            <h1 className=' px-20 rounded-[40px] font-semibold bg-opacity-10'>{specialistContent.title}</h1>
        </div>
        <div className='flex justify-between xs:px-6 md:px-10'>
            <div className='md:pl-10 flex flex-col items-center justify-start'>
            <div className='flex relative pt-4 text-center'>
                    <span className='text-[#3C3C3B] sm:text-md font-semibold bg-opacity-10 rounded-xl'><img src={iconshine} className='  md:w-[85px] xs:w-[50px]' /></span>
                </div>
                <div className='text-center flex items-center justify-center'>
                    <h1 className='text-[#3C3C3B] xs:pt-2 md:pt-4 xs:text-[8px] xs:w-[75px] md:w-28 md:text-[22px] font-semibold'>{specialistContent.first} </h1>
                </div>
            </div>
            <div className='md:pl-10 pt-10 flex flex-col items-center justify-start'>
                <div className='flex relative pt-4 text-center'>
                    <span className='text-[#3C3C3B] sm:text-md font-semibold bg-opacity-10 rounded-xl'><img src={iconteeth} className='  md:w-[85px] xs:w-[50px]' /></span>
                </div>
                <div className='text-center flex items-center justify-center'>
                    <h1 className='text-[#3C3C3B] xs:pt-2 md:pt-4 xs:text-[8px] xs:w-[100px] md:w-40 md:text-[22px] font-semibold'>{specialistContent.second} </h1>
                </div>
            </div>
            <div className='md:pl-10 flex flex-col items-center justify-start'>
                <div className='flex relative pt-4 text-center'>
                    <span className='text-[#3C3C3B] sm:text-md font-semibold  bg-opacity-10 rounded-xl'><img src={iconscraw} className='  md:w-[85px] xs:w-[50px]' /></span>
                </div>
                <div className='text-center flex items-center justify-center'>
                    <h1 className='text-[#3C3C3B] xs:pt-2 md:pt-4 xs:text-[8px] md:text-[22px] md:w-28 font-semibold'>{specialistContent.third} </h1>
                </div>
            </div>
            <div className='md:pl-10 flex flex-col items-center justify-start pt-10'>
                <div className='flex relative pt-4 text-center'>
                    <span className='text-[#3C3C3B] sm:text-md font-semibold  bg-opacity-10 rounded-xl'><img src={iconconnect} className='  md:w-[85px] xs:w-[50px]' /></span>
                </div>
                <div className='text-center flex items-center justify-center'>
                    <h1 className='text-[#3C3C3B] xs:pt-2 md:pt-4 xs:text-[8px] md:text-[22px] font-semibold'>{specialistContent.fourth}</h1>
                </div>
            </div>
        </div>
        <div class="w-full -hidden absolute xs:top-[200px] sm:top-[175px] md:top-[350px]">
            <svg class="w-full h-auto" viewBox="-150 -000 2150 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-124 287.231C-106.915 280.731 85.5482 70.231 350.876 106.231C616.203 142.231 620.223 334.231 898.616 270.231C1177.01 206.231 1465.95 -82.769 1699.12 29.731C1885.65 119.731 1960.76 166.564 1975 178.731" stroke="#DDAC68" stroke-width="4" />
            </svg>
        </div>
        <div className='flex justify-between xs:px-4 md:px-10 relative md:pt-10 xs:pt-10 sm:pt-10'>
            <div className='md:pl-10 flex flex-col items-center justify-start'>
                <div className='flex xs:pt-0 md:pt-4'>
                    <span className='text-[#3C3C3B] sm:text-md font-semibold  bg-opacity-10 rounded-xl'><img src={icontooth} className=' md:w-[85px] xs:w-[50px]' /></span>
                </div>
                <div>
                    <h1 className='text-[#3C3C3B] xs:pt-2 md:pt-4 xs:text-[8px] md:text-[22px] md:w-[200px] font-semibold'>{specialistContent.fifth}</h1>
                </div>
            </div>
            <div className='md:pl-10 xs:pt-6 flex flex-col items-center justify-start md:pt-20'>
                <div className='flex relative pt-4 text-center'>
                    <span className='text-[#3C3C3B] sm:text-md font-semibold  bg-opacity-10 rounded-xl'><img src={iconmouth} className='  md:w-[85px] xs:w-[50px]' /></span>
                </div>
                <div className='text-center flex items-center justify-center'>
                    <h1 className='text-[#3C3C3B] xs:pt-2 md:pt-4 xs:text-[8px] md:text-[22px] font-semibold'>{specialistContent.sixth} </h1>
                </div>
            </div>
            <div className='md:pl-10 flex flex-col items-center justify-start'>
                <div className='flex relative pt-4 text-center'>
                    <span className='text-[#3C3C3B] sm:text-md font-semibold  bg-opacity-10 rounded-xl'><img src={iconsiezer} className='  md:w-[85px] xs:w-[50px]' /></span>
                </div>
                <div className='text-center flex items-center justify-center'>
                    <h1 className='text-[#3C3C3B] xs:pt-2 md:pt-4 xs:text-[8px] md:text-[22px] md:w-40 font-semibold'>{specialistContent.seventh} </h1>
                </div>
            </div>
            <div className='md:pl-10 flex flex-col items-center justify-start pt-6'>
                <div className='flex relative pt-4 text-center'>
                    <span className='text-[#3C3C3B] sm:text-md font-semibold  bg-opacity-10 rounded-xl'><img src={iconchild} className='md:w-[85px] xs:w-[40px]' /></span>
                </div>
                <div className='text-center flex items-center justify-center'>
                    <h1 className='text-[#3C3C3B] xs:pt-2 md:pt-4 xs:text-[8px] md:text-[22px] md:w-40 font-semibold'>{specialistContent.eighth}</h1>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Specialist