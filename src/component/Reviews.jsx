import React, {useState, useEffect} from 'react'
import styles from '../styles'
import blackwoman from '../assets/blackwoman.png'



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
      image: blackwoman,
      video: 'https://www.youtube.com/watch?v=7XwKnk16Zbs',
      flag: 'https://www.hollywoodsmilecostarica.com/wp-content/uploads/2019/10/american-dental-association.png',
      country: 'USA'
  },
]

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handlePrev = () => {
    setCurrentReview((prevReview) => (prevReview - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
  };

  const review = reviews[currentReview];

  return (
    <div className="bg-[#DDAC681A] padding-y">
      <div className=''>
        <h1 className='text-[50px] font-bold text-[#DDAC68]'>{review.treatment}</h1>
        <span>{review.way}</span>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div>
            <p>{review.review}</p>
            <div className='flex flex-col'>
              <span>{review.name}</span>
              <span>{review.country}</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <img src={review.image} alt={review.name} className="w-60 h-auto button-0" />
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-4 py-2 rounded mt-4">
            Play Video
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-4 py-2 rounded-l"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-4 py-2 rounded-r"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Reviews