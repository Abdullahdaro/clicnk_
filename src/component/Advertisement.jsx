import React from 'react'
import Picture10 from '../assets/Picture10.png'

const advertisement = [
  {
      id: 1,
      title: 'Zirconium Crowns',
      description: 'Package',
      image: Picture10,
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
      eleventhlink: 'Follow-up with doctor for 1 year after treatment',
      twelvethlink: '15 years of warranty',
      discount: '30%',
  },
  {
      id: 2,
      title: 'E-Max Laminate Veneers or Crowns',
      description: 'Package',
      image: Picture10,
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
      eleventhlink: 'Follow-up with doctor for 1 year after treatment',
      twelvethlink: '15 years of warranty',
      discount: '35%',
  },
]

const id1 = advertisement[0]
const id2 = advertisement[1]

const Advertisement = () => {

  return (
    <div class="flex flex-wrap justify-center md:p-10 xs:p-2 gap-4 sm:mt-10 md:mt-20">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div class="rounded-lg py-2 px-10 xs:px-0">
              <div class="flex flex-col items-start bg-[#D9D9D9] bg-opacity-20 rounded-[40px]">
                <img src={id1.image} alt="Image Description" class="w-full" />
                <div className='flex items-start px-6 flex-col'>
                  <h3 class="md:text-5xl xs:text-3xl sm:text-4xl xs:pl-4 md:pl-8 text-main font-bold my-2">{id1.title} <span className='text-bold text-[#3C3C3B] md:text-6xl xs:text-4xl sm:text-3xl '>Package</span></h3>
                  <div className='grid gap-y-2 py-6 w-full'>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id1.firstlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id1.secondlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id1.thirdlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id1.fourthlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id1.fifthlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id1.sixthlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id1.seventhlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id1.eighthlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id1.ninethlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id1.tenthlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id1.eleventhlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main mb-4'>{id1.twelvethlink}</li>
                  </div>
                </div>
                <div className='items-end w-full flex justify-end'>
                  <h1 className='px-6 py-2 bg-[#393939] rounded-br-[40px] rounded-tl-[40px] text-white font-bold text-3xl '>Save {id1.discount}</h1>
                </div>
              </div>
            </div>
            <div class="rounded-lg py-2 px-10 xs:px-0">
              <div class="flex flex-col relative items-start bg-[#DDAC68] bg-opacity-10 rounded-[40px]">
                <img src={id2.image} alt="Image Description" class="w-full" />
                <div className='flex items-start px-6 flex-col'>
                  <h3 class="md:text-5xl xs:text-3xl sm:text-4xl xs:pl-4 md:pl-8 text-main font-bold my-2">{id2.title} <span className='text-bold text-[#3C3C3B] md:text-6xl xs:text-4xl sm:text-3xl '>Package</span></h3>
                  <div className='grid gap-y-2 py-6 w-full'>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id2.firstlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id2.secondlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id2.thirdlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id2.fourthlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id2.fifthlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id2.sixthlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id2.seventhlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id2.eighthlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id2.ninethlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id2.tenthlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main'>{id2.eleventhlink}</li>
                    <li className='border rounded-sm font-semibold p-1 xs:text-[14px] sm:text-[16px] border-main mb-4'>{id2.twelvethlink}</li>
                  </div>
                </div>
                <div className='items-end w-full flex justify-end'>
                  <h1 className='px-6 py-2 bg-main rounded-br-[40px] rounded-tl-[40px] text-white font-bold text-3xl '>Save {id2.discount}</h1>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Advertisement