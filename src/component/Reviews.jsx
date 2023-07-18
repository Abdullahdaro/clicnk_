import React, {useState, useEffect} from 'react'
import styles from '../styles'
import blackwoman from '../assets/blackwoman.png'
import girlwithsmile from '../assets/girlwithsmile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCirclePlay } from '@fortawesome/free-solid-svg-icons';



const reviews = [
    {
        name: 'Elif S...',
        treatment: 'Q HollyWood Smile',
        way: 'ZirconilumCrowns',
        review: 'The process was easier, quicker and better than I expected',   
        image: blackwoman,
        video: 'https://www.youtube.com/watch?v=7XwKnk16Zbs',
        flag: 'https://www.hollywoodsmilecostarica.com/wp-content/uploads/2019/10/american-dental-association.png',
        country: 'USA'
    },
    {
      name: 'John Doe',
      treatment: 'Q HollyWood Smile',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus luctus, nisl nunc aliquam urna, vitae aliquam nisl nunc eu nunc. Sed euismod, diam id rhoncus luctus, nisl nunc aliquam urna, vitae aliquam nisl nunc eu nunc.',
      image: girlwithsmile,
      video: 'https://www.youtube.com/watch?v=7XwKnk16Zbs',
      flag: 'https://www.hollywoodsmilecostarica.com/wp-content/uploads/2019/10/american-dental-association.png',
      country: 'USA'
  },
]

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className={` bg-[#DDAC681A] justify-start flex items-start`}>
      <div className='ml-16 justify-start items-start flex pt-40 flex-col'>
        <h1 className='text-[50px] font-bold text-[#DDAC68] leading-tight w-[438px] '>{review.treatment}</h1>
        <span className='text-[#3C3C3B] text-[18px] leading-tight font-semibold'>{review.way}</span>
        <div className='pt-14'>
            <p className='w-[438px] text-[#3C3C3B] text-[22px] leading-tight font-semibold '>{review.review}</p>
            <div className='flex mt-16 flex-col'>
              <span>{review.name}</span>
              <span>{review.country}</span>
            </div>
          </div>
      </div>
      <div className="flex w-full relative">
      <div className='items-end justify-end flex absolute bottom-0 transform left-[550px] z-0'>
            <img src={nextReview.image} alt={nextReview.name} className="w-80 justify-end opacity-40" />
        </div>
        <div className="flex justify-center  w-[700px] relative">
          <button
            className="hover:text-[80px] text-[60px] text-main font-bold px-4 py-2 rounded-r absolute z-10 top-1/2 transform -translate-y-1/2 left-2"
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="relative">
            <img src={review.image} alt={review.name} className="w-[500px] z-10 button-0" />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[60px] opacity-90 hover:bg-gray-600 text-white font-bold px-4 py-2 rounded">
              <FontAwesomeIcon icon={faCirclePlay} />
            </button>
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
  )
}

export default Reviews