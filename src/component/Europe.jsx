import React from 'react'
import styles from '../styles'
import reward1 from '../assets/reward1.png'
import reward from '../assets/reward.png'

const Europe = () => {
  return (
    <div className={`${styles.paddingY} bg-[#DDAC680F]`}>
        <div className='text-[#3C3C3B] font-bold text-4xl pl-20'>
            Qualident Is the Award-Winning <br /> Clinic Of <span className='text-[#DDAC68]'>Turkey And Europe</span>
        </div>
        <div className='flex'>
            <div className=''>
                <div className='flex items-center'>
                    <img src={reward1} className='w-40' />
                    <span className='font-bold text-2xl pl-10'>Europe Top Dental <br /> Practices Award</span>
                </div>
                <div className='flex items-center'>
                    <img src={reward} className='w-40' />
                    <span className='font-bold text-2xl pl-10'> Turkey Best MEdical <br /> Team Award</span>
                </div>
            </div>
            <div>
                Photos
            </div>     
        </div>
    </div>
  )
}

export default Europe