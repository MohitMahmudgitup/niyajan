import Link from 'next/link'
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'

const HeaderIcon = () => {
  return (
    <>
      <Link href="/favorite" className="relative text-2xl" aria-label="Favorites">
        <MdFavoriteBorder />
        <div className="absolute flex justify-center items-center w-5 h-5 -top-1 -right-2 bg-black text-white text-xs rounded-full">
          <p>0</p>
        </div>
      </Link>

      <Link href="/cart" className="relative text-2xl" aria-label="Cart">
        <BiShoppingBag />
        <div className="absolute flex justify-center items-center w-5 h-5 -top-1 -right-2 bg-black text-white text-xs rounded-full">
          <p>0</p>
        </div>
      </Link>
    </>
  )
}

export default HeaderIcon
