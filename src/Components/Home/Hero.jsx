import React from 'react'

function Hero() {
  return (
    <div className='bg-hero-pattern  bg-no-repeat bg-cover flex justify-center items-center'>
      <div className='py-44 text-center font-bold flex flex-col gap-8'>
        <p className='text-[36px]'>WORK HARDER, GET STRONGER!!!</p>
        <p className='text-[56px]'>EASY WITH <span className='text-red-600'>POWER</span> GYM</p>
        <p className='font-medium'>Lorem ipsum dolor sit amet consectetur. <br/>Sit ultrices in nisl ut sem neque malesuada.</p>
        <button className='bg-red-600 py-3 px-6 rounded-2xl text-bold'>BECOME A MEMBER</button>
      </div>
    </div>
  )
}

export default Hero
