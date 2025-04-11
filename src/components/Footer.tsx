import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="bg-amber-50 py-10">
      <Container className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <img 
              src="https://shofy.reactbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0479373e.png&w=256&q=75" 
              alt="Logo" 
              className="mb-4 w-32"
            />
          </Link>
          <p className="text-xl text-center md:text-left w-72">
            We are a team of designers and developers that create high-quality WordPress themes.
          </p>
        </div>
        {/* Links */}
        <div className="grid grid-cols-2 gap-8 text-center md:text-left  ">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700 border-b pb-2">My Account</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-amber-800 transition">Login</a></li>
              <li><a href="#" className="text-gray-600 hover:text-amber-800 transition">Register</a></li>
              <li><a href="#" className="text-gray-600 hover:text-amber-800 transition">My Orders</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700 border-b pb-2">Information</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-amber-800 transition">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-amber-800 transition">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-amber-800 transition">Support</a></li>
            </ul>
          </div>
        </div>
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Talk to Us</h3>
          <p className="text-sm ">Got Questions? Call us</p>
          <p className="text-3xl font-bold  ">+670 413 90 762</p>
          <p className="text-sm  flex items-center justify-center md:justify-start">
            <FaEnvelope className="mr-2" /> shofy@suppert.com
          </p>
          <p className="text-sm  flex items-center justify-center md:justify-start">
            <FaMapMarkerAlt className="mr-2" /> Dhaka, Bangladesh
          </p>
        </div>
      </Container>
      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between max-w-[1140px] mx-auto px-4">
        <p className="text-sm font-bold">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-black border p-3 rounded-4xl shadow shadow-black hover:text-amber-800 text-xl"><FaFacebookF /></a>
          <a href="#" className="text-black border p-3 rounded-4xl shadow shadow-black hover:text-amber-800 text-xl"><FaInstagram /></a>
          <a href="#" className="text-black border p-3 rounded-4xl shadow shadow-black hover:text-amber-800 text-xl"><FaXTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;