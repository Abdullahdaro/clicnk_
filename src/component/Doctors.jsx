import React, {useState, useEffect} from 'react'
import styles from '../styles'
import blackwoman from '../assets/blackwoman.png'
import girldoctor from '../assets/girldoctor.png'
import oldmandoctor from '../assets/oldmandoctor.png'
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
        video: 'https://www.youtube.com/watch?v=7XwKnk16Zbs',
        flag: 'https://www.hollywoodsmilecostarica.com/wp-content/uploads/2019/10/american-dental-association.png',
        country: 'USA'
    },
    {
      name: 'John Doe',
      treatment: 'Q HollyWood Smile',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus luctus, nisl nunc aliquam urna, vitae aliquam nisl nunc eu nunc. Sed euismod, diam id rhoncus luctus, nisl nunc aliquam urna, vitae aliquam nisl nunc eu nunc.',
      image: girldoctor,
      video: 'https://www.youtube.com/watch?v=7XwKnk16Zbs',
      flag: 'https://www.hollywoodsmilecostarica.com/wp-content/uploads/2019/10/american-dental-association.png',
      country: 'USA'
  },
]

const Doctors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className=''>
      <div className='items-center flex py-10 justify-center'>
        <h1 className='text-[50px] font-bold bg-[#DDAC68] bg-opacity-10 px-8 py-2 rounded-[40px]'>Our Specialist Doctors</h1>
      </div>
      <div className={`justify-start flex items-start`}>
        <div className='ml-16 pt-40 justify-start items-start flex flex-col'>
          <h1 className='text-[40px] font-bold text-[#DDAC68] leading-tight w-[438px] '>{doctor.name}</h1>
          <span className='text-[#3C3C3B] text-[18px] leading-tight font-semibold'>{doctor.way}</span>
          <div className='pt-14'>
              <p className='w-[438px] text-[#DDAC68] text-[20px] leading-tight font-semibold '>Education:</p>
              <p className='w-[438px] text-[#3C3C3B] text-[18px] leading-tight font-semibold '>{doctor.education}</p>
              <p className='w-[438px] pt-8 text-[#DDAC68] text-[20px] leading-tight font-semibold '>Specialty:</p>
              <p className='w-[438px] text-[#3C3C3B] text-[18px] leading-tight font-semibold '>{doctor.education}</p>
              <p className='w-[438px] pt-8 text-[#DDAC68] text-[20px] leading-tight font-semibold '>Experience:<span>{doctor.years}</span></p>
              <p className='w-[438px] pt-8 text-[#DDAC68] text-[20px] leading-tight font-semibold '>Languages:<span>{doctor.language}</span></p>
            </div>
        </div>
        <div className="flex w-full relative">
        <div className='items-end justify-end flex absolute bottom-0 transform left-[550px] z-0'>
              <img src={nextReview.image} alt={nextReview.name} className="w-80 justify-end filter opacity-50 lightgray-50" />
          </div>
          <div className="flex justify-center  w-[700px] relative">
            <button
              className="hover:text-[80px] text-[60px] text-main font-bold px-4 py-2 rounded-r absolute z-10 top-1/2 transform -translate-y-1/2 left-2"
              onClick={handlePrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="relative">
              <img src={doctor.image} alt={doctor.name} className="w-[500px] z-10 button-0" />
            </div>
            <button
              className="hover:text-[80px] text-[60px] text-main font-bold px-4 py-2 rounded-r absolute z-10 top-1/2 transform -translate-y-1/2 right-2"
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