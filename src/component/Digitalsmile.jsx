import React from 'react'
import machine from '../assets/machine.png'
import laptop from '../assets/laptop.png'
import smile1 from '../assets/smile1.png'
import smile2 from '../assets/smile2.png'
import smile3 from '../assets/smile3.png'
import styles from '../styles'

const Digitalsmile = () => {
  return (
    <div className='flex justify-center'>
        <div className={` ${styles.boxWidth} justify-center relative`}>
          <div className='flex z-10 items-center justify-start xs:px-8 sm:px-20 absolute sm:pt-0 xs:pt-2'>
            <h1 className='text-main xs:text-xl sm:text-4xl md:text-[60px] font-bold leading-20 flex flex-col sm:gap-10 '>Digital Smile <br className=''/> <span className='text-[#3C3C3B]'>Design</span></h1>
            <img src={laptop} className='w-1/2 md:pl-10' />
          </div>
          <div className='xs:flex xs:pb-2 sm:pb-0 justify-between xs:pl-8 sm:px-20 xs:pt-20 sm:pt-32'>
            <div className='flex flex-col xs:pt-14 sm:pt-20 items-start justify-center xs:gap-4 sm:gap-12 w-1/2'>
              <p className='font-semibold xs:text-[10px] sm:text-xl'><span className='text-main'>Digital Smile Design</span> starts with properly 
              captured photos. It allows a comprehensive workflow that 
              simulates the patient's treatment process.
              </p>

              <p className='font-semibold xs:text-[10px] sm:text-xl'><span className='text-main'>It begins</span> with scans of the mouth, which are carried out during the <span className='text-main'>first exam </span>and transferred to the computer with the photos of the face taken.
              </p>

              <p className='font-semibold xs:text-[10px] sm:text-xl'><span className='text-main'>After the rehearsal</span>, the most beautiful and appropriate design is chosen and the treatment begins. </p>
            </div>
          <div className='flex relative items-center'>
              <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#DDAC68] filter blur-3xl opacity-20"></div>
                  <img src={machine} className='sm:w-[700px] xs:w-[250px] z-10 relative' />
              </div>
            </div>  
          </div>
          <div className='flex justify-between xs:px-10 sm:px-40 bg-[#DDAC68] bg-opacity-20'> 
            <img src={smile3} className='h-1/4 w-1/4'/>
            <img src={smile1} className='h-1/4 w-1/4'/>
            <img src={smile2} alt="" className='h-1/4 w-1/4'/>
          </div>
        </div>
    </div>
  )
}

export default Digitalsmile