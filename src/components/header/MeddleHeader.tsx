"use client";

import { useState } from "react";
import Container from "../Container";
import { VscAccount } from "react-icons/vsc";
import { FiAlignRight } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import SearchInput from "./SearchInput";
import Link from "next/link";
import SmallSizeBar from "./SmallSizeBar";
import MobileNav from "./MobileNav";

const MeddleHeader = () => {
  const [navigationBar, setNavigationBar] = useState(false);

  return (
    <main className="border-b border-gray-500 bg-white">
      <Container className="flex items-center justify-between p-4 w-full">
        {/* Logo */}
        <Link href={"/"}>
          <img
            src="https://shofy.reactbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0479373e.png&w=256&q=75"
            alt="Logo"
            className="w-24 md:w-32"
          />
        </Link>

        {/* Search Bar (Hidden on mobile, visible on medium screens and above) */}
        <div className="hidden md:flex flex-1 justify-center">
          <SearchInput />
        </div>

        {/* Desktop Icons (Hidden on Mobile) */}
        <div className="hidden sm:flex items-center gap-6">
          {/* Account Section */}
          <Link href={"/signin"} className="flex items-center gap-2 cursor-pointer">
            <VscAccount size={28} />
            <div>
              <p className="text-sm">Hello, Guest</p>
              <p className="text-xs md:text-sm font-semibold">Login / Register</p>
            </div>
          </Link>

          {/* Favorite & Cart Icons */}
          <div className="flex gap-4 items-center">
            <Link href="/favorite" className="text-2xl relative">
              <MdFavoriteBorder />
              <div className="absolute flex justify-center items-center w-5 h-5 -top-1 -right-2 bg-black text-white text-xs rounded-full">
                <p>0</p>
              </div>
            </Link>

            <Link href="/cart" className="text-2xl relative">
              <BiShoppingBag />
              <div className="absolute flex justify-center items-center w-5 h-5 -top-1 -right-2 bg-black text-white text-xs rounded-full">
                <p>0</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden cursor-pointer">
          <FiAlignRight size={28} onClick={() => setNavigationBar(!navigationBar)} />
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      <MobileNav navigationBar ={navigationBar} setNavigationBar={setNavigationBar}  />

      {/* Mobile Search Bar (Visible on small screens) */}
      <div className="md:hidden px-4 pb-2">
        <SearchInput />
      </div>
    </main>
  );
};

export default MeddleHeader;
