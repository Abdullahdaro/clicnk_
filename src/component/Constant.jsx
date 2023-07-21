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
      <div className='fixed z-10 top-10 left-0'>
        <div className='bg-[#D8A768] bg-opacity-40 border rounded-r-[50px] text-xl font-semibold flex flex-row'>
        <button
        className={`px-3 pl-5 py-1 ${
          activeLang === "Tr" ? "active:bg-main" : ""
        }`}
        onClick={() => handleLangClick("Tr")}
      >
        Tr
      </button>
      <button
        className={`px-3 py-1 ${
          activeLang === "Ar" ? "active:bg-main" : ""
        }`}
        onClick={() => handleLangClick("Ar")}
      >
        Ar
      </button>
      <button
        className={`px-3 py-1 ${
          activeLang === "En" ? "active:bg-main" : ""
        }`}
        onClick={() => handleLangClick("En")}
      >
        En
      </button>
        </div>
      </div>
      <div className=' fixed z-10 top-10 right-0'>
        <div>
          <div className='bg-main text-white border rounded-l-[50px] rounded-r-none text-2xl px-2 pr-5'>
            <FontAwesomeIcon className='px-1' icon={faFacebook} />
            <FontAwesomeIcon className='px-1' icon={faInstagram} />
            <FontAwesomeIcon className='px-1' icon={faLinkedin} />
            <FontAwesomeIcon className='px-1' icon={faWhatsapp} />
            <FontAwesomeIcon className='px-1' icon={faYoutube} />
            <FontAwesomeIcon className='px-1' icon={faEnvelope} />

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