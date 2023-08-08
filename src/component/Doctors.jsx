import React, {useState, useEffect} from 'react'
import styles from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../constant/LanguageContext'
import doctors from './content/doctorContent'

const Doctors = () => {
  const { activeLang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sm, setSm] = useState(window.innerWidth <= 1200);
  const [xs, setXS] = useState(window.innerWidth <= 640);

  useEffect(() => {
    function handleResize() {
      setXS(window.innerWidth <= 640);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setSm(window.innerWidth <= 1200);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < doctors[activeLang].length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the first picture if at the end
    }
  };

  useEffect(() => {
    // Automatically move to the next picture every 3 seconds
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(timer); // Clean up the interval on component unmount
    };
  }, [currentIndex]);
  const doctor = doctors[activeLang][currentIndex];
  const nextIndex = (currentIndex + 1) % doctors[activeLang].length;
  const nextReview = doctors[activeLang][nextIndex];

  return (
    <div className='flex flex-col pt-10 items-center'>
      <div className='items-center flex py-10 justify-center'>
        <h1 className='sm:text-[50px] xs:text-[26px] text-[#3C3C3B] font-bold bg-[#DDAC68] bg-opacity-10 px-8 py-2 rounded-[40px]'>{doctor.title}</h1>
      </div>
      <div className={` ${sm ? 'flex-col flex items-center text-center' : 'flex justify-center items-start'} `}>
        <div className='md:ml-16 xs:ml-0 xs:pt-2 md:pt-40 justify-center xs:items-center sm:items-start flex flex-col'>
          <h1 className='sm:text-[40px] xs:text-[36px] font-bold xs:px-10 sm:px-0 text-[#DDAC68] leading-tight w-[438px] '>{doctor.name}</h1>
          <span className='text-[#3C3C3B] xs: text-[18px] leading-tight font-semibold'>{doctor.way}</span>
          <div className='pt-14'>
          {doctor.education && (
              <p className="w-[438px] text-[#DDAC68] text-[20px] leading-tight font-semibold">
                {doctor.second}
              </p>
            )}
              <p className='w-[438px] text-[#3C3C3B] text-[18px] xs:px-10 sm:px-0 leading-tight font-semibold '>{doctor.education}</p>
              <p className='w-[438px] xs:pt-2 sm:pt-8 text-[#DDAC68] text-[20px] leading-tight font-semibold '>{doctor.first}</p>
              <p className='w-[438px] text-[#3C3C3B] sm:text-[18px] xs:text-[16px] xs:px-10 sm:px-0 leading-tight font-semibold '>{doctor.speciality}</p>
              <p className='w-[438px] pt-8 text-[#DDAC68] text-[20px] leading-tight font-semibold '>{doctor.forth}<span className='text-black  pl-2'>{doctor.years}</span></p>
              <p className='w-[438px] pt-8 text-[#DDAC68] text-[20px] leading-tight font-semibold '>{doctor.third}<span className='text-black pl-2'>{doctor.language}</span></p>
            </div>
        </div>
        <div className="flex w-full relative">
          <div className={`items-end justify-end flex absolute bottom-0 transform left-[550px] z-0 ${xs ? 'hidden' : ''} `}>
              <img src={nextReview.image} alt={nextReview.name} className="w-80 justify-end filter lightgray-50 blur-[2px]" />
          </div>
          <div className="flex justify-center  w-[700px] relative">
            <button
              className={`hover:text-[80px] text-[60px] text-main font-bold px-4 py-2 rounded-r absolute ${xs ? 'relative' : ''} z-10 top-1/2 transform -translate-y-1/2 left-2`}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className={`relative ${xs ? 'w-1/3' : ''}`}>
            <img
                src={doctor.image}
                alt={doctor.name}
                className="w-[500px] z-10 button-0"
              />
            </div>
            <button
              className={`hover:text-[80px] text-[60px] text-main font-bold px-4 py-2 rounded-r absolute z-10 top-1/2 transform -translate-y-1/2 right-2 ${xs ? 'relative' : ''}`}
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button> 
          </div>      
        </div>
      </div>
      <div className='bg-[#DDAC681F] w-full items-center flex justify-center p-10'>
      <a
        href='https://api.whatsapp.com/send?phone=905308309219' className='xs:hidden md:flex hover:scale-125'>
              <img src={doctor.wp} className='w-[225px]' />
            </a>
      </div>
    </div>
    
  )
}

export default Doctors