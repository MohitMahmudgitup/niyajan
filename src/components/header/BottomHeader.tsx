import React from 'react'
import Container from '../Container'
import { Navigation } from '@/constants'
import Link from 'next/link'

function BottomHeader() {
  return (
    <div className="border-b border-b-gray-500   py-2 sm:block hidden">
     
        
        <Container className='flex  gap-6'>
          {
            Navigation?.map((item)=>{
              return <Link className='' key={item?.title} href={item?.href}>{item?.title}</Link>
            })
          }
          <p className="absolute md:right-36 right-2 text-sm text-zinc-300">Hotline : <span className='text-black'>+88 01012345678</span></p>
        </Container>
       
        
      
    </div>
  )
}

export default BottomHeader
