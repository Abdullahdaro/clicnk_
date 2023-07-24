import React, {useState, useEffect} from 'react'
import styles from '../styles'
import blackwoman from '../assets/blackwoman.png'
import girldoctor from '../assets/girldoctor.png'
import oldmandoctor from '../assets/oldmandoctor.png'
import womandoctor from '../assets/womandoctor.png'
import younggirldoctor from '../assets/younggirldoctor.png'
import girldoctorwithblackhair from '../assets/girldoctorwithblackhair.png'
import girlwithsmile from '../assets/girlwithsmile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCirclePlay } from '@fortawesome/free-solid-svg-icons';



const doctors = [
    {
        name: 'Dr. GHAZWAN GHAZi',
        treatment: '',
        way: 'Periodontist & Dental Implant Specialist',
        education: 'Boston University School of Dentistry- Bachelor Degree1992 New Jersey Dental School- Masters Degree 1997 Harvard School of Dental Medicine: Lecturer on Oral Medicine, Infection and Immunity',   
        image: oldmandoctor,
        language: 'English, Arabic',
        speciality: 'Dental Implant, All-On-4/6, Bone Grafting, Sinus Lifting, Gum Disease Treatment, Gingivitis Treatment, Aesthetic Gum Treatment, Gingival Recession, Bleeding Gum',
        years: ' years',

    },
    {
        name: 'Dr. Ebru Bütün',
        way: 'Periodontist & Dental Implant Specialist',   
        image: girldoctor,
        language: 'English,Turkish',
        speciality:  'Dental Implant, All-On-4/6, Bone Grafting, Sinus Lifting, Gum Disease Treatment, Gingivitis Treatment, Aesthetic Gum Treatment, Gingival Recession, Bleeding Gum' ,
        years: '10 years',
    },
    {
      name: 'Dr. Duygu Bilgili',
      way: 'Endodontist',   
      image: womandoctor,
      language: 'English,Turkish, French',
      speciality:  'Root Canal Treatment, Traumatic Dental Injuries, Endodontic Retreatment, Endodontic Surgery' ,
      years: '13 years',
    },
    {
      name: 'Dr. Melek Aksoy',
      way: 'Cosmetic Specialist',   
      image: younggirldoctor,
      language: 'English, Arabic, Turkish',
      speciality:  'Smile Design (Zirconium Crowns, E-Max Laminate Veneers), Composite Bonding, Inlay & Onlay, Teeth Whitening / Bleaching' ,
      years: '5 years',
    },
    {
      name: 'Dr. Mina Mehmetoğlu',
      way: 'Prosthodontist      ',   
      image: girldoctorwithblackhair,
      language: 'English, Persian, Turkish',
      speciality:  'Smile Design (Zirconium Crowns, E-Max Laminate Veneers), Implant-Top Prosthesis, Dentures, Composite Bonding, Aesthetic Gum Treatment' ,
      years: '8 years',
    },
]

const Doctors = () => {
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
    if (currentIndex < doctors.length - 1) {
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
  const doctor = doctors[currentIndex];
  const nextIndex = (currentIndex + 1) % doctors.length;
  const nextReview = doctors[nextIndex];

  return (
    <div className='flex flex-col pt-10 items-center'>
      <div className='items-center flex py-10 justify-center'>
        <h1 className='sm:text-[50px] xs:text-[30px] text-[#3C3C3B] font-bold bg-[#DDAC68] bg-opacity-10 px-8 py-2 rounded-[40px]'>Our Specialist Doctors</h1>
      </div>
      <div className={` ${sm ? 'flex-col flex items-center text-center' : 'flex justify-center items-start'} `}>
        <div className='md:ml-16 xs:ml-0 xs:pt-2 md:pt-40 justify-center xs:items-center sm:items-start flex flex-col'>
          <h1 className='sm:text-[40px] xs:text-[36px] font-bold xs:px-10 sm:px-0 text-[#DDAC68] leading-tight w-[438px] '>{doctor.name}</h1>
          <span className='text-[#3C3C3B] xs: text-[18px] leading-tight font-semibold'>{doctor.way}</span>
          <div className='pt-14'>
          {doctor.education && (
              <p className="w-[438px] text-[#DDAC68] text-[20px] leading-tight font-semibold">
                Education: 
              </p>
            )}
              <p className='w-[438px] text-[#3C3C3B] text-[18px] xs:px-10 sm:px-0 leading-tight font-semibold '>{doctor.education}</p>
              <p className='w-[438px] xs:pt-2 sm:pt-8 text-[#DDAC68] text-[20px] leading-tight font-semibold '>Specialty:</p>
              <p className='w-[438px] text-[#3C3C3B] sm:text-[18px] xs:text-[16px] xs:px-10 sm:px-0 leading-tight font-semibold '>{doctor.speciality}</p>
              <p className='w-[438px] pt-8 text-[#DDAC68] text-[20px] leading-tight font-semibold '>Experience:<span className='text-black  pl-2'>{doctor.years}</span></p>
              <p className='w-[438px] pt-8 text-[#DDAC68] text-[20px] leading-tight font-semibold '>Languages:<span className='text-black pl-2'>{doctor.language}</span></p>
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
    </div>
    
  )
}

export default Doctors