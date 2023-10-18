import React, { useState, useEffect, useRef} from 'react'
import styles from '../styles'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import speak from '../assets/speak.png'
import speak1 from '../assets/speak1.png'
import tursab from '../assets/tursab.png'
import patient from '../assets/patient.png'
import partner from '../assets/partner.png'
import partner2 from '../assets/partner2.png'
import Picture3 from '../assets/picture3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { useLanguage } from '../constant/LanguageContext'
import partnerContent from './content/partnerContent'


const Partner = () => {
  const { activeLang } = useLanguage();
  const parter = partnerContent[activeLang];
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrameId;
    let position = 0;
    const increment = 0.3; // You can adjust this value to control the speed

    const animateSlider = () => {
      if (slider) {
        // Calculate the total width of all slider items
        const sliderWidth = slider.scrollWidth;
        // Calculate the width of the slider container
        const containerWidth = slider.clientWidth;

        // Move the slider to the left by the increment value
        position -= increment;
        slider.style.transform = `translateX(${position}px)`;

        // Check if the slider has moved out of view
        if (Math.abs(position) >= sliderWidth - containerWidth) {
          // Reset the position to the starting point
          position = -0;
          slider.style.transform = 'translateX(0)';
        }

        // Continue the animation
        animationFrameId = requestAnimationFrame(animateSlider);
      }
    };

    // Start the animation loop
    animateSlider();

    // Clean up the animation frame when the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
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
    <div className={`${styles.paddingY} flex justify-center items-center flex-col`}>
        <div className='justify-center xl:max-w-[1400px] flex flex-col items-center'>       
            <h1 className='md:text-[40px] sm:text-2xl font-bold text-main'>{parter.title}</h1>
            <div className='flex p-10 md:gap-20 xs:gap-4'>
                <img src={partner} className='sm:w-auto sm:h-16 xs:w-[100px]' />
                <img src={partner2} className='sm:w-[350px]  xs:w-[200px]' />
            </div>
            <h1 className='md:text-[40px] sm:text-2xl font-bold text-main'>{parter.first}</h1>
            <div className='slider-container pt-6 overflow-hidden'>
              <div className='slider flex pt-5' ref={sliderRef}>
                <img src={logo1} className='w-[400px] h-14 px-20' />
                <img src={logo2} className='w-[400px] h-14 px-20' />
                <img src={logo3} className='w-[400px] h-14 px-20 transform scale-[200%] transition-transform' />
                <img src={logo4} className='w-[400px] h-14 px-20' />
                <img src={logo5} className='w-[400px] h-14 px-20 scale-[200%] ' />
                <img src={logo6} className='w-[400px] h-14 px-20' />
              </div>
            </div>
            <div className='xs:flex-col-reverse md:flex-row flex justify-between xs:pt-10 md:pt-10 md:px-10 xs:px-40 items-center xs:pb-10 sm:pb-0'>
              <div className='w-1/2 justify-between flex flex-col gap-7'>
                <div className='md:flex-row flex grid-col-2 xs:flex-col'>
                  <div className='xs:text-center xs:py-4 sm:py-0 sm:text-start pr-4 '>
                    <h1 className='md:text-xl xs:text-xl font-bold text-[#DDAC68]'>{parter.second}</h1>
                    <span className='xs:text-sm sm:text-md font-semibold '>{parter.line1} <br className='xs:hidden sm:flex' /> {parter.line2} <br className='xs:hidden sm:flex' /> {parter.line3}<br className='xs:hidden sm:flex' /> {parter.line4} <br className='xs:hidden sm:flex' /> {parter.line5} <br className='xs:hidden sm:flex' /> {parter.line6}</span>
                  </div>
                  <div className='xs:text-center xs:py-4 sm:py-0 sm:text-start px-4 '>
                    <h1 className='md:text-xl xs:text-xl font-bold text-[#DDAC68]'>{parter.third}</h1>
                    <span className='xs:text-sm sm:text-md font-semibold '>{parter.l1}<br className='xs:hidden sm:flex' /> {parter.l2} <br className='xs:hidden sm:flex' /> {parter.l3} <br className='xs:hidden sm:flex' /> {parter.l4}<br className='xs:hidden sm:flex' /> {parter.l5}</span>
                  </div>
                </div>
                <div className='sm:flex xs:grid xs:grid-cols-2 sm:flex-row gap-8'>
                  <img src={tursab} className='w-[100px] h-12' />
                  <img src={patient} className='w-[100px] h-10' />
                  <img src={speak} className='w-[110px] h-10' />
                  <img src={speak1} className='w-[100px] h-10' />
                </div>
              </div>
              <div className='flex xs:text-md xs:pb-4 sm:pb-0 sm:text-xl xs:items-center sm:items-start xs:pt-8 sm:pt-0 flex-col xs:px-40 sm:px-6'>
                <img src={Picture3} className='sm:w-[125px] pb-4 xs:w-[150px] h-18' />
                <h1 className='font-bold xs:text-xl xs:py-2 sm:py-0'>Istanbul, Turkey</h1>
                <span className='xs:py-2 sm:py-0'>Hamidiye, Cendere Cd. No:103 <br className='xs:hidden sm:flex' /> D:1B, 34398 Kâğıthane/ <br className='xs:hidden sm:flex' /> İstanbul/Türkiye</span>
                <div className=' text-white gap-2 flex pt-2 rounded-l-[50px] rounded-r-none text-2xl px-2 pr-5'>
                  <a href={parter.faceLink} target='_blank' rel='noopener noreferrer' className="icon-hover">
                    <FontAwesomeIcon className='bg-[#DDAC68] bg-opacity-50 py-1 rounded-lg px-2' icon={faFacebook} />
                  </a>
                  <a href={parter.instaLink} target='_blank' rel='noopener noreferrer' className="icon-hover">
                    <FontAwesomeIcon className='bg-[#DDAC68] bg-opacity-50 py-1 rounded-lg px-2' icon={faInstagram} />
                  </a>
                  <a href='https://www.linkedin.com/company/qualidentclinic/' target='_blank' rel='noopener noreferrer' className="icon-hover">
                    <FontAwesomeIcon className='bg-[#DDAC68] bg-opacity-50 py-1 rounded-lg px-2' icon={faLinkedin} />
                  </a>
                  <a href={parter.whatsLink} target='_blank' rel='noopener noreferrer' className="icon-hover">
                    <FontAwesomeIcon className='bg-[#DDAC68] bg-opacity-50 py-1 rounded-lg px-2' icon={faWhatsapp} />
                  </a>
                  <a href='https://www.youtube.com/@qualidentagzvedissaglgpoli582' target='_blank' rel='noopener noreferrer' className="icon-hover">
                    <FontAwesomeIcon className='bg-[#DDAC68] bg-opacity-50 py-1 rounded-lg px-2' icon={faYoutube} />
                  </a>
                  <a href='mailto:info@qualident.com.tr' target='_blank' rel='noopener noreferrer' className="icon-hover">
                    <FontAwesomeIcon className='bg-[#DDAC68] bg-opacity-50 py-1 rounded-lg px-2' icon={faEnvelope} />
                  </a>
                </div>
              </div>
              <div className=' bg-[#DDAC68] bg-opacity-10 rounded-[40px] py-4 px-8 items-center md:flex flex-col shadow-xl mt-4'>
                <h1 className='text-2xl font-bold text-main mb-4'>{parter.formtitle}</h1>
                  <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className='w-full'>
                      <h2 className='text-main mb-2 text-base font-semibold leading-[90.443%] tracking-tighter w-60 capitalize'>{parter.formname}</h2>
                      <input className='w-full border rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-main focus:border-main' type='text' value={formData.name} name='name' onChange={handleChange} required placeholder={parter.fillname} />
                      <div className='bordermt-2 mb-4 xs:mb-6 '></div>
                      <div className="flex flex-col mb-4">
                        <label htmlFor="phone" className="text-main pb-2 font-semibold leading-[90.443%] tracking-tighter capitalize">
                        {parter.formphone}
                        </label>
                        <PhoneInput
                          international
                          defaultCountry="US"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className="w-full border rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-main focus:border-main"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className='border mt-2 mb-4 xs:mb-6'></div>
                      <h2 className='text-main pb-2 font-semibold leading-[90.443%] tracking-tighter capitalize '>{parter.formemail}</h2>
                      <input
                          className='w-full border rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-main focus:border-main'
                          type='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={parter.fillemail}
                        />
                      <div className='border my-2'></div>
                    </div>
                    <div className='flex pl-4 xs:pl-11 items-center'>
                      <button type="submit" className='items-center bg-main rounded-[40px] px-8 py-2 text-white font-bold'>{parter.submit}</button>
                    </div>
                  </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Partner