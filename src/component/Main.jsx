import React, {useState, useEffect} from 'react'
import background from '../assets/background.png'
import main1 from '../assets/main1.png'
import Picture3 from '../assets/Picture3.png'
import Picture6 from '../assets/Picture6.png'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { useLanguage } from '../constant/LanguageContext'
import content from './content/mainContent'


const main = () => {
  const { activeLang } = useLanguage();
  const con = content[activeLang];
    const [sm, setSm] = useState(window.innerWidth <= 768);

    useEffect(() => {
      function handleResize() {
        setSm(window.innerWidth <= 768);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
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
<div className={`flex flex-col w-full items-center relative `}>
  <img className="absolute z-0 inset-0 w-full h-full object-cover opacity-40" src={background} alt="Background" />
  <img className={`absolute z-0 inset-0 w-full h-full object-cover ${sm ? 'opacity-90 blur-sm' : 'opacity-100'}`} src={main1} alt="Main1" />
  <div className={`z-10 flex md:pb-4 relative items-start justify-center ${sm ? 'pt-0' : 'pt-0' } xs:flex-col sm:flex-row`}>
    <div>
      <img src={con.second} className={` ${sm ? 'w-[240px]' : 'w-[300px]'}  `}/>
    </div>
    <div className='absolute top-20'>
      <img src={con.first} className={` ${sm ? 'w-[240px]' : 'w-[300px]'}  `} />
    </div>
  </div>
  <div className='z-10 flex md:pt-4 pb-4 xl:max-w-[1280px] w-full flex-col'>
    <div className='flex xs:flex-col md:flex-row md:justify-between w-full z-10'>
      <div className={` ${sm ? ' flex flex-col pt-40 py-20' : 'justify-start items-start' } pr-4 sm:ml-20 xs:items-start xs:ml-0`}>
        <div className='z-10 sm:pl-20 xs:ml-16'>
          <img src={Picture3} className='xs:w-[100px] sm:w-[150px]' />
        </div>
        <div className=''>
          <img src={Picture6} className={` ${sm ? 'w-[300px]' : 'w-[450px]'}  `} />
        </div>
        <div className='sm:ml-20 md:mb-16 xs:ml-10'> 
          <img src={con.third} className={`${activeLang === 'tr' ? 'w-[500px]' : 'w-[300px]'} ${activeLang === 'fr' ? 'w-[500px]' : 'w-[300px]'}`} />
        </div>
      </div>
      <div className='xs:hidden sm:hidden mb-20 bg-white rounded-[40px] py-4 px-8 items-center sm:mr-20 md:flex flex-col shadow-xl mt-4'>
        <h1 className='text-2xl font-bold text-main mb-4 pt-5'>{con.formtitle}</h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className='w-full mb-4 xs:mb-10'>
            <h2 className='text-main mb-2 text-base font-semibold leading-[90.443%] tracking-tighter w-60 capitalize'>{con.formname}</h2>
                      <input className='w-full border rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-main focus:border-main' type='text' value={formData.name} name='name' onChange={handleChange} required placeholder={con.fillname} />
                      <div className='border mt-2 mb-4 xs:mb-6 '></div>
                      <div className="flex flex-col mb-4">
                        <label htmlFor="phone" className="text-main pb-2 font-semibold leading-[90.443%] tracking-tighter capitalize">
                          {con.formphone}
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
                      <h2 className='text-main pb-2 font-semibold leading-[90.443%] tracking-tighter capitalize '>{con.formemail}</h2>
                      <input
                          className='w-full border rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-main focus:border-main'
                          type='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={con.fillemail}
                        />
              <div className='border mt-2'></div>
            </div>
            <div className='flex pl-4 xs:pl-11 items-center'>
              <button type="submit" className='items-center bg-main rounded-[40px] px-8 py-2 text-white font-bold'>{con.submit}</button>
            </div>
          </form>
      </div> 
    </div>
  </div>
</div>
  )
}

export default main