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

  const [showGetQuote, setShowGetQuote] = useState(false);

  useEffect(() => {
    // Function to toggle the Get Quote button every 2 seconds
    const interval = setInterval(() => {
      setShowGetQuote((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className='flex relative xl:max-w-[1280px] justify-between items-center'>
      <div className='sm:fixed xs:absolute z-20 md:top-10 md:left-0 xs:top-0 xs:left-4'>
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
      <div className='sm:fixed xs:absolute z-20 md:top-10 md:right-0 xs:top-0 xs:right-4'>
        <div>
          <div className='bg-main text-white xs:flex-col md:flex-row flex xs:rounded-b-[50px] xs:rounded-t-none md:rounded-l-[50px] md:rounded-r-none xs:text-md md:text-2xl px-2 md:py-1 xs:py-2 md:pr-5'>
            <a href='https://www.facebook.com/Qualidentclinic' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0 hover:scale-125' icon={faFacebook} />
            </a>
            <a href='https://instagram.com/qualidentinternational?igshid=MzRlODBiNWFlZA==' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0 hover:scale-125' icon={faInstagram} />
            </a>
            <a href='https://www.linkedin.com/company/qualidentclinic/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0 hover:scale-125' icon={faLinkedin} />
            </a>
            <a href='https://api.whatsapp.com/send?phone=905308309219' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0 hover:scale-125' icon={faWhatsapp} />
            </a>
            <a href='https://www.youtube.com/@qualidentagzvedissaglgpoli582' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0 hover:scale-125' icon={faYoutube} />
            </a>
            <a href='mailto:info@qualident.com.tr' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0 hover:scale-125' icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
      <div className='z-20 xs:hidden sm:fixed md:bottom-2 right-0'>
        <a href='https://api.whatsapp.com/send?phone=905308309219' target='_blank' rel='noopener noreferrer'>
          <img src={whatsapp} className='w-[60px] h-[60px] md:mr-10 xs:mr-4 hover:scale-125' alt='WhatsApp' />
        </a>
      </div>
      <div className='fixed z-20 xs:bottom-0 w-full sm:hidden'>
      {/* Changing Button */}
      {showGetQuote ? (
        <button className='w-1/2 bg-main inline-flex items-center justify-center py-4 text-white font-bold text-lg'>
          <h1 className='mr-2'>Free</h1>
        </button>
      ) : (
        <a
        href='https://forms.crm.hopmd.com/crm_form_vprxw/' 
        className='w-1/2 bg-main inline-flex items-center justify-center py-4 text-white font-bold text-lg'>
          <h1 className='mr-2'>Get a Free Quote</h1>
        </a>
      )}

            {/* WhatsApp Button */}
            <a
        href='https://api.whatsapp.com/send?phone=905308309219'
        target='_blank'
        className='bg-[#74F58C] w-1/2 inline-flex items-center justify-center text-white py-4 font-bold text-lg'
      >
        {<FontAwesomeIcon icon={faWhatsapp} className='text-[15px] mr-4 scale-150' />}
        WhatsApp
      </a>
      </div>
    </div>
  )
}

export default Constant