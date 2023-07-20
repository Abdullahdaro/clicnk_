import React, {useState, useEffect} from 'react'
import background from '../assets/background.png'
import main1 from '../assets/main1.png'
import styles from '../styles'
import Picture1 from '../assets/Picture1.png'
import Picture2 from '../assets/Picture2.png'
import Picture3 from '../assets/Picture3.png'
import Picture5 from '../assets/Picture5.png'
import Picture6 from '../assets/Picture6.png'

const main = () => {
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
<div className={`flex flex-col w-full items-center relative `}>
  <img className="absolute z-0 inset-0 w-full h-full object-cover opacity-40" src={background} alt="Background" />
  <img className={`absolute z-0 inset-0 w-full h-full object-cover ${sm ? 'opacity-70' : 'opacity-100'}`} src={main1} alt="Main1" />
  <div className={`z-10 flex pb-4 xs:pb-40 items-start justify-center ${sm ? 'pt-20' : 'pt-0' }`}>
    <div>
      <img src={Picture2} className={` ${sm ? 'w-[200px]' : 'w-[300px]'}  `}/>
    </div>
    <div>
      <img src={Picture1} className={` ${sm ? 'w-[200px]' : 'w-[300px]'}  `} />
    </div>
  </div>
  <div className='z-10 flex pt-4 xs:pt-40 pb-4 xs:pb-40 flex-col'>
    <div className='flex flex-col w-full z-10'>
      <div className={` ${sm ? 'justify-end items-center flex flex-col pt-40 py-20' : 'justify-start items-start' } pr-4 xs:pr-60  xs:items-center`}>
        <div className='z-10 pl-4 xs:pl-10'>
          <img src={Picture3} className='w-[100px]' />
        </div>
        <div>
          <img src={Picture6} className={` ${sm ? 'w-[200px]' : 'w-[450px]'}  `} />
        </div>
        <div>
          <img src={Picture5} className='w-[300px]' />
        </div>
      </div>
      <div className='z-10 xs:w-[300px] xs:h-[450px] hidden sm:flex bg-white rounded-[40px] py-4 xs:py-10 items-center flex flex-col shadow-xl xs:ml-8 mt-4 xs:mt-8 xs:ml-8'>
        <h1 className='text-2xl font-bold text-main mb-4 xs:mb-8'>Get A Free Quote</h1>
        <form className="flex flex-col">
          <div className='w-full mb-4 xs:mb-10'>
            <h2 className='text-main text-base font-semibold leading-[90.443%] tracking-tighter w-60 capitalize'>Full Name</h2>
            <input className='w-full border-none text-[9px] hover:bg-slate-100' type='text' required placeholder='Enter Your Full Name' />
            <div className='border mb-4 xs:mb-10'></div>
            <h2 className='text-main font-semibold leading-[90.443%] tracking-tighter capitalize'>Phone Number</h2>
            <input className='w-full border-none text-[10px] hover:bg-slate-100' type='text' required placeholder='Phone Number' />
            <div className='border mb-4 xs:mb-10'></div>
            <h2 className='text-main font-semibold leading-[90.443%] tracking-tighter capitalize '>Message</h2>
            <input className='w-full h-12 border-none text-[10px] hover:bg-slate-100' type='text' required placeholder='Your Message' />
            <div className='border my-2'></div>
          </div>
          <div className='flex mt-4 xs:mt-14 pl-4 xs:pl-11 items-center'>
            <button className='items-center bg-main rounded-[40px] px-8 py-2 text-white font-bold'>Submit Now</button>
          </div>
        </form>
      </div> 
    </div>
  </div>
</div>
  )
}

export default main