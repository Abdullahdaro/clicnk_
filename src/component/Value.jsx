import React from 'react'
import styles from '../styles'
import { useLanguage } from '../constant/LanguageContext'
import valueContent from './content/valueContent'

const Value = () => {
  const { activeLang } = useLanguage()

  return (
    <div className='flex items-center justify-center w-full'>
      <div className={`${styles.paddingY} xl:max-w-[1280px] w-full`}>
          <div class=" items-center justify-center transform font-semibold xs:text-3xl sm:text-3xl md:text-[50px] xl:text-[75px] flex leading-90 tracking-tighter capitalize text-main">
              {valueContent[activeLang].title}
          </div>
          <div class="flex flex-wrap justify-center p-10 gap-4 sm:mt-10 md:mt-20">
              <div class="grid sm:grid-cols-1 md:grid-cols-2 xs:gap-2 sm:gap-4 w-full">
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{valueContent[activeLang].first}</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{valueContent[activeLang].second}</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{valueContent[activeLang].third}</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{valueContent[activeLang].fourth}</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{valueContent[activeLang].fifth}</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{valueContent[activeLang].sixth}</li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{valueContent[activeLang].seventh} </li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{valueContent[activeLang].eighth} </li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{valueContent[activeLang].ninth} </li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{valueContent[activeLang].tenth} </li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{valueContent[activeLang].eleventh} </li>
                  <li class="rounded-lg py-2 px-10 bg-opacity-10 bg-[#DDAC68] xs:text-md sm:text-xl leading-90.443 tracking-tighter capitalize font-semibold">{valueContent[activeLang].twelfth}</li>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Value