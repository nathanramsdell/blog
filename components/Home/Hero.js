import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='flex flex-col items-center justify-center py-16 px-2'>
        <p className='font-bold'>The blog</p>
        <div className='relative'>
          <h1 className='text-6xl font-bold mb-6 mt-3'>Writings from our team</h1>
          <Image
            src="/drops.svg"
            alt="drop image"
            className="hidden md:block absolute top-0 right-[-40px]"
            width={40}
            height={24}
            priority
          />
        </div>
        <p>The latest industry news, interviews, technologies, and resources.</p>
      </div>
    </div>
  )
}

export default Hero