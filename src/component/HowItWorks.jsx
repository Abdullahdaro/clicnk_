import React from 'react'
import styles from '../styles'
import Picture7 from '../assets/Picture7.png'

const HowItWorks = () => {
    
  return (
    <div className={`bg-bg1 ${styles.paddingY}`}>
        <div class="text-main items-center flex justify-center lg:text-[75px] leading-normal">
            <h1 className='bg-[#DDAC68] px-20 rounded-[40px] font-semibold bg-opacity-10'>How it works</h1>
        </div>
        <div className='flex justify-between px-10 '>
            <div className='pt-24 pl-20'>
                <div>
                    <h1 className='text-[#3C3C3B] pt-8 sm:text-md md:text-[30px] font-semibold'>Submit a reguest</h1>
                </div>
                <svg width="107" height="50" viewBox="0 0 107 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.9258 36.3008V17.043C22.2227 17.5117 21.4805 18.0195 20.6992 18.5664C19.931 19.1133 19.2214 19.6081 18.5703 20.0508L17.0078 16.3203L22.7695 11.4961H28.1602V36.3008H22.9258Z" fill="#DDAC68"/>
                <rect x="0.60376" width="105.528" height="50" rx="10" fill="#DDAC68" fill-opacity="0.1"/>
                <rect x="0.60376" width="50.2514" height="50" rx="10" fill="#DDAC68" fill-opacity="0.1"/>
                <path opacity="0.3" d="M68.2398 10.8333H79.6931C80.0465 10.8333 80.3885 10.9581 80.6589 11.1857L87.8421 17.231C88.1807 17.516 88.3762 17.9361 88.3762 18.3787V36.4514C88.3762 38.988 88.3471 39.1667 85.732 39.1667H68.2398C65.6247 39.1667 65.5956 38.988 65.5956 36.4514V13.5486C65.5956 11.012 65.6247 10.8333 68.2398 10.8333Z" fill="#DDAC68"/>
                <rect x="69.8669" y="32.0833" width="12.8141" height="1.41667" rx="0.708333" fill="#DDAC68"/>
                <path d="M83.3688 20.7831C83.9561 21.3675 83.9561 22.3148 83.3688 22.8991L76.6056 29.6285C76.3346 29.8981 75.9704 30.0546 75.5874 30.0661L73.2938 30.1346C72.4372 30.1602 71.7324 29.4695 71.7451 28.6169L71.7778 26.4174C71.7836 26.0283 71.9415 25.6567 72.2181 25.3815L79.0409 18.5928C79.6281 18.0085 80.5802 18.0085 81.1675 18.5928L83.3688 20.7831Z" fill="#DDAC68"/>
                </svg>
            </div>
            <div className='pl-20'>
                <div className='pt-24'>
                    <h1 className='text-[#3C3C3B] sm:text-md md:text-[30px] flex flex-warp w-[400px] font-semibold'>Receive a treatment plan within 24 Hours</h1>
                </div>
                <svg width="106" height="50" viewBox="0 0 106 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M68.2743 10H80.4335C80.787 10 81.129 10.1248 81.3994 10.3523L89.0611 16.8005C89.3998 17.0855 89.5953 17.5055 89.5953 17.9481V37.125C89.5953 39.8108 89.5644 40 86.7956 40H68.2743C65.5054 40 65.4746 39.8108 65.4746 37.125V12.875C65.4746 10.1892 65.5054 10 68.2743 10Z" fill="#DDAC68"/>
                <rect x="68.4895" y="23.5" width="13.5679" height="3" rx="1" fill="#DDAC68"/>
                <rect x="68.4895" y="29.5" width="7.53771" height="3" rx="1" fill="#DDAC68"/>
                <rect x="0.147705" width="105.528" height="50" rx="10" fill="#DDAC68" fill-opacity="0.1"/>
                <rect x="0.147705" width="50.2514" height="50" rx="10" fill="#DDAC68" fill-opacity="0.1"/>
                <path d="M17.8013 12.3359C18.5565 11.9323 19.4289 11.6198 20.4185 11.3984C21.4211 11.1641 22.4367 11.0469 23.4653 11.0469C24.507 11.0339 25.5291 11.1445 26.5317 11.3789C27.5343 11.6003 28.4263 11.9648 29.2075 12.4727C30.0018 12.9674 30.6398 13.612 31.1216 14.4062C31.6034 15.1875 31.8442 16.138 31.8442 17.2578C31.8442 18.3646 31.5057 19.4258 30.8286 20.4414C30.1515 21.457 29.1294 22.3229 27.7622 23.0391C29.3898 23.7812 30.5877 24.6862 31.356 25.7539C32.1372 26.8216 32.5278 28.1042 32.5278 29.6016C32.5278 30.8776 32.2609 31.9779 31.7271 32.9023C31.2062 33.8138 30.5096 34.5625 29.6372 35.1484C28.7778 35.7214 27.7948 36.1445 26.688 36.418C25.5942 36.6784 24.4679 36.8021 23.3091 36.7891C22.1632 36.776 21.0369 36.6328 19.9302 36.3594C18.8234 36.0729 17.8403 35.6693 16.981 35.1484L18.1138 31.5938C18.5955 31.9453 19.1619 32.2122 19.813 32.3945C20.464 32.5768 21.1346 32.681 21.8247 32.707C22.5148 32.7331 23.1919 32.6875 23.856 32.5703C24.52 32.4531 25.1125 32.2643 25.6333 32.0039C26.1541 31.7305 26.5773 31.3984 26.9028 31.0078C27.2284 30.6042 27.3911 30.1354 27.3911 29.6016C27.3911 29.1328 27.2479 28.6641 26.9614 28.1953C26.675 27.7135 26.2388 27.2839 25.6528 26.9062C25.0799 26.5286 24.3507 26.2161 23.4653 25.9688C22.5929 25.7214 21.5708 25.5911 20.3989 25.5781L20.2036 21.9258C20.8026 21.8477 21.4666 21.7109 22.1958 21.5156C22.938 21.3073 23.6346 21.0339 24.2856 20.6953C24.9497 20.3568 25.5096 19.9596 25.9653 19.5039C26.4341 19.0352 26.688 18.4948 26.7271 17.8828C26.675 17.3099 26.5122 16.8281 26.2388 16.4375C25.9653 16.0469 25.6203 15.7409 25.2036 15.5195C24.7869 15.2852 24.3182 15.1354 23.7974 15.0703C23.2765 14.9922 22.7427 14.9792 22.1958 15.0312C21.6619 15.0703 21.1346 15.168 20.6138 15.3242C20.0929 15.4805 19.6307 15.6758 19.2271 15.9102L17.8013 12.3359Z" fill="#DDAC68"/>
                </svg>

            </div>
            <div className='pr-20 pt-20'>
                <div>
                    <h1 className='text-[#3C3C3B] sm:text-md md:text-[30px] font-semibold'>Get treated and fly back</h1>
                </div>
                <svg width="107" height="50" viewBox="0 0 107 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.676514" width="105.528" height="50" rx="10" fill="#DDAC68" fill-opacity="0.1"/>
                <rect x="0.676514" width="50.2514" height="50" rx="10" fill="#DDAC68" fill-opacity="0.1"/>
                <path d="M67.6708 32.3412H64.7562C64.0276 32.2808 63.3484 31.9502 62.8534 31.4148C62.3583 30.8796 62.0835 30.1786 62.0835 29.4512C62.0835 28.7237 62.3583 28.0228 62.8534 27.4875C63.3484 26.9522 64.0276 26.6215 64.7562 26.5612H69.3794L72.3542 23.6012L64.1934 18.6012C63.5652 18.2147 63.1078 17.6054 62.9138 16.8963C62.7197 16.1871 62.8035 15.4312 63.1482 14.7812C63.3004 14.4092 63.5275 14.0721 63.8156 13.7909C64.1037 13.5096 64.4467 13.29 64.8234 13.1457C65.2001 13.0014 65.6025 12.9355 66.0058 12.9519C66.4091 12.9683 66.8047 13.0667 67.1683 13.2412L77.8216 18.1412L82.9674 12.9612C83.5217 12.4095 84.2737 12.0996 85.0578 12.0996C85.8419 12.0996 86.5939 12.4095 87.1483 12.9612C87.7026 13.5128 88.0142 14.261 88.0142 15.0412C88.0142 15.8213 87.7026 16.5695 87.1483 17.1212L81.9422 22.2412L86.8669 32.9412C87.0289 33.2974 87.1173 33.6826 87.1268 34.0736C87.1364 34.4644 87.0671 34.8534 86.9225 35.2172C86.7782 35.5808 86.5619 35.912 86.2866 36.191C86.011 36.47 85.6821 36.6912 85.3191 36.8412C84.6659 37.1842 83.9061 37.2674 83.1935 37.0744C82.4807 36.8814 81.8683 36.4262 81.4799 35.8012L76.4548 27.6812L73.4799 30.6412V35.2412C73.4192 35.9662 73.0869 36.642 72.5489 37.1346C72.0109 37.6272 71.3065 37.9006 70.5753 37.9006C69.8442 37.9006 69.1398 37.6272 68.6018 37.1346C68.0638 36.642 67.7315 35.9662 67.6708 35.2412V32.3412Z" stroke="#DDAC68" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.8926 32.2383C20.9342 32.6159 21.9759 32.7852 23.0176 32.7461C24.0723 32.707 25.0163 32.5117 25.8496 32.1602C26.6829 31.7956 27.3535 31.3008 27.8613 30.6758C28.3822 30.0508 28.6426 29.3477 28.6426 28.5664C28.6426 27.6549 28.4277 26.9453 27.998 26.4375C27.5684 25.9167 26.9889 25.5326 26.2598 25.2852C25.5306 25.0247 24.6777 24.8685 23.7012 24.8164C22.7376 24.7513 21.709 24.7188 20.6152 24.7188H19.3066L19.2676 11.4961H32.4121V16.0078H23.7988V19.9922C25.3874 20.0182 26.8066 20.2266 28.0566 20.6172C29.3066 21.0078 30.3613 21.5677 31.2207 22.2969C32.0931 23.026 32.7507 23.918 33.1934 24.9727C33.6491 26.0273 33.8704 27.2253 33.8574 28.5664C33.8704 29.8555 33.6361 30.9883 33.1543 31.9648C32.6725 32.9284 32.0215 33.7487 31.2012 34.4258C30.3809 35.0898 29.4368 35.6172 28.3691 36.0078C27.3145 36.3854 26.2142 36.6328 25.0684 36.75C23.9225 36.8542 22.7767 36.8281 21.6309 36.6719C20.485 36.5156 19.4238 36.2422 18.4473 35.8516L19.8926 32.2383Z" fill="#DDAC68"/>
                </svg>
            </div>
        </div>
        <div className="relative">
            <div className="border-t-2 border-white h-1"></div>
            <div className="wave-line"></div>
        </div>
        <div className='flex justify-between px-10 pt-5'>
            <div>
                <svg width="107" height="50" viewBox="0 0 107 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.739502" width="105.528" height="50" rx="10" fill="#DDAC68" fill-opacity="0.1"/>
                <rect x="0.739502" width="50.2514" height="50" rx="10" fill="#DDAC68" fill-opacity="0.1"/>
                <g clip-path="url(#clip0_0_1)">
                <path d="M78.5877 36.1777C77.5766 36.8115 76.3779 37.0819 75.1909 36.944C74.0039 36.806 72.9 36.2681 72.063 35.4193L71.3337 34.6793C71.0103 34.3475 70.8315 33.9023 70.836 33.4401C70.8406 32.978 71.0283 32.5362 71.3582 32.2108L74.4896 29.175C74.8198 28.8544 75.2641 28.6769 75.7254 28.6814C76.1867 28.6859 76.6274 28.8721 76.9511 29.1991C77.2781 29.5274 77.722 29.7141 78.1865 29.7187C78.651 29.7232 79.0985 29.5453 79.432 29.2235L84.423 24.3543C84.753 24.029 84.9406 23.5873 84.9452 23.1251C84.9498 22.663 84.7709 22.2177 84.4475 21.8859C84.1252 21.5574 83.9469 21.1153 83.9514 20.6563C83.956 20.1973 84.1431 19.7588 84.4718 19.4367L87.4871 16.3804C87.8205 16.0586 88.2681 15.8807 88.7325 15.8853C89.1971 15.8898 89.6411 16.0765 89.9679 16.4048L90.6972 17.1448C91.5487 17.9826 92.0858 19.0856 92.2186 20.2697C92.3517 21.4539 92.0724 22.6476 91.4274 23.6516C87.9984 28.6108 83.6385 32.8642 78.5877 36.1777Z" stroke="#DDAC68" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M79.6341 11.9643C77.9797 11.9643 76.3414 12.2885 74.8128 12.9185C73.2843 13.5485 71.8954 14.4719 70.7255 15.6359C69.5556 16.8 68.6276 18.1819 67.9944 19.7028C67.3613 21.2237 67.0354 22.8538 67.0354 24.5" stroke="#DDAC68" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M79.6341 16.7857C77.5779 16.7857 75.6058 17.5985 74.1519 19.0452C72.6979 20.4919 71.881 22.4541 71.881 24.5" stroke="#DDAC68" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <path d="M34.0767 37.3008H18.354L17.7876 33.1602C18.3475 32.5742 18.9725 31.9557 19.6626 31.3047C20.3527 30.6406 21.0493 29.957 21.7524 29.2539C22.4686 28.5508 23.1652 27.8346 23.8423 27.1055C24.5324 26.3633 25.1509 25.6211 25.6978 24.8789C26.2446 24.1237 26.7004 23.3815 27.0649 22.6523C27.4295 21.9102 27.6444 21.181 27.7095 20.4648C27.6574 19.6576 27.4751 18.9935 27.1626 18.4727C26.8631 17.9388 26.479 17.5286 26.0103 17.2422C25.5415 16.9557 25.0142 16.7799 24.4282 16.7148C23.8423 16.6497 23.2368 16.6823 22.6118 16.8125C21.9868 16.9297 21.3683 17.1315 20.7563 17.418C20.1574 17.6914 19.6105 18.0365 19.1157 18.4531L17.3774 14.5078C18.6925 13.6484 19.9816 13.0234 21.2446 12.6328C22.5076 12.2422 23.8162 12.0469 25.1704 12.0469C26.3944 12.0469 27.5076 12.2552 28.5103 12.6719C29.5129 13.0885 30.3657 13.6549 31.0688 14.3711C31.785 15.0742 32.3384 15.8945 32.729 16.832C33.1196 17.7565 33.3149 18.7331 33.3149 19.7617C33.3149 20.6341 33.1717 21.4805 32.8853 22.3008C32.5988 23.1211 32.2082 23.9154 31.7134 24.6836C31.2316 25.4518 30.6782 26.194 30.0532 26.9102C29.4282 27.6263 28.7707 28.3164 28.0806 28.9805C27.4035 29.6445 26.7264 30.276 26.0493 30.875C25.3722 31.474 24.7407 32.0469 24.1548 32.5938H34.0767V37.3008Z" fill="#DDAC68"/>
                <defs>
                <clipPath id="clip0_0_1">
                <rect width="27.1357" height="27" fill="white" transform="translate(66.0663 11)"/>
                </clipPath>
                </defs>
                </svg>
                <div>
                    <h1 className='text-[#3C3C3B] pt-8 sm:text-md md:text-[30px] w-[300px] font-semibold'>Qualident medical consultant will be in contact with you</h1>
                </div>
            </div>
            <div>
            <svg width="107" height="50" viewBox="0 0 107 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.766113" width="105.528" height="50" rx="10" fill="#DDAC68" fill-opacity="0.1"/>
                <rect x="0.766113" width="50.2514" height="50" rx="10" fill="#DDAC68" fill-opacity="0.1"/>
                <rect x="66.0929" y="34" width="28.1408" height="3" fill="#DDAC68"/>
                <rect x="69.108" y="27" width="22.1106" height="3" fill="#DDAC68"/>
                <rect x="69.108" y="19" width="22.1106" height="3" fill="#DDAC68"/>
                <rect x="66.0929" y="11" width="28.1408" height="3" fill="#DDAC68"/>
                <path d="M26.8962 27.832L26.9743 20.9375L21.2907 27.832H26.8962ZM26.8766 38.3008V32.6758H16.486V28.0859L28.4587 13.1836H31.8376V27.832H34.2204V32.6758H31.8376V38.3008H26.8766Z" fill="#DDAC68"/>
                </svg>
                <div className=''>
                    <h1 className='text-[#3C3C3B] sm:text-md md:text-[30px] flex flex-warp  w-[300px] font-semibold'>Arranging your medical trip</h1>
                </div>
            </div>
            <div>
                <svg width="106" height="50" viewBox="0 0 106 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.164185" width="105.528" height="50" rx="10" fill="#DDAC68" fill-opacity="0.1"/>
                <rect x="0.164185" width="50.2514" height="50" rx="10" fill="#DDAC68" fill-opacity="0.1"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M84.5865 24H79.5613V19C79.5613 19 79.5613 18 78.5563 18C77.5513 18 77.5513 19 77.5513 19V26H84.5865C84.5865 26 85.5915 25.8284 85.5915 25C85.5915 24.1716 84.5865 24 84.5865 24ZM69.5111 29H74.5362V34C74.5362 34 74.5362 35 75.5412 35C76.5463 35 76.5463 34 76.5463 34V27H69.5111C69.5111 27 68.506 27.1716 68.506 28C68.506 28.8284 69.5111 29 69.5111 29Z" fill="#DDAC68"/>
                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M81.4479 20.709C81.0564 21.0986 81.0582 21.7319 81.4497 22.1215C81.8412 22.511 82.4777 22.5128 82.8692 22.1232L85.7154 19.2913C86.1069 18.9017 86.1051 18.2684 85.7136 17.8788C85.3221 17.4893 84.6856 17.4875 84.2941 17.8771L81.4479 20.709ZM68.3825 33.709C67.991 34.0986 67.9928 34.7319 68.3843 35.1215C68.7758 35.511 69.4123 35.5128 69.8038 35.1232L72.6501 32.2913C73.0416 31.9017 73.0398 31.2684 72.6483 30.8788C72.2568 30.4893 71.6202 30.4875 71.2287 30.8771L68.3825 33.709Z" fill="#DDAC68"/>
                <path d="M25.7474 32.1211C26.2683 32.1211 26.7305 32.0039 27.1342 31.7695C27.5508 31.5352 27.8959 31.2422 28.1693 30.8906C28.4558 30.5391 28.6706 30.1615 28.8138 29.7578C28.9701 29.3542 29.0482 28.9766 29.0482 28.625C28.9831 28.0651 28.8073 27.5573 28.5209 27.1016C28.2344 26.6458 27.8763 26.2552 27.4467 25.9297C27.03 25.5911 26.5612 25.3307 26.0404 25.1484C25.5196 24.9661 24.9857 24.875 24.4388 24.875C24.0222 24.875 23.6055 24.9336 23.1888 25.0508C22.7852 25.168 22.4011 25.3503 22.0365 25.5977C21.8412 26.3008 21.7761 27.043 21.8412 27.8242C21.9193 28.5924 22.1146 29.3021 22.4271 29.9531C22.7396 30.5911 23.1758 31.1185 23.7357 31.5352C24.2956 31.9518 24.9662 32.1471 25.7474 32.1211ZM16.9388 27.668C16.9388 26.1966 17.1797 24.6927 17.6615 23.1562C18.1563 21.6198 18.8529 20.1224 19.7513 18.6641C20.6498 17.2057 21.7305 15.832 22.9935 14.543C24.2696 13.2409 25.6888 12.0951 27.2513 11.1055C27.4076 11.2878 27.6029 11.5352 27.8373 11.8477C28.0717 12.1471 28.3125 12.4596 28.5599 12.7852C28.8073 13.0977 29.0417 13.3971 29.2631 13.6836C29.4974 13.9701 29.6732 14.1849 29.7904 14.3281C26.8868 16.2161 24.8555 18.2734 23.6967 20.5C23.9961 20.4219 24.3151 20.3633 24.6537 20.3242C24.9922 20.2721 25.3243 20.2461 25.6498 20.2461C26.6263 20.2461 27.5834 20.4219 28.5209 20.7734C29.4714 21.125 30.3243 21.6458 31.0795 22.3359C31.8347 23.013 32.4401 23.8594 32.8959 24.875C33.3646 25.8906 33.599 27.056 33.599 28.3711C33.599 29.5951 33.3907 30.7214 32.974 31.75C32.5704 32.7656 31.9974 33.6445 31.2552 34.3867C30.5261 35.1289 29.6537 35.7083 28.6381 36.125C27.6224 36.5286 26.5026 36.7305 25.2787 36.7305C23.9375 36.7305 22.7461 36.5091 21.7045 36.0664C20.6758 35.6237 19.8034 35.0052 19.0873 34.2109C18.3842 33.4036 17.8503 32.4466 17.4857 31.3398C17.1211 30.2201 16.9388 28.9961 16.9388 27.668Z" fill="#DDAC68"/>
                </svg>
                <div>
                    <h1 className='text-[#3C3C3B] sm:text-md md:text-[30px] w-[300px] font-semibold'>Staying in touch with you after treatment</h1>
                </div>
            </div>
        </div>


    </div>
  )
}

export default HowItWorks