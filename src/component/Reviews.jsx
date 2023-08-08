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
import turkey from '../assets/turkey.png'
import turkeyflag from '../assets/turkeyflag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../constant/LanguageContext'
import reviews from './content/reviewsContent'

const Reviews = () => {
  const { activeLang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sm, setSm] = useState(window.innerWidth <= 1200);
  const [xs, setXS] = useState(window.innerWidth <= 640);
  const [showVideo, setShowVideo] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleVideoButtonClick = () => {
    setShowVideo(true);
    setVideoPlaying(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
    setVideoPlaying(false);
  };

  const handleVideoClosed = () => {
    setVideoPlaying(false);
  };

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
    if (currentIndex < reviews[activeLang].length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the first picture if at the end
    }
  };

  useEffect(() => {
    // Automatically move to the next picture every 3 seconds
    let timer;

    if (!videoPlaying) {
      // Automatically move to the next picture every 3 seconds if videoPlaying is false
      timer = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => {
      clearInterval(timer); // Clean up the interval on component unmount
    };
  }, [currentIndex, videoPlaying]);

  const review = reviews[activeLang][currentIndex];
  const nextIndex = (currentIndex + 1) % reviews[activeLang].length;
  const nextReview = reviews[activeLang][nextIndex];

  return (
    <div className={`flex bg-[#DDAC681A] flex-col items-center justify-center}`}>
      <div className={`${sm ? 'flex-col-reverse' : 'flex'}`}>
        <div className={` ${sm ? ' justify-center items-center ml-6 flex-col flex' : 'justify-start ml-16 items-start flex flex-col'} xs:pt-20 sm:pt-40`}>
          <span className='font-semibold xs:hidden sm:flex'>{review.hastag}</span>
          <h1 className={` font-bold text-[#DDAC68] leading-tight ${xs ? 'text-[30px] w-1/2 ml-14' : 'text-[50px]  w-[500px]'}`}>{review.treatment}</h1>
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
              {!showVideo && (
                <button onClick={handleVideoButtonClick} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[60px] opacity-90 hover:bg-gray-600 text-white font-bold px-4 py-2 rounded">
                  <FontAwesomeIcon icon={faCirclePlay} />
                </button>
              )}
              {showVideo && (
                <div className="absolute top-0 left-0 w-full h-full z-20">
                  <iframe
                    width="500"
                    height="315"
                    className='xs:w-[300px] xs:h-[200px]'
                    src={review.video}
                    title="YouTube Video Player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onPause={handleVideoClosed}
                    onEnded={handleVideoClosed}
                  ></iframe>
                  <button onClick={handleVideoClose} className="absolute top-2 right-2 text-white font-bold px-4 py-2 rounded bg-red-600">
                    Close
                  </button>
                </div>
              )}
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