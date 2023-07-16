import React from 'react'
import styles from '../styles'

const Partner = () => {
  return (
    <div className={`${styles.paddingY} flex flex-col`}>
        <div className='justify-center flex flex-col items-center'>       
            <h1 className='md:text-[40px] sm:text-2xl font-bold text-main'>OUR PARTNERS IN USA</h1>
            <div className='flex p-20 gap-20'>
                <img src='https://www.hollywoodsmilecostarica.com/wp-content/uploads/2019/10/american-dental-association.png' className='w-[200px] h-[200px]' />
                <img src='https://www.hollywoodsmilecostarica.com/wp-content/uploads/2019/10/american-dental-association.png' className='w-[200px] h-[200px]' />
            </div>
            <h1 className='md:text-[40px] sm:text-2xl font-bold text-main'>OUR SOLUTION PARTNERS</h1>
        </div>
        
    </div>
  )
}

export default Partner