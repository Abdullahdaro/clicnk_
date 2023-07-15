import React from 'react'

const Constant = () => {
  return (
    <div className='container'>
      <div className='absolute top-0 left-0'>
        <div className='bg-main border rounded-r-[50px] text-3xl flex flex-row'>
          <div className='px-2'>Tr</div>
          <div className='px-2'>en</div>
          <div className='px-2'>ar</div>
        </div>
      </div>
      <div className='absolute top-0 right-0'>
        <div>
          <div className='bg-main border rounded-l-[50px] rounded-r-none text-2xl px-2 pr-5'>
            Social media
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 right-0'>
        whatsapp
      </div>
    </div>
  )
}

export default Constant