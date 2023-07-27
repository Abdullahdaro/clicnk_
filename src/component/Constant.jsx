import React, {useState, useEffect} from 'react'
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
  const [activeLang, setActiveLang] = useState('En');

  const handleLangClick = (lang) => {
    setActiveLang((prevLang) => (prevLang === lang ? 'En' : lang));
    // Additional code for language selection logic, if needed
  };

  return (
    <div className='flex relative xl:max-w-[1280px] justify-between items-center'>
      <div className='fixed z-20 md:top-10 md:left-0 xs:top-0 xs:left-4'>
      <div className='bg-[#D8A768] xs:flex-col bg-opacity-40 xs:rounded-b-[50px] xs:rounded-t-none xs:gap-3 xs:px-0 xs:py-2 md:py-0 md:rounded-r-[50px] md:rounded-l-none text-xl font-semibold flex md:flex-row'>
      <button
        className={`md:px-4 xs:px-2 md:py-1 ${activeLang === 'Tr' ? 'active:bg-main' : ''}`}
        onClick={() => handleLangClick('Tr')}
      >
        Tr
      </button>
      <button
        className={`md:px-4 xs:px-2 md:py-1 ${activeLang === 'Ar' ? 'active:bg-main' : ''}`}
        onClick={() => handleLangClick('Ar')}
      >
        Ar
      </button>
      <button
        className={`md:px-4 xs:px-2 md:py-1 ${activeLang === 'En' ? 'active:bg-main' : ''}`}
        onClick={() => handleLangClick('En')}
      >
        En
      </button>
    </div>
      </div>
      <div className='fixed z-20 md:top-10 md:right-0 xs:top-0 xs:right-4'>
        <div>
          <div className='bg-main text-white xs:flex-col md:flex-row flex xs:rounded-b-[50px] xs:rounded-t-none md:rounded-l-[50px] md:rounded-r-none text-xl xs:py-2xl px-2 xs:py-2 md:pr-5'>
            <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0' icon={faFacebook} />
            <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0' icon={faInstagram} />
            <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0' icon={faLinkedin} />
            <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0' icon={faWhatsapp} />
            <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0' icon={faYoutube} />
            <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0'  icon={faEnvelope} />
          </div>
        </div>
      </div>
      <div className='fixed z-10 xs:bottom-6 md:bottom-2 right-0'>
        <img src={whatsapp} className='w-[60px] h-[60px] md:mr-10 xs:mr-4' />
      </div>
    </div>
  )
}

export default Constant