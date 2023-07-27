import React, {useState, useEffect} from 'react'
import styles from '../styles'
import blackwoman from '../assets/blackwoman.png'
import maingirl from '../assets/maingirl.png'
import girlwithsmile from '../assets/girlwithsmile.png'
import oldman from '../assets/oldman.png'
import irangirl from '../assets/irangirl.png'
import usa from '../assets/usa.png'
import iran from '../assets/iran.png'
import algeria from '../assets/algeria.png'
import uk from '../assets/uk.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCirclePlay } from '@fortawesome/free-solid-svg-icons';



const reviews = [
    {
        name: 'Elif S...',
        treatment: 'Q HollyWood Smile',
        way: 'ZirconilumCrowns',
        review: 'The process was easier, quicker and better than I expected',   
        image: maingirl,
        video: 'https://www.youtube.com/watch?v=7XwKnk16Zbs',
        flag: uk,
        country: 'United Kingdom'
    },
    {
      name: 'Haifa M.     ',
      treatment: 'Q HollyWood Smile',
      way: 'E-Max Zirconia Crowns',
      review: '‘‘They kept in touch with me throughout the whole time to be sure I was fine after all the procedures’’      ',
      image: girlwithsmile,
      video: 'https://www.youtube.com/watch?v=7XwKnk16Zbs',
      flag: usa,
      country: 'USA'
  },
  { 
    name: 'Pernaz S.',
    treatment: 'Q HollyWood Smile',
    way: 'E-Max Laminate Veneers',
    review: '‘‘After I had Laminate Veneers done, it contributed my modeling a lot, which is my profession‘‘',
    image: irangirl,
    video: 'https://www.youtube.com/watch?v=7XwKnk16Zbs',
    flag: iran,
    country: 'IRAN'
  },
  {   
    name: 'Abdulaziz T.',
    treatment: 'All-On-4/6 Dental Implant',
    way: '',
    review: '‘‘Special Thanks for warm welcome and the full support that was reserved for me.’’',
    image: oldman,
    video: 'https://www.youtube.com/watch?v=7XwKnk16Zbs',
    flag: algeria,
    country: 'ALGERiA'
  },
  {
    name: 'Latoya W.',
    treatment: 'ALL-ON-4/6 Dental Implant',
    way: '',
    review: '‘‘I received a quality smile, you have changed my life’’',
    image: blackwoman,
    video: 'https://www.youtube.com/watch?v=7XwKnk16Zbs',
    flag: iran,
    country: 'IRAN'
  }
]

const Reviews = () => {
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
    if (currentIndex < reviews.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the first picture if at the end
    }
  };

  useEffect(() => {
    // Automatically move to the next picture every 3 seconds
    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(timer); // Clean up the interval on component unmount
    };
  }, [currentIndex]);
  const review = reviews[currentIndex];
  const nextIndex = (currentIndex + 1) % reviews.length;
  const nextReview = reviews[nextIndex];

  return (
    <div className={`flex bg-[#DDAC681A] flex-col items-center justify-center}`}>
      <div className={`${sm ? 'flex-col-reverse' : 'flex'}`}>
        <div className={` ${sm ? ' justify-center items-center ml-10 flex-col flex' : 'justify-start ml-16 items-start flex flex-col'} pt-40`}>
          <h1 className={` font-bold text-[#DDAC68] leading-tight ${xs ? 'text-[30px] w-1/2 ml-6' : 'text-[50px]  w-[500px]'}`}>{review.treatment}</h1>
          <span className='text-[#3C3C3B] text-[18px] leading-tight font-semibold'>{review.way}</span>
          <div className={`pt-14 ${sm ? 'flex flex-col items-center' : ''}`}>
              <p className={` text-[#3C3C3B] text-[22px] leading-tight font-semibold ${xs ? 'text-[16px] text-center pr-[190px] px-40 items-center flex' : 'w-[380px]'}`}>{review.review}</p>
              <div className={`flex mt-16 flex-col ${sm ? 'flex flex-col items-center' : ''}`}>
                <span className='text-[#3C3C3B] text-2xl font-bold'>{review.name}</span>
                <img src={review.flag} className='w-[50px] mt-2' />
                <span className='text-[#3C3C3B] text-sm'>{review.country}</span>
              </div>
            </div>
        </div>
        <div className="flex w-full relative">
          <div className={`items-end justify-end flex absolute bottom-0 transform left-[550px] z-0 ${xs ? 'hidden' : ''} `}>
              <img src={nextReview.image} alt={nextReview.name} className="w-80 justify-end blur-[2px]" />
          </div>
          <div className="flex justify-center w-[700px] relative">
            <button
              className={`hover:text-[80px] text-[60px] text-main font-bold px-4 py-2 rounded-r absolute ${xs ? 'relative' : ''} z-10 top-1/2 transform -translate-y-1/2 left-2`}
              onClick={handlePrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className={`relative ${xs ? 'w-1/3' : ''}`}>
              <img src={review.image} alt={review.name} className="w-[500px] z-10 button-0" />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[60px] opacity-90 hover:bg-gray-600 text-white font-bold px-4 py-2 rounded">
                <FontAwesomeIcon icon={faCirclePlay} />
              </button>
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

export default Reviews