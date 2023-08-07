import React from 'react'
import Picture10 from '../assets/Picture10.png'
import ad2 from '../assets/ad2.png'
import styles from '../styles'
import { useLanguage } from '../constant/LanguageContext'
import advertisementContent from './content/advertisementContent'

const advertisement = [
  {
      id: 1,
      title: 'Zirconium Crowns',
      description: 'Package',
      image: Picture10,
      firstlink: 'Zirconium crowns up to 24 teeth',
      secondlink: 'Panoramic x-ray',
      thirdlink: 'Digital smile design',
      fourthlink: 'Non surgical procedure such as tooth extraction, filling, root canal, gingivectomy treatments',
      fifthlink: 'Flight Ticket',
      sixthlink: 'Translation support',
      seventhlink: 'Home medications',
      eighthlink: ' Transportation with private car and translator, 2 ways from and to airport, from hotel to clinic and vice versa',
      ninethlink: ' 5-Star hotel accommodation 7 nights (8 Days) including breakfast with 1 companion',
      tenthlink: 'City tour with private car',
      eleventhlink: 'Follow-up with doctor for 2 years after treatment',
      twelvethlink: '5 years of warranty',
      discount: '30%',
  },
  {
      id: 2,
      title: 'E-Max Laminate Veneers or Crowns',
      description: 'Package',
      image: ad2,
      firstlink: 'E-Max Laminate veneers or crowns up to 24 teeth',
      secondlink: 'Panoramic x-ray',
      thirdlink: 'Digital smile design',
      fourthlink: 'Non surgical procedure such as tooth extraction, filling, root canal, gingivectomy treatments',
      fifthlink: 'Flight Ticket',
      sixthlink: 'Translation support',
      seventhlink: 'Home medications',
      eighthlink: ' Transportation with private car and translator, 2 ways from and to airport, from hotel to clinic and vice versa',
      ninethlink: ' 5-Star hotel accommodation 7 nights (8 Days) including breakfast with 1 companion',
      tenthlink: 'City tour with private car',
      eleventhlink: 'Follow-up with doctor for 2 years After treatment',
      twelvethlink: '5 years of warranty',
      discount: '35%',
  },
]

const id1 = advertisement[0]
const id2 = advertisement[1]

const Advertisement = () => {
  const { activeLang } = useLanguage()

  const firstAd = advertisementContent[activeLang] && advertisementContent[activeLang][0];
  const secondAd = advertisementContent[activeLang] && advertisementContent[activeLang][1];
  
  return (
    <div className={`items-center flex justify-center `}>
      <div class={`flex flex-wrap justify-center sm:max-w-[1280px] items-start md:w-full md:px-40 md:p-10 xs:p-2 gap-4 `}>
          <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div class="rounded-lg py-2 px-10 xs:px-0">
                <div class="flex flex-col items-start bg-[#D9D9D9] bg-opacity-20 rounded-[40px]">
                  <img src={firstAd.image} alt="Image Description" class="w-full" />
                  <div className='flex items-start px-6 flex-col'>
                    <h3 class="md:text-4xl xs:text-3xl sm:text-4xl xs:pl-4 md:pl-8 text-main font-bold my-2">{firstAd.title} <span className='text-bold text-[#3C3C3B] md:text-4xl xs:text-4xl sm:text-3xl '>{firstAd.description}</span></h3>
                    <div className='grid gap-y-2 py-6 w-full'>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{firstAd.firstlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{firstAd.secondlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{firstAd.thirdlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{firstAd.fourthlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{firstAd.fifthlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{firstAd.sixthlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{firstAd.seventhlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px]  border-main'>{firstAd.eighthlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{firstAd.ninethlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{firstAd.tenthlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{firstAd.eleventhlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main mb-4'>{firstAd.twelvethlink}</li>
                    </div>
                  </div>
                  <div className='items-end w-full flex justify-end'>
                    <h1 className='px-6 py-2 bg-[#393939] rounded-br-[40px] rounded-tl-[40px] text-white font-bold text-3xl '>{firstAd.save} {firstAd.discount}</h1>
                  </div>
                </div>
              </div>
              <div class="rounded-lg py-2 px-10 xs:px-0">
                <div class="flex flex-col relative items-start bg-[#DDAC68] bg-opacity-10 rounded-[40px]">
                  <img src={secondAd.image} alt="Image Description" class="w-full" />
                  <div className='flex items-start px-6 flex-col'>
                    <h3 class="md:text-3xl xs:text-3xl sm:text-4xl xs:pl-4 md:pl-8 text-main font-bold my-2">{secondAd.title} <span className='text-bold text-[#3C3C3B] md:text-4xl xs:text-4xl sm:text-3xl '>{secondAd.description}</span></h3>
                    <div className='grid gap-y-2 py-6 w-full'>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{secondAd.firstlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{secondAd.secondlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{secondAd.thirdlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{secondAd.fourthlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{secondAd.fifthlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{secondAd.sixthlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{secondAd.seventhlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{secondAd.eighthlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{secondAd.ninethlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{secondAd.tenthlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{secondAd.eleventhlink}</li>
                      <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main mb-4'>{secondAd.twelvethlink}</li>
                    </div>
                  </div>
                  <div className='items-end w-full flex justify-end'>
                    <h1 className='px-6 py-2 bg-main rounded-br-[40px] rounded-tl-[40px] text-white font-bold text-3xl '>{secondAd.save} {id2.discount}</h1>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Advertisement