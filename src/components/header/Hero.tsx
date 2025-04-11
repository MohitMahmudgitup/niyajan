import React from 'react'
import Container from '../Container'
import { benar } from '@/constants'
import Link from 'next/link'
import { HiArrowSmRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div className='bg-[#115061] py-16 md:py-20 text-amber-50'>
      <Container className='flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-0 px-4 md:px-8 lg:px-0'>
        
        {/* Left Content */}
        <div className='flex flex-col gap-4 text-center lg:text-left items-center lg:items-start'>
          <p className='text-sm md:text-base font-semibold'>{benar?.priceText}</p>
          <h1 className='text-3xl md:text-5xl font-bold max-w-[500px]'>{benar?.title}</h1>
          <h3 className='text-base md:text-lg font-bold'>{benar.textOne} <span className='text-yellow-300'>{benar.offerPrice}</span> {benar.textTwo}</h3>
          <Link  href={benar.shopNow} className='cursor-pointer flex items-center gap-1 bg-amber-50 text-black rounded-md px-5 py-3 text-sm font-semibold hover:bg-transparent hover:text-amber-50 border border-transparent hover:border-white/40 duration-200'>
            Shop Now <HiArrowSmRight size={19}/>
          </Link>
        </div>

        {/* Right Image */}
        <div className='max-w-[300px] md:max-w-[400px]'>
          <img 
            src={benar.image}
            alt="Smart Watch" 
            className='w-full object-contain'
          />
        </div>
        
      </Container>
    </div>
  )
}

export default Hero
