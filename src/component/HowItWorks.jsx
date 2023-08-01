import React, {useState, useEffect} from 'react'
import icon from '../assets/icon.png'
import icon1 from '../assets/icon1.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';


const HowItWorks = () => {
    const [sm, setSm] = useState(window.innerWidth <= 768);

    useEffect(() => {
      function handleResize() {
        setSm(window.innerWidth <= 768);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    
  return (
    <div className='justify-center bg-bg1 xs:hidden sm:flex'>
        <div className={` xl:max-w-[1280px] w-full pt-10 pb-6`}>
            <div class="text-main items-center flex justify-center lg:text-[55px] leading-normal pb-10">
                <h1 className='bg-[#DDAC68] px-20 rounded-[40px] font-semibold bg-opacity-10'>How it works</h1>
            </div>
            <div className='flex justify-between px-10 pt-4'>
                <div className='pl-10'>
                    <div>
                        <h1 className='text-[#3C3C3B] pt-8 xs:text-sm md:text-[22px] font-semibold'>Submit a reguest</h1>
                    </div>
                    <div className='flex relative pt-4'>
                        <span className='sm:px-4 text-[35px] xs:px-2 font-bold text-[#DDAC68] bg-[#DDAC68] bg-opacity-20 sm:rounded-xl'>1</span>
                        <span className='text-[#3C3C3B] absolute sm:text-md font-semibold bg-[#DDAC68] bg-opacity-10 rounded-xl'><img src={icon} className='p-2 pl-10 ml-5 w-[85px] text-[35px]' /></span>
                    </div>
                </div>
                <div className='pl-20'>
                    <div className='pt-5'>
                        <h1 className='text-[#3C3C3B] xs:text-sm sm:text-md md:text-[22px] flex flex-warp w-[400px] font-semibold'>Receive a treatment plan within 24 Hours</h1>
                    </div>
                    <div className='flex relative pt-4'>
                        <span className='px-4 text-[35px] font-bold text-[#DDAC68] bg-[#DDAC68] bg-opacity-20 rounded-xl'>3</span>
                        <span className=' absolute font-semibold bg-[#DDAC68] bg-opacity-10 sm:rounded-xl'><img src={icon2} className='sm:p-2 sm:pl-10 sm:ml-5 xs:ml-8 sm:w-[85px] xs:w-[30px]' /></span>
                    </div>
                </div>
                <div className='pr-20 '>
                    <div>
                        <h1 className='text-[#3C3C3B] xs:text-sm sm:text-md md:text-[22px] font-semibold'>Get treated and fly back</h1>
                    </div>
                    <div className='flex relative pt-4'>
                        <span className='px-4 text-[35px] font-bold text-[#DDAC68] bg-[#DDAC68] bg-opacity-20 rounded-xl'>5</span>
                        <span className='text-[#3C3C3B] absolute sm:text-md md:text-[22px] font-semibold bg-[#DDAC68] bg-opacity-10 rounded-xl'><img src={icon4} className='p-2 pl-10 ml-5 w-[85px] text-[35px]' /></span>
                    </div>
                </div>
            </div>
            <div class="w-full overflow-hidden">
                <svg class="w-full h-auto" viewBox="-150 -000 2150 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-124 287.231C-106.915 280.731 85.5482 70.231 350.876 106.231C616.203 142.231 620.223 334.231 898.616 270.231C1177.01 206.231 1465.95 -82.769 1699.12 29.731C1885.65 119.731 1960.76 166.564 1975 178.731" stroke="#DDAC68" stroke-width="4" />
                </svg>
            </div>
            <div className='flex justify-between pl-40 pt-10'>
                <div>
                    <div className='flex relative'>
                        <span className='px-4 text-[35px] font-bold text-[#DDAC68] bg-[#DDAC68] bg-opacity-20 rounded-xl'>2</span>
                        <span className='text-[#3C3C3B] absolute sm:text-md md:text-[22px] font-semibold bg-[#DDAC68] bg-opacity-10 rounded-xl'><img src={icon1} className='p-2 pl-10 ml-5 w-[85px] text-[35px]' /></span>
                    </div>
                    <div>
                        <h1 className='text-[#3C3C3B] pt-4 sm:text-md md:text-[22px] w-[300px] font-semibold'>Qualident medical consultant will be in contact with you</h1>
                    </div>
                </div>
                <div>
                <div className='flex relative'>
                        <span className='px-4 text-[35px] font-bold text-[#DDAC68] bg-[#DDAC68] bg-opacity-20 rounded-xl'>4</span>
                        <span className='text-[#3C3C3B] absolute sm:text-md md:text-[22px] font-semibold bg-[#DDAC68] bg-opacity-10 rounded-xl'><img src={icon3} className='p-2 py-3 pl-10 ml-5 w-[85px] text-[35px]' /></span>
                    </div>
                    <div className=''>
                        <h1 className='text-[#3C3C3B] pt-4 sm:text-md md:text-[22px] flex flex-warp  w-[300px] font-semibold'>Arranging your medical trip</h1>
                    </div>
                </div>
                <div>
                <div className='flex relative'>
                        <span className='px-4 text-[35px] font-bold text-[#DDAC68] bg-[#DDAC68] bg-opacity-20 rounded-xl'>6</span>
                        <span className='text-[#3C3C3B] absolute sm:text-md md:text-[22px] font-semibold bg-[#DDAC68] bg-opacity-10 rounded-xl'><img src={icon5} className='p-2 pl-10 ml-5 w-[85px] text-[35px]' /></span>
                    </div>
                    <div>
                        <h1 className='text-[#3C3C3B] pt-4 sm:text-md md:text-[22px] w-[300px] font-semibold'>Staying in touch with you after treatment</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks