import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa6'
import { IoLogoTwitter } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'

const socialLink = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com',
    icon: <IoLogoTwitter />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
    icon: <RiInstagramFill />,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/',
    icon: <FaLinkedin/>,
  },
  {
    name: 'Email',
    url: 'https://mail.google.com',
    icon: <MdEmail/>,
  },
]

const SocialLink = () => {
  return (
    <div className="flex gap-4 items-center justify-center mt-4">
      {socialLink?.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.name}
          className="text-2xl text-gray-600 border p-3 rounded-full transition-colors duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialLink
