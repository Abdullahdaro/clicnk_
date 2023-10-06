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
import { CSSTransition } from 'react-transition-group';
import 'animate.css/animate.min.css';
import '../index.css';
import { useLanguage } from '../constant/LanguageContext';
import constantContent from './content/constantContent';
import PhoneInput from 'react-phone-number-input';

const Constant = () => {
  const { activeLang, handleLangClick } = useLanguage();

  const [showGetQuote, setShowGetQuote] = useState(false);
  const [getQuote   , setgetQuote   ] = useState(false)

  const lan = constantContent[activeLang];

  const handleButtonClick = () => {
    setShowGetQuote(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Function to toggle the Get Quote button every 2 seconds
    const interval = setInterval(() => {
      setShowGetQuote((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // API endpoint URL
    const apiUrl = 'https://crm.hopmd.com/rest/6/gbne21xsz78ryy88/crm.lead.add.json';

    // Prepare data for the POST request
    const data = {
      FIELDS: {
        NAME: formData.name,
        EMAIL: [{ VALUE: formData.email }],
        PHONE: [{ VALUE: formData.phone }],
        SOURCE_ID: '23', // Fixed value for the source field
      },
    };

    try {
      // Send the POST request to the API endpoint
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Handle the response (optional)
      if (response.ok) {
        alert('Lead data submitted successfully!');
        // You can do additional handling for successful submission if needed
      } else {
        alert('Failed to submit lead data.');
        // You can handle errors or failed submission here
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors that occur during the API request
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };

  return (
    <div className='flex relative xl:max-w-[1280px] justify-between items-center'>
      <div className='sm:fixed xs:absolute z-20 md:top-10 md:left-0 xs:top-0 xs:left-4'>
       <div className='bg-[#D8A768] xs:flex-col bg-opacity-40 xs:rounded-b-[50px] xs:rounded-t-none xs:gap-3 xs:px-0 xs:py-2 md:py-0 md:rounded-r-[50px] md:rounded-l-none text-xl font-semibold flex md:flex-row'>
        <button
          className={`md:px-4 xs:px-2 md:py-1 ${activeLang === 'tr' ? 'bg-main shadow-lg' : ''}`}
          onClick={() => handleLangClick('tr')}
        >
          {activeLang === 'tr' ? 'TR' : 'TR'}
        </button>
        <button
          className={`md:px-4 xs:px-2 md:py-1 ${activeLang === 'fr' ? 'bg-main shadow-lg' : ''}`}
          onClick={() => handleLangClick('fr')}
        >
          FR
        </button>
        <button
          className={`md:px-4 xs:px-2 md:py-1 ${activeLang === 'en' ? 'bg-main xs:rounded-b-[50px] md:rounded-bl-none md:rounded-r-[50px] shadow-lg' : ''}`}
          onClick={() => handleLangClick('en')}
        >
          EN
        </button>
       </div>
      </div>
      <div className='sm:fixed xs:absolute z-20 md:top-10 md:right-0 xs:top-0 xs:right-4'>
        <div>
          <div className='bg-main text-white xs:flex-col md:flex-row flex xs:rounded-b-[50px] xs:rounded-t-none md:rounded-l-[50px] md:rounded-r-none xs:text-md md:text-2xl px-2 md:py-1 xs:py-2 md:pr-5'>
            <a href={lan.faceLink} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0 hover:scale-125' icon={faFacebook} />
            </a>
            <a href={lan.instaLink} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0 hover:scale-125' icon={faInstagram} />
            </a>
            <a href='https://www.linkedin.com/company/qualidentclinic/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0 hover:scale-125' icon={faLinkedin} />
            </a>
            <a href={lan.whatsLink} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon className='md:px-2 xs:py-2 md:py-0 hover:scale-125' icon={faWhatsapp} />
            </a>
            <a href='https://youtube.com/@QualidentClinic?si=gBdsdsCB3NmRXQYJ' target='_blank' rel='noopener noreferrer'>
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
      <div className='fixed z-20 flex xs:bottom-0 w-full sm:hidden'>
      {/* Changing Button */}
        <div className="motion-container" onClick={() => setgetQuote(!getQuote)}> 
          <div
            className={`motion-box  ${showGetQuote ? '' : 'rotate'}`}
            onClick={(handleButtonClick)}
          >
            {showGetQuote ? <h1 className='bg-[#e7a957] w-full inline-flex items-center justify-center rotate py-4 text-white font-bold text-lg'>{activeLang === 'tr' ? 'Bedava' : activeLang === 'en' ? 'Free' : activeLang === 'fr' ? 'Gratuite' : ''}</h1> : <h1 className='bg-[#efd5b3] w-full inline-flex items-center justify-center py-4 text-black font-bold text-lg'>{activeLang === 'tr' ? 'Fiyat Teklifi Alın' : activeLang === 'en' ? 'Get a Free Quote' : activeLang === 'fr' ? 'Obtenir un Devis' : ''}</h1>}
          </div>
        </div>
      {/* WhatsApp Button */}
            <a
        href={lan.whatsLink} 
        target='_blank'
        className='bg-[#74F58C] w-1/2 inline-flex items-center justify-center text-white py-4 font-bold text-lg'
      >
        {<FontAwesomeIcon icon={faWhatsapp} className='text-[14px] mr-4 scale-150' />}
        WhatsApp
      </a>
      </div>
      {getQuote && (
        <CSSTransition
          in={getQuote}
          timeout={300}
          classNames='alert'
          unmountOnExit
        >
          <div className='absolute z-20 w-full px-2 h-full sm:hidden top-20'>
            <div className='bg-white bg-opacity-100 py-12 rounded-[40px] w-full flex flex-col items-center justify-center text-main text-2xl font-bold'>
              <button onClick={() => setgetQuote(!getQuote)} className='justify-end flex items-end w-full px-10'><span className='bg-red-600 px-2 py-2 rounded-lg text-white text-xs '>X</span></button>
              {activeLang === 'tr' ? 'Fiyat Teklifi Alın' : activeLang === 'en' ? 'Get a Free Quote' : activeLang === 'fr' ? 'Obtenir un Devis' : ''}
              <form className='flex flex-col' onSubmit={handleSubmit}>
                <h2 className='text-main mb-2 text-base font-semibold leading-[90.443%] tracking-tighter w-60 capitalize'>
                  {activeLang === 'tr' ? 'Adınız' : activeLang === 'en' ? 'Name' : activeLang === 'fr' ? 'Nom' : ''}
                </h2>
                <input
                  className='border rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-main focus:border-main'
                  type='text'
                  value={formData.name}
                  name='name'
                  onChange={handleChange}
                  required
                  placeholder={activeLang === 'tr' ? 'Adınız' : activeLang === 'en' ? 'Name' : activeLang === 'fr' ? 'Nom' : ''}
                />
                 <h2 className='text-main mb-2 pt-10 text-base font-semibold leading-[90.443%] tracking-tighter w-60 capitalize'>
                  {activeLang === 'tr' ? 'E-posta Adresiniz' : activeLang === 'en' ? 'Email Address' : activeLang === 'fr' ? 'Adresse e-mail' : ''}
                </h2>
                <input
                  className='border rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-main focus:border-main'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={activeLang === 'tr' ? 'E-posta Adresiniz' : activeLang === 'en' ? 'Email Address' : activeLang === 'fr' ? 'Adresse e-mail' : ''}
                />
                <h2 className='text-main mb-2 pt-10 text-base font-semibold leading-[90.443%] tracking-tighter w-60 capitalize'>
                  {activeLang === 'tr' ? 'Telefon Numaranız' : activeLang === 'en' ? 'Phone Number' : activeLang === 'fr' ? 'Numéro de téléphone' : ''}
                </h2>
                <PhoneInput
                  international
                  defaultCountry='US'
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className='border rounded-md px-4 py-2 mb-16 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-main focus:border-main'
                  placeholder={activeLang === 'tr' ? 'Telefon Numaranız' : activeLang === 'en' ? 'Phone Number' : activeLang === 'fr' ? 'Numéro de téléphone' : ''}
                />
                <button
                  type='submit'
                  className='bg-main rounded-md px-4 py-2 text-sm text-white font-bold'
                >
                  {activeLang === 'tr' ? 'Gönder' : activeLang === 'en' ? 'Send' : activeLang === 'fr' ? 'Envoyer' : ''}
                </button>
              </form>
            </div>
          </div>
        </CSSTransition>
      )}
    </div>
  )
}

export default Constant