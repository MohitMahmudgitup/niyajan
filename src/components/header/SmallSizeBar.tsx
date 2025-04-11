import React from 'react'
import Container from '../Container'
import { Navigation } from '@/constants'
import Link from 'next/link'

function SmallSizeBar() {
  return (
    <div>
      {
        <Container className='flex gap-2 flex-col  mt-20 right-0'>
          {
            Navigation?.map((item)=>{
              return <Link className='hover:font-medium border-b border-r-amber-50 py-2 text-2xl' key={item?.title} href={item?.href}>{item?.title}</Link>
            })
          }
        </Container>
      }
    </div>
  )
}

export default SmallSizeBar
