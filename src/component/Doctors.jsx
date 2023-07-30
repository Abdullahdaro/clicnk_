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
        name: 'Dr. Ghazwan Ghazi',
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
      <div className='bg-[#DDAC681F] w-full items-center flex justify-center p-10'>
      <a
        href='https://api.whatsapp.com/send?phone=905308309219' className='xs:hidden md:flex'>
                <svg width="225" height="100" viewBox="0 0 344 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_311)">
                <rect x="4" width="336" height="92" rx="15" fill="url(#paint0_linear_1_311)"/>
                </g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M82.0071 51.2049C81.3415 50.8719 78.0691 49.2621 77.4589 49.0401C76.8488 48.8181 76.4052 48.707 75.9614 49.3731C75.5177 50.0393 74.2421 51.538 73.8538 51.9821C73.4655 52.4261 73.0773 52.4818 72.4117 52.1486C71.7461 51.8156 69.6014 51.1129 67.0591 48.846C65.0804 47.0817 63.7446 44.9025 63.3562 44.2364C62.968 43.5703 63.3149 43.2102 63.6482 42.8784C63.9475 42.5804 64.3137 42.1013 64.6465 41.7128C64.9793 41.3242 65.0903 41.0466 65.3122 40.6026C65.534 40.1585 65.4231 39.7699 65.2566 39.4368C65.0903 39.1038 63.7592 35.8286 63.2045 34.4964C62.6643 33.1989 62.1155 33.3745 61.7069 33.3541C61.3191 33.3348 60.875 33.3307 60.4312 33.3307C59.9875 33.3307 59.2664 33.4973 58.6562 34.1633C58.0461 34.8294 56.3267 36.4394 56.3267 39.7144C56.3267 42.9895 58.7118 46.1535 59.0446 46.5977C59.3774 47.0418 63.7381 53.7627 70.415 56.6449C72.003 57.3305 73.2429 57.7398 74.2095 58.0466C75.804 58.553 77.255 58.4816 78.4019 58.3102C79.6807 58.1192 82.3399 56.7004 82.8946 55.1462C83.4492 53.5919 83.4492 52.2596 83.2828 51.9821C83.1165 51.7046 82.6727 51.538 82.0071 51.2049ZM69.8623 67.7819H69.8534C65.8804 67.7803 61.9837 66.7135 58.5843 64.6968L57.7758 64.2169L49.3959 66.4146L51.6327 58.2469L51.1061 57.4095C48.8898 53.8854 47.7193 49.8122 47.721 45.63C47.7258 33.4263 57.6583 23.4977 69.8712 23.4977C75.7849 23.5 81.3441 25.8053 85.5243 29.9889C89.7046 34.1726 92.0055 39.7338 92.0032 45.648C91.9982 57.8526 82.0658 67.7819 69.8623 67.7819ZM88.7059 26.8098C83.6766 21.7762 76.9881 19.0028 69.8621 19C55.1793 19 43.2293 30.9454 43.2234 45.6283C43.2215 50.3218 44.4481 54.9034 46.7791 58.9416L43 72.7412L57.1216 69.0382C61.0124 71.1597 65.393 72.2776 69.8515 72.2796H69.8624H69.8625C84.5438 72.2796 96.4949 60.3326 96.5009 45.6496C96.5036 38.534 93.7354 31.8433 88.7059 26.8098Z" fill="white"/>
                <path d="M143.08 51.3203C142.768 54.2109 141.635 56.5091 139.682 58.2148C137.742 59.9076 135.274 60.7539 132.28 60.7539C128.764 60.7539 125.971 59.582 123.901 57.2383C121.83 54.8945 120.795 51.724 120.795 47.7266C120.795 43.638 121.83 40.3958 123.901 38C125.971 35.6042 128.764 34.4062 132.28 34.4062C135.235 34.4062 137.69 35.2135 139.643 36.8281C141.596 38.4297 142.742 40.5977 143.08 43.332H137.846C137.677 41.9909 137.097 40.9232 136.108 40.1289C135.118 39.3346 133.855 38.9375 132.319 38.9375C130.379 38.9375 128.862 39.7122 127.768 41.2617C126.674 42.7982 126.127 44.9401 126.127 47.6875C126.127 50.3568 126.674 52.4466 127.768 53.957C128.862 55.4674 130.379 56.2227 132.319 56.2227C133.855 56.2227 135.118 55.7865 136.108 54.9141C137.097 54.0286 137.677 52.8307 137.846 51.3203H143.08ZM154.273 60.5391C151.382 60.5391 149.084 59.6732 147.378 57.9414C145.672 56.2096 144.82 53.8724 144.82 50.9297C144.82 47.9219 145.672 45.5326 147.378 43.7617C149.084 41.9779 151.382 41.0859 154.273 41.0859C157.176 41.0859 159.474 41.9779 161.167 43.7617C162.873 45.5326 163.726 47.9219 163.726 50.9297C163.726 53.8724 162.873 56.2096 161.167 57.9414C159.474 59.6732 157.176 60.5391 154.273 60.5391ZM154.273 56.4766C155.718 56.4766 156.818 56.0013 157.573 55.0508C158.342 54.0872 158.726 52.694 158.726 50.8711C158.726 49.0091 158.342 47.5964 157.573 46.6328C156.818 45.6562 155.718 45.168 154.273 45.168C152.814 45.168 151.708 45.6562 150.952 46.6328C150.21 47.5964 149.839 49.0091 149.839 50.8711C149.839 52.694 150.21 54.0872 150.952 55.0508C151.708 56.0013 152.814 56.4766 154.273 56.4766ZM166.344 60.0703V41.5742H168.648H170.973V44.3281C171.168 43.9896 171.376 43.6771 171.598 43.3906C172.809 41.8542 174.553 41.0859 176.832 41.0859C178.785 41.0859 180.315 41.6654 181.422 42.8242C182.529 43.9831 183.082 45.5846 183.082 47.6289V60.0703H180.641H178.199V48.5078C178.199 47.375 177.952 46.5352 177.457 45.9883C176.962 45.4284 176.207 45.1484 175.191 45.1484C173.915 45.1484 172.932 45.5326 172.242 46.3008C171.552 47.069 171.207 48.1823 171.207 49.6406V60.0703H168.785H166.344ZM195.29 60.168C194.47 60.2331 193.467 60.2656 192.282 60.2656C190.55 60.2656 189.307 59.9596 188.552 59.3477C187.809 58.7357 187.438 57.7266 187.438 56.3203V44.9922H184.86V41.5742H187.438V36.6133H192.302V41.5742H195.29V44.9922H192.302V55.5C192.302 55.9297 192.432 56.2161 192.692 56.3594C192.953 56.4896 193.48 56.5547 194.274 56.5547H195.29V60.168ZM202.029 60.5391C200.31 60.5391 198.93 60.0508 197.888 59.0742C196.847 58.0977 196.326 56.8086 196.326 55.207C196.326 53.5273 196.795 52.1797 197.732 51.1641C198.683 50.1484 200.056 49.5104 201.853 49.25L205.076 48.8008C205.909 48.6836 206.606 48.4948 207.166 48.2344C207.4 48.1172 207.582 47.9154 207.713 47.6289C207.843 47.3294 207.888 47.0234 207.849 46.7109C207.784 46.1901 207.517 45.7865 207.048 45.5C206.502 45.1484 205.707 44.9727 204.666 44.9727C203.728 44.9727 202.999 45.2005 202.478 45.6562C201.957 46.099 201.684 46.737 201.658 47.5703H196.97C197.074 45.4089 197.81 43.7878 199.177 42.707C200.558 41.6263 202.569 41.0859 205.213 41.0859C207.517 41.0859 209.334 41.5742 210.662 42.5508C211.99 43.5143 212.654 44.8359 212.654 46.5156V56.8477C212.654 57.668 212.719 58.2474 212.849 58.5859C212.992 58.9245 213.272 59.1849 213.689 59.3672V59.3867V60.0508H211.052H208.416C208.194 59.3086 208.051 58.5794 207.986 57.8633L207.966 57.8242C206.443 59.6341 204.464 60.5391 202.029 60.5391ZM207.888 53.2344V51.125C207.315 51.4375 206.567 51.6914 205.642 51.8867L203.845 52.2188C202.999 52.375 202.354 52.668 201.912 53.0977C201.469 53.5143 201.248 54.0482 201.248 54.6992C201.248 55.4414 201.443 56.0208 201.834 56.4375C202.237 56.8542 202.791 57.0625 203.494 57.0625C205.069 57.0625 206.319 56.5156 207.244 55.4219C207.426 55.2005 207.576 54.8815 207.693 54.4648C207.823 54.0482 207.888 53.638 207.888 53.2344ZM232.147 53.2148C231.886 55.5195 231.027 57.3164 229.569 58.6055C228.11 59.8945 226.209 60.5391 223.866 60.5391C221.066 60.5391 218.905 59.7122 217.381 58.0586C215.858 56.3919 215.096 54.0156 215.096 50.9297C215.096 47.9219 215.884 45.5326 217.459 43.7617C219.048 41.9779 221.183 41.0859 223.866 41.0859C226.248 41.0859 228.195 41.7435 229.705 43.0586C231.229 44.3737 232.043 46.099 232.147 48.2344H227.166C227.127 47.3229 226.802 46.5872 226.19 46.0273C225.591 45.4544 224.816 45.168 223.866 45.168C222.642 45.168 221.711 45.6628 221.073 46.6523C220.435 47.6289 220.116 49.0547 220.116 50.9297C220.116 52.7656 220.435 54.1654 221.073 55.1289C221.711 56.0794 222.642 56.5547 223.866 56.5547C224.751 56.5547 225.5 56.2487 226.112 55.6367C226.724 55.0247 227.075 54.2174 227.166 53.2148H232.147ZM243.241 60.168C242.421 60.2331 241.418 60.2656 240.234 60.2656C238.502 60.2656 237.258 59.9596 236.503 59.3477C235.761 58.7357 235.39 57.7266 235.39 56.3203V44.9922H232.812V41.5742H235.39V36.6133H240.253V41.5742H243.241V44.9922H240.253V55.5C240.253 55.9297 240.383 56.2161 240.644 56.3594C240.904 56.4896 241.432 56.5547 242.226 56.5547H243.241V60.168ZM273.673 50.6562C273.673 54.224 272.885 56.8021 271.309 58.3906C269.734 59.9661 267.162 60.7539 263.595 60.7539C260.17 60.7539 257.631 59.9336 255.977 58.293C254.337 56.6393 253.51 54.0938 253.497 50.6562V35.0898H256.095H258.712V50.832C258.712 52.6159 259.115 53.957 259.923 54.8555C260.73 55.7539 261.954 56.2031 263.595 56.2031C265.339 56.2031 266.583 55.793 267.325 54.9727C268.067 54.1393 268.438 52.7591 268.438 50.832V35.0898H271.055H273.673V50.6562ZM288.087 47.1211C288.087 46.4049 287.788 45.832 287.189 45.4023C286.603 44.9727 285.822 44.7578 284.845 44.7578C283.908 44.7578 283.172 44.9206 282.638 45.2461C282.117 45.5716 281.857 46.0208 281.857 46.5938C281.857 46.9974 282.157 47.349 282.755 47.6484C283.354 47.9349 284.403 48.2474 285.9 48.5859C288.895 49.25 290.893 49.9792 291.896 50.7734C292.912 51.5677 293.42 52.8177 293.42 54.5234C293.42 56.3333 292.684 57.7917 291.212 58.8984C289.741 59.9922 287.808 60.5391 285.412 60.5391C282.573 60.5391 280.386 59.9987 278.849 58.918C277.313 57.8242 276.492 56.2357 276.388 54.1523H281.349C281.388 54.9987 281.766 55.6628 282.482 56.1445C283.198 56.6263 284.175 56.8672 285.412 56.8672C286.388 56.8672 287.15 56.7044 287.697 56.3789C288.244 56.0404 288.517 55.5716 288.517 54.9727C288.517 54.556 288.25 54.1979 287.716 53.8984C287.183 53.612 286.252 53.3255 284.923 53.0391C281.798 52.3359 279.709 51.5938 278.654 50.8125C277.599 50.0443 277.072 48.8464 277.072 47.2188C277.072 45.3828 277.755 43.9049 279.123 42.7852C280.49 41.6523 282.287 41.0859 284.513 41.0859C287.026 41.0859 289.051 41.6393 290.587 42.7461C292.137 43.8529 292.912 45.3112 292.912 47.1211H288.087Z" fill="white"/>
                <defs>
                <filter id="filter0_d_1_311" x="0" y="0" width="344" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_311"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_311" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_1_311" x1="-49.5" y1="46" x2="445.5" y2="45.9999" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DDAC68"/>
                <stop offset="0.992395" stop-color="#F2CF9D"/>
                </linearGradient>
                </defs>
                </svg>
            </a>
      </div>
    </div>
    
  )
}

export default Doctors