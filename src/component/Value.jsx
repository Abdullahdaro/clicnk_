import React from 'react'
import styles from '../styles'

const Value = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className={`${styles.paddingY} xl:max-w-[1280px] w-full`}>
          <div class=" items-center justify-center transform font-semibold xs:text-3xl sm:text-3xl md:text-[50px] xl:text-[75px] flex leading-90 tracking-tighter capitalize text-main">
              Value Added Benefits
          </div>
          <div class="flex flex-wrap justify-center p-10 gap-4 sm:mt-10 md:mt-20">
              <div class="grid sm:grid-cols-1 md:grid-cols-2 xs:gap-2 sm:gap-4 w-full">
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">Priority Appointments</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">Transportation</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">Accommodation</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">Teleconsultation</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">24/7 Patient Support</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">Digital smile design</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">Travel Insurance</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">Translation Support</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">City Tour</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">Home Medications</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">Cancel Anytime with full Refund</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">Follow-up after treatment</li>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Value