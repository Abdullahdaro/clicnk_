import React, { useState, useEffect} from 'react'
import blackteeth from '../assets/blackteeth.png'
import blackwomanteeth from '../assets/blackwomanteeth.png'
import girlwithsmileblackhair from '../assets/girlwithsmileblackhair.png'
import oldmansmile from '../assets/oldmansmile.png'
import smilegirlteeth from '../assets/smilegirlteeth.png'
import smileteeth from '../assets/smileteeth.png'
import styles from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import teethContent from './content/teethContent'
import { useLanguage } from '../constant/LanguageContext';

const photos = [
    {
        src: blackteeth,
        alt: 'blackteeth'
    },
    {
        src: blackwomanteeth,
        alt: 'girlteeth'
    },
    {
        src: girlwithsmileblackhair,
        alt: 'girlwithsmileblackhair'
    },
    {
        src: oldmansmile,
        alt: 'oldmansmile'
    },
    {   
        src: smilegirlteeth,
        alt: 'smilegirltheeth'
    },
    {
        src: smileteeth,

    }
]

const teeth = () => {
    const { activeLang } = useLanguage();
    const [currentPhoto, setCurrentPhoto] = useState(0);
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

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
        }, 3000);
    
        return () => clearInterval(timer);
      }, []);
    
      const handlePrev = () => {
        setCurrentPhoto((prevPhoto) => (prevPhoto - 1 + photos.length) % photos.length);
      };
    
      const handleNext = () => {
        setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
      };

  return (
    <div className={`md:${styles.paddingY} sm:gird w-full items-center justify-center bg-bg md:flex`}>
        <div className=" flex md:flex-col xs:gap-1 xs:justify-between md:gap-0 xs:px-4 md:px-0 ">
            <span className='border-main border my-3 text-[#3C3C3B] font-bold md:text-xl xs:text-[10px] rounded-[40px] md:px-4 md:py-2 xs:py-1 xs:px-4'>{teethContent[activeLang].first}</span>
            <span className='border-main border my-3 text-[#3C3C3B] font-bold md:text-xl xs:text-[10px] rounded-[40px] md:px-4 md:py-2 xs:py-1 xs:px-4'>{teethContent[activeLang].second}</span>    
            <span className='border-main border my-3 text-[#3C3C3B] font-bold md:text-xl xs:text-[10px] rounded-[40px] md:px-4 md:py-2 xs:py-1 xs:px-4'>{teethContent[activeLang].third}</span>
            <span className='border-main border my-3 text-[#3C3C3B] font-bold md:text-xl xs:text-[10px] rounded-[40px] md:px-4 md:py-2 xs:py-1 xs:px-4'>{teethContent[activeLang].fourth}</span>
            <a
             href='https://api.whatsapp.com/send?phone=905308309219'className='xs:hidden md:flex'>
<img src={teethContent[activeLang].wp} alt='button' className='w-[225px]  hover:scale-125 transform transition duration-500 ease-in-out'/>
            </a>
        </div>
        <div className="grid gap-4 sm:ml-0 md:ml-24">
  <div className="relative flex">
    <div className="w-full h-full px-2 flex justify-end items-center">
      <button
        className="hover:scale-125 xs:text-[30px] md:text-[60px] text-main font-bold px-4 py-2 rounded-r z-10 transform"
        onClick={handlePrev}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
    <img
      src={photos[currentPhoto].src}
      alt={photos[currentPhoto].alt}
      className={`w-full ${sm ? 'max-w-[275px]' : 'max-w-[550px]'} h-auto rounded-[40px]`}
    />
    <div className="w-full h-full px-2 flex justify-between items-center">
      <button
        className="hover:scale-125 xs:text-[30px] md:text-[60px] text-main font-bold px-4 py-2 rounded-r z-10 transform"
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

export default teeth