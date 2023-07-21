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


const Constant = () => {
  const [activeLang, setActiveLang] = useState("En"); // Set 'En' as the default active language

  const handleLangClick = (lang) => {
    setActiveLang(lang);
  };
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='fixed z-10 md:top-10 md:left-0 xs:left-4'>
        <div className='bg-[#D8A768] xs:flex-col bg-opacity-40 xs:rounded-b-[50px] xs:rounded-t-none md:rounded-r-[50px] text-xl font-semibold flex md:flex-row'>
          <button
            className={`px-4 pl-5 py-1 ${
              activeLang === "Tr" ? "active:bg-main" : ""
            }`}
            onClick={() => handleLangClick("Tr")}
          >
            Tr
          </button>
          <button
            className={`px-4 py-1 ${
              activeLang === "Ar" ? "active:bg-main" : ""
            }`}
            onClick={() => handleLangClick("Ar")}
          >
            Ar
          </button>
          <button
            className={`px-4 py-1 ${
              activeLang === "En" ? "active:bg-main" : ""
            }`}
            onClick={() => handleLangClick("En")}
          >
            En
          </button>
        </div>
      </div>
      <div className='fixed z-10 md:top-10 md:right-0 xs:top-0 xs:right-4'>
        <div>
          <div className='bg-main text-white xs:flex-col md:flex-row flex xs:rounded-b-[50px] xs:rounded-t-none md:rounded-l-[50px] md:rounded-r-none text-xl xs:py-2xl px-2 xs:py-2 md:pr-5'>
            <FontAwesomeIcon className='md:px-2 xs:py-2' icon={faFacebook} />
            <FontAwesomeIcon className='md:px-2 xs:py-2' icon={faInstagram} />
            <FontAwesomeIcon className='md:px-2 xs:py-2' icon={faLinkedin} />
            <FontAwesomeIcon className='md:px-2 xs:py-2' icon={faWhatsapp} />
            <FontAwesomeIcon className='md:px-2 xs:py-2' icon={faYoutube} />
            <FontAwesomeIcon className='md:px-2 xs:py-2' icon={faEnvelope} />
          </div>
        </div>
      </div>
      <div className='fixed z-10 bottom-0 right-0'>
        whatsapp
      </div>
    </div>
  )
}

export default Constant