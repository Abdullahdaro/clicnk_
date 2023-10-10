import React, { useState, useEffect} from 'react'
import blackteeth from '../assets/blackteeth.png'
import blackwomanteeth from '../assets/blackwomanteeth.png'
import girlwithsmileblackhair from '../assets/girlwithsmileblackhair.png'
import oldmansmile from '../assets/oldmansmile.png'
import smilegirlteeth from '../assets/smilegirlteeth.png'
import smileteeth from '../assets/smileteeth.png'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'
import b5 from '../assets/b5.jpg'
import b6 from '../assets/b6.jpg'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import styles from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import teethContent from './content/teethContent'
import { useLanguage } from '../constant/LanguageContext';

const photos = [
    {
        src: b1,
        alt: 'blackteeth'
    },
    {
        src: b2,
        alt: 'girlteeth'
    },
    {
        src: b3,
        alt: 'girlwithsmileblackhair'
    },
    {
        src: b4,
        alt: 'oldmansmile'
    },
    {   
        src: b5,
        alt: 'smilegirltheeth'
    },
    {
        src: b6,
        alt: 'smileteeth'
    }
]

const clinicPhotos = [
  {
    src: pic1,
    alt: 'pic1'
  },
  {
    src: pic2,
    alt: 'pic2'
  },
  {
    src: pic3,
    alt: 'pic3'
  },
  {
    src: pic4,
    alt: 'pic4'
  },
  {
    src: pic5,
    alt: 'pic5'
  },
]

const teeth = () => {
    const { activeLang } = useLanguage();
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(0)
    const [setActiveButton, setSetActiveButton] = useState(0)
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

    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
      const timer = setInterval(() => {
        setIsTransitioning(true);
        setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
  
        // Reset the transitioning state after the transition duration
        setTimeout(() => {
          setIsTransitioning(false);
        }, 1000); // Adjust the duration based on your transition duration
      }, 3000);
  
      return () => clearInterval(timer);
    }, []);
  
    const handlePrev = () => {
      setIsTransitioning(true);
      setCurrentPhoto((prevPhoto) => (prevPhoto - 1 + photos.length) % photos.length);
  
      // Reset the transitioning state after the transition duration
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Adjust the duration based on your transition duration
    };
  
    const handleNext = () => {
      setIsTransitioning(true);
      setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
  
      // Reset the transitioning state after the transition duration
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Adjust the duration based on your transition duration
    };

    useEffect(() => {
      const timer = setInterval(() => {
        setIsTransitioning(true);
        setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % clinicPhotos.length);
  
        // Reset the transitioning state after the transition duration
        setTimeout(() => {
          setIsTransitioning(false);
        }, 1000); // Adjust the duration based on your transition duration
      }, 3000);
  
      return () => clearInterval(timer);
    }, []);
  
    const handlePrevClinic = () => {
      setIsTransitioning(true);
      setCurrentPhoto((prevPhoto) => (prevPhoto - 1 + clinicPhotos.length) % clinicPhotos.length);
  
      // Reset the transitioning state after the transition duration
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Adjust the duration based on your transition duration
    };
  
    const handleNextClinic = () => {
      setIsTransitioning(true);
      setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % clinicPhotos.length);
  
      // Reset the transitioning state after the transition duration
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Adjust the duration based on your transition duration
    };
    
    
    useEffect(() => {
      const timer = setInterval(() => {
        setIsTransitioning(true);
        setCurrentVideo((prevPhoto) => (prevPhoto + 1) % teethContent[activeLang].videos.length);
  
        // Reset the transitioning state after the transition duration
        setTimeout(() => {
          setIsTransitioning(false);
        }, 1000); // Adjust the duration based on your transition duration
      }, 120000);
  
      return () => clearInterval(timer);
    }, []);
  
    const handlePrevVideo = () => {
      setIsTransitioning(true);
      setCurrentVideo((prevPhoto) => (prevPhoto - 1 + teethContent[activeLang].videos.length) % teethContent[activeLang].videos.length);
  
      // Reset the transitioning state after the transition duration
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Adjust the duration based on your transition duration
    };
  
    const handleNextVideo = () => {
      setIsTransitioning(true);
      setCurrentVideo((prevPhoto) => (prevPhoto + 1) % teethContent[activeLang].videos.length);
  
      // Reset the transitioning state after the transition duration
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Adjust the duration based on your transition duration
    };

    const handleButtonClick = (index) => {
      setSetActiveButton(index);
    };

  
  return (
    <div className={`md:${styles.paddingY} sm:gird w-full items-center justify-center bg-bg md:flex`}>
        <div className=" flex md:flex-col xs:gap-1 xs:justify-between md:gap-0 xs:px-4 md:px-0 ">
            <button key={0} onClick={() => handleButtonClick(0)} className='border-main border my-3 text-[#3C3C3B] font-bold md:text-xl xs:text-[10px] rounded-[40px] md:px-4 md:py-2 xs:py-1 xs:px-4 active:bg-main hover:bg-main shadow-lg'>{teethContent[activeLang].first}</button>
            <button key={1} onClick={() => handleButtonClick(1)} className='border-main border my-3 text-[#3C3C3B] font-bold md:text-xl xs:text-[10px] rounded-[40px] md:px-4 md:py-2 xs:py-1 xs:px-4 active:bg-main hover:bg-main  shadow-lg'>{teethContent[activeLang].second}</button>    
            <button key={2} onClick={() => handleButtonClick(2)} className='border-main border my-3 text-[#3C3C3B] font-bold md:text-xl xs:text-[10px] rounded-[40px] md:px-4 md:py-2 xs:py-1 xs:px-4 active:bg-main hover:bg-main  shadow-lg'>{teethContent[activeLang].third}</button>
            <button key={3} onClick={() => handleButtonClick(3)} className='border-main border my-3 text-[#3C3C3B] font-bold md:text-xl xs:text-[10px] rounded-[40px] md:px-4 md:py-2 xs:py-1 xs:px-4 active:bg-main hover:bg-main  shadow-lg'>{teethContent[activeLang].fourth}</button>
            <a
             href={teethContent[activeLang].wpl} className='xs:hidden md:flex'>
              <img loading="lazy" src={teethContent[activeLang].wp} alt='button' className='w-[225px]  hover:scale-125 transform transition duration-500 ease-in-out'/>
            </a>
        </div>
        <div className="grid gap-4 sm:ml-0 md:ml-24">
          {setActiveButton === 0 && 
          <div className="relative flex justify-center">
            <div className="w-auto h-auto px-2 flex justify-end items-center">
              <button
                className="hover:scale-125 xs:text-[30px] md:text-[60px] text-main font-bold px-4 py-2 rounded-r z-10 transform"
                onClick={handlePrev}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </div>
            <div className={`h-auto md:max-w-[550px] xs:max-w-[300px] photo-container ${isTransitioning ? 'transitioning' : ''}`}>
                <img
                  src={photos[currentPhoto].src}
                  alt={photos[currentPhoto].alt}
                  className={`w-full h-auto rounded-[40px]`}
                />
              </div>
            <div className="w-auto h-auto px-2 flex justify-between items-center">
              <button
                className="hover:scale-125 xs:text-[30px] md:text-[60px] text-main font-bold px-4 py-2 rounded-r z-10 transform"
                onClick={handleNext}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button> 
            </div>
          </div>
          }
          {setActiveButton === 1 &&
          <div className="relative flex justify-center">
            <div className="w-auto h-auto px-2 flex justify-end items-center">
              <button
                className="hover:scale-125 xs:text-[30px] md:text-[60px] text-main font-bold px-4 py-2 rounded-r z-10 transform"
                onClick={handlePrev}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </div>
            <div className={`h-auto md:max-w-[486px] xs:max-w-[275px] photo-container ${isTransitioning ? 'transitioning' : ''}`}>
              <img
                src={teethContent[activeLang].reviews[currentPhoto].src}
                alt={teethContent[activeLang].reviews[currentPhoto].alt}
                className={`w-full h-full rounded-[40px]`}
              />
            </div>
            <div className="w-auto h-auto px-2 flex justify-between items-center">
              <button
                className="hover:scale-125 xs:text-[30px] md:text-[60px] text-main font-bold px-4 py-2 rounded-r z-10 transform"
                onClick={handleNext}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          }
          {setActiveButton === 2 &&
          <div className="relative flex justify-center">
            <div className="w-auto h-auto px-2 flex justify-end items-center">
              <button
                className="hover:scale-125 xs:text-[30px] md:text-[60px] text-main font-bold px-4 py-2 rounded-r z-10 transform"
                onClick={handlePrevVideo}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </div>
            <iframe className='xs:w-[275px] sm:w-[375px] md:w-[560px] xs:h-[315px] md:h-[400px]' src={teethContent[activeLang].videos[currentVideo].src} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="w-auto h-auto px-2 flex justify-between items-center">
              <button
                className="hover:scale-125 xs:text-[30px] md:text-[60px] text-main font-bold px-4 py-2 rounded-r z-10 transform"
                onClick={handleNextVideo}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          }
          {setActiveButton === 3 && (
            activeLang === "tr" ? (
              // Render nothing for Turkish
              <div className="relative flex justify-center">
              <div className="w-auto h-auto px-2 flex justify-end items-center">
                <button
                  className="hover:scale-125 xs:text-[30px] md:text-[60px] text-main font-bold px-4 py-2 rounded-r z-10 transform"
                  onClick={handlePrevClinic}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </div>
              <div className={`h-[242px] md:max-w-[486px] xs:max-w-[275px] photo-container ${isTransitioning ? 'transitioning' : ''}`}>
                <img
                  src={clinicPhotos[currentPhoto].src}
                  alt={clinicPhotos[currentPhoto].alt}
                  className={`w-full h-full rounded-[40px]`}
                />
              </div>
              <div className="w-auto h-auto px-2 flex justify-between items-center">
                <button
                  className="hover:scale-125 xs:text-[30px] md:text-[60px] text-main font-bold px-4 py-2 rounded-r z-10 transform"
                  onClick={handleNextClinic}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
            ) : (
              <div className="relative flex justify-center">
                <iframe
                  className='xs:w-[275px] sm:w-[375px] md:w-[560px] xs:h-[315px] md:h-[400px]'
                  src="https://www.youtube.com/embed/KLw0Rik3xps?si=3RnFuOVNWWw6d9im"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            )
          )}
        </div>
    </div>
  )
}

export default teeth