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
import picture3 from '../assets/picture3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Partner = () => {
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

  return (
    <div className={`${styles.paddingY} flex justify-center items-center flex-col`}>
        <div className='justify-center xl:max-w-[1400px] flex flex-col items-center'>       
            <h1 className='md:text-[40px] sm:text-2xl font-bold text-main'>OUR PARTNERS IN USA</h1>
            <div className='flex p-10 md:gap-20 xs:gap-4'>
                <img src={partner} className='sm:w-auto sm:h-32 xs:w-[100px]' />
                <img src={partner2} className='sm:w-[450px] sm:h-32 xs:w-[200px]' />
            </div>
            <h1 className='md:text-[40px] sm:text-2xl font-bold text-main'>OUR SOLUTION PARTNERS</h1>
            <div className='slider-container pt-6 overflow-hidden'>
              <div className='slider flex pt-5' ref={sliderRef}>
                <img src={logo1} className='w-[400px] h-20 px-20' />
                <img src={logo2} className='w-[400px] h-20 px-20' />
                <img src={logo3} className='w-[400px] h-20 px-20 transform scale-[200%] transition-transform' />
                <img src={logo4} className='w-[400px] h-20 px-20' />
                <img src={logo5} className='w-[400px] h-20 px-20 scale-[200%] ' />
                <img src={logo6} className='w-[400px] h-20 px-20' />
              </div>
            </div>
            <div className='xs:flex-col md:flex-row flex justify-between xs:pt-10 md:pt-10 md:px-10 xs:px-40 items-center'>
              <div className='w-1/2 justify-between flex flex-col gap-7'>
                <div className='md:flex-row flex xs:flex-col'>
                  <div className='xs:text-center sm:text-start pr-4'>
                    <h1 className='md:text-2xl xs:text-xl font-bold text-[#DDAC68]'>Best Patient Experience</h1>
                    <span className='xs:text-sm sm:text-lg font-semibold '>We pride ourselves on the best <br className='xs:hidden sm:flex' /> quality customer services in <br className='xs:hidden sm:flex' /> Turkey and Europe backed by <br className='xs:hidden sm:flex' /> decades of clinical experience. <br className='xs:hidden sm:flex' /> Our belief is that healthy mouths <br className='xs:hidden sm:flex' /> always lead to healthy bodies.</span>
                  </div>
                  <div className='xs:text-center sm:text-start px-4'>
                    <h1 className='md:text-2xl xs:text-xl font-bold text-[#DDAC68]'>We Speak Multiple Languages</h1>
                    <span className='xs:text-sm sm:text-lg font-semibold '>Our doctors and medical team speak <br className='xs:hidden sm:flex' /> multiple languages where they can <br className='xs:hidden sm:flex' /> communicate directly with our <br className='xs:hidden sm:flex' /> patients to make sure all their <br className='xs:hidden sm:flex' /> dental needs are met.</span>
                  </div>
                </div>
                <div className='sm:flex xs:grid xs:grid-cols-2 sm:flex-row gap-12'>
                  <img src={tursab} className='w-[100px] h-16' />
                  <img src={patient} className='w-[140px] h-14' />
                  <img src={speak} className='w-[140px] h-14' />
                  <img src={speak1} className='w-[140px] h-14' />
                </div>
              </div>
              <div className='flex xs:items-center sm:items-start xs:pt-8 sm:pt-0 flex-col px-6'>
                <img src={picture3} className='w-[200px] h-18' />
                <h1>Istanbul, Turkey</h1>
                <span>Hamidiye, Cendere Cd. No:103 <br  /> D:1B, 34398 Kâğıthane/ <br /> İstanbul/Türkiye</span>
                <div className=' text-white gap-2 flex pt-2 rounded-l-[50px] rounded-r-none text-2xl px-2 pr-5'>
                  <FontAwesomeIcon className=' bg-[#DDAC68] bg-opacity-50 py-1 rounded-lg px-2' icon={faFacebook} />
                  <FontAwesomeIcon className=' bg-[#DDAC68] bg-opacity-50 py-1 rounded-lg px-2' icon={faInstagram} />
                  <FontAwesomeIcon className=' bg-[#DDAC68] bg-opacity-50 py-1 rounded-lg px-2' icon={faLinkedin} />
                  <FontAwesomeIcon className=' bg-[#DDAC68] bg-opacity-50 py-1 rounded-lg px-2' icon={faWhatsapp} />
                  <FontAwesomeIcon className=' bg-[#DDAC68] bg-opacity-50 py-1 rounded-lg px-2' icon={faYoutube} />
                  <FontAwesomeIcon className=' bg-[#DDAC68] bg-opacity-50 py-1 rounded-lg px-2' icon={faEnvelope} />
                </div>
              </div>
              <div className=' xs:hidden sm:hidden bg-white rounded-[40px] py-4 px-8 items-center md:flex flex-col shadow-xl mt-4'>
                <h1 className='text-2xl font-bold text-main mb-4'>Get A Free Quote</h1>
                  <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className='w-full'>
                      <h2 className='text-main mb-2 text-base font-semibold leading-[90.443%] tracking-tighter w-60 capitalize'>Full Name</h2>
                      <input className='w-full border rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-main focus:border-main' type='text' value={formData.name} name='name' onChange={handleChange} required placeholder='Enter Your Full Name' />
                      <div className='bordermt-2 mb-4 xs:mb-6 '></div>
                      <h2 className='text-main pb-2 font-semibold leading-[90.443%] tracking-tighter capitalize'>Phone Number</h2>
                      <input className='w-full border rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-main focus:border-main' type='text' value={formData.phone} name='phone' onChange={handleChange}  required placeholder='Phone Number' />
                      <div className='border mt-2 mb-4 xs:mb-6'></div>
                      <h2 className='text-main pb-2 font-semibold leading-[90.443%] tracking-tighter capitalize '>Email</h2>
                      <input
                          className='w-full border rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-main focus:border-main'
                          type='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder='Enter your email address'
                        />
                      <div className='border my-2'></div>
                    </div>
                    <div className='flex pl-4 xs:pl-11 items-center'>
                      <button type="submit" className='items-center bg-main rounded-[40px] px-8 py-2 text-white font-bold'>Submit Now</button>
                    </div>
                  </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Partner