import React from 'react'
import styles from '../styles'
import reward1 from '../assets/reward1.png'
import reward from '../assets/reward.png'

const Europe = () => {
  return (
    <div className={`${styles.paddingY} flex items-center flex-col bg-[#DDAC680F]`}>
        <div>
            <div className='text-[#3C3C3B] font-bold text-4xl pl-20'>
                Qualident Is the Award-Winning <br /> Clinic Of <span className='text-[#DDAC68]'>Turkey And Europe</span>
            </div>
            <div className='flex'>
                <div className='flex flex-col'>
                    <div className='flex relative py-2 items-center'>
                        <div className="relative w-40 h-40">
                            <div className="absolute inset-0 rounded-full bg-bg filter blur-lg"></div>
                            <img src={reward1} className='w-40 z-10 relative' style={{ zIndex: 10 }} />
                        </div>
                        <span className='font-bold text-2xl pl-10'>Europe Top Dental <br /> Practices Award</span>
                    </div>
                    <div className='flex relative py-2 items-center'>
                        <div className="relative w-40 h-40">
                            <div className="absolute inset-0 rounded-full bg-bg filter blur-lg"></div>
                            <img src={reward1} className='w-40 z-10 relative' style={{ zIndex: 10 }} />
                        </div>
                            <span className='font-bold text-2xl pl-10'> Turkey Best MEdical <br /> Team Award</span>
                    </div>    
                </div>
                <div className='items-center'>
                photos
                </div>

            </div>
        </div>
    </div>
  )
}

export default Europe