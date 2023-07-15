import React from 'react'
import background from '../assets/background.png'
import reward from '../assets/reward.png'
import reward1 from '../assets/reward1.png' 

const main = () => {
  return (
    <div clas>
        <img className="absolute inset-0 w-full h-full object-cover opacity-50" src={background} alt="Background" />
        <div>
            <div>
                <div>
                    Europe Top Dental Practices
                </div>

            </div>
            <div>
                <div>
                    Turkey Best Medical Team
                </div>
            </div>
        </div>
        <div>
            pic
        </div>
        <div className='flex'>
            Img 
            <div>
                <span>No SURPRISES</span>
                <span>NO ADDITIONAL EXPENSES</span>
                <span>NO HIDDEN CHARGES</span>
            </div>
           <div className='w-[300px] h-[400px] bg-[#FFFFFF] rounded-[40px] py-10 items-center flex flex-col shadow-xl'>
                <h1 className='text-2xl font-bold text-main mb-8'> Get A Free Quote</h1>
                <form>
                    <div className='w-full'>
                    <h2 className='text-main text-base font-semibold leading-[90.443%] tracking-tighter w-60 capitalize'>Full Name</h2>
                                <input className='w-full border-none text-[9px] hover:bg-slate-100'
                                onChange={e=> setTitle(e.target.value)}
                                type='text' 
                                required
                                placeholder='Enter Your Full Name'></input>
                                <div className='border mb-10'></div>
                    <h2 className='text-main font-semibold leading-[90.443%] tracking-tighter capitalize'>Phone Number</h2>
                                <input className='w-full border-none text-[10px] hover:bg-slate-100'
                                onChange={e=> setTitle(e.target.value)}
                                type='text' 
                                required
                                placeholder='The name of your shop'></input>
                                <div className='border mb-10'></div>
                    <h2 className='text-main font-semibold leading-[90.443%] tracking-tighter capitalize '>Message</h2>
                                <input className='w-full h-12 border-none text-[10px] hover:bg-slate-100'
                                onChange={e=> setTitle(e.target.value)}
                                type='text' 
                                required
                                placeholder='The name of your shop'></input>
                                <div className='border my-2'></div>
                    </div>
                    <div className='flex pl-11 items-center'>
                        <button className='items-center bg-main rounded-[40px] px-8 py-2 text-white  font-bold'>Submit Now</button>
                    </div>
                </form>
           </div> 
        </div>
    </div>
  )
}

export default main