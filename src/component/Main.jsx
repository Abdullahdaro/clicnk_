import React from 'react'
import background from '../assets/background.png'
import reward from '../assets/reward.png'
import reward1 from '../assets/reward1.png' 
import main1 from '../assets/main1.png'
import styles from '../styles'
import Picture1 from '../assets/Picture1.png'
import Picture2 from '../assets/Picture2.png'
import Picture3 from '../assets/Picture3.png'
import Picture4 from '../assets/Picture4.png'
import Picture5 from '../assets/Picture5.png'
import Picture6 from '../assets/Picture6.png'

const main = () => {
  return (
    <div className={`flex flex-col w-full items-center relative `} >
        <img className="absolute z-0 inset-0 w-full h-full  object-cover opacity-40" src={background} alt="Background" />
        <img className="absolute z-0 inset-0 h-full justify-center w-full object-cover " src={main1} alt="Main1" />
        <div className='z-10 flex pb-40 absolute items-start justify-center'>
                <div className=''>
                    <img src={Picture2} className='w-[300px]' />
                </div>
                <div>
                    <img src={Picture1} className='w-[300px]' />
                </div>
            </div>
        <div className='z-10 flex pt-40 pb-40 flex-col'>
            <div className='flex items-start w-full z-10'>
                <div className='pr-60 justify-start items-start'>
                    <div className='z-10 pl-10'>
                        <img src={Picture3} className='w-[100px]' />
                    </div>
                    <div>
                        <img src={Picture6} className='w-[450px]' />
                    </div>                
                    <div>
                        <img src={Picture5} className='w-[300px]'/>
                    </div>
                </div>
                <div className='z-10 w-[300px] h-[400px] bg-white rounded-[40px] py-10 items-center flex flex-col shadow-xl'>
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
    </div>
  )
}

export default main