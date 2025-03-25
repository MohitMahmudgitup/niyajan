import React from 'react'
import Container from '../Container'
import { FaTruckFast } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
function TopHeader() {
  return (
    <header className='bg-gray-900 text-white py-1'>
      <Container className=' flex  items-center text-sm w-full md:w-auto justify-center md:justify-between'>
    <div className='flex  items-center gap-2 '>
        <FaTruckFast/><p>FREE Express Shipping On Orders $570+</p>
    </div>
      <div className= ' md:flex hidden gap-2'>
        <p className='flex items-center gap-2'>
        ENGLISH <FaChevronDown/> | 
        </p>
        <p className='flex items-center gap-2'>
        SETTING <FaChevronDown/> |
        </p>
        <p className='flex items-center gap-2'>
        USA <FaChevronDown/> |
        </p>
      </div>
      </Container>
    </header>
  )
}

export default TopHeader
