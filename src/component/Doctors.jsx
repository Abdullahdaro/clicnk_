import React from 'react'
import styles from '../styles'

const Doctors = () => {
  return (
    <div className={`${styles.paddingY}`}>
        <div className='items-center flex justify-center'>
           <span className='md:text-4xl sm:text-2xl bg-[#DDAC681A] rounded-[40px] px-10 py-4'>Our Specialist Doctors</span> 
        </div>
        <div>
            <div className='flex flex-wrap justify-center p-10 gap-4 sm:mt-10 md:mt-20'>
                Writings
            </div>
            <div>
                pic
            </div>
        </div>
    </div>
  )
}

export default Doctors