import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import whatsapp from '../assets/whatsapp.png'


const Constant = () => {
  const [activeLang, setActiveLang] = useState("En"); // Set 'En' as the default active language

  const handleLangClick = (lang) => {
    setActiveLang(lang);
  };
  return (
    <div className='flex relative xl:max-w-[1280px] justify-between items-center'>
      <div className='fixed z-20 sm:top-10 sm:left-0 xs:top-0 xs:left-4'>
        <div className='bg-[#D8A768] xs:flex-col bg-opacity-40  xs:rounded-b-[50px] xs:rounded-t-none xs:gap-3 xs:px-0 xs:py-2 sm:py-0 sm:rounded-r-[50px] sm:rounded-l-none text-xl font-semibold flex md:flex-row'>
          <button
            className={`sm:px-4 xs:px-2 sm:py-1 ${
              activeLang === "Tr" ? "active:bg-main" : ""
            }`}
            onClick={() => handleLangClick("Tr")}
          >
            Tr
          </button>
          <button
            className={`sm:px-4 xs:px-2 sm:py-1 ${
              activeLang === "Ar" ? "active:bg-main" : ""
            }`}
            onClick={() => handleLangClick("Ar")}
          >
            Ar
          </button>
          <button
            className={`sm:px-4 xs:px-2 sm:py-1 ${
              activeLang === "En" ? "active:bg-main" : ""
            }`}
            onClick={() => handleLangClick("En")}
          >
            En
          </button>
        </div>
      </div>
      <div className='fixed z-20 sm:top-10 sm:right-0 xs:top-0 xs:right-4'>
        <div>
          <div className='bg-main text-white xs:flex-col md:flex-row flex xs:rounded-b-[50px] xs:rounded-t-none md:rounded-l-[50px] md:rounded-r-none text-xl xs:py-2xl px-2 xs:py-2 sm:pr-5'>
            <FontAwesomeIcon className='md:px-2 xs:py-2 sm:py-0' icon={faFacebook} />
            <FontAwesomeIcon className='md:px-2 xs:py-2 sm:py-0' icon={faInstagram} />
            <FontAwesomeIcon className='md:px-2 xs:py-2 sm:py-0' icon={faLinkedin} />
            <FontAwesomeIcon className='md:px-2 xs:py-2 sm:py-0' icon={faWhatsapp} />
            <FontAwesomeIcon className='md:px-2 xs:py-2 sm:py-0' icon={faYoutube} />
            <FontAwesomeIcon className='md:px-2 xs:py-2 sm:py-0'  icon={faEnvelope} />
          </div>
        </div>
      </div>
      <div className='fixed z-10 xs:bottom-6 sm:bottom-2 right-0'>
        <img src={whatsapp} className='w-[60px] h-[60px] sm:mr-10 xs:mr-4' />
      </div>
    </div>
  )
}

export default Constant