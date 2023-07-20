import React from 'react'

const Constant = () => {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='fixed z-10 top-10 left-0'>
        <div className='bg-main border rounded-r-[50px] text-3xl flex flex-row'>
          <div className='px-2'>Tr</div>
          <div className='px-2'>En</div>
          <div className='px-2'>Ar</div>
        </div>
      </div>
      <div className=' fixed z-10 top-10 right-0'>
        <div>
          <div className='bg-main border rounded-l-[50px] rounded-r-none text-2xl px-2 pr-5'>
            Social media
          </div>
        </div>
      </div>
      <div className='fixed z-10 bottom-0 right-0'>
        whatsapp
      </div>
    </div>
  )
}

export default Constant