import React from 'react';
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { div } from 'framer-motion/client';

const Footer = () => {
  return (
        <div className='p-5 md:p-0 flex flex-col md:flex-row justify-between md:items-center'>
            <p>
            Crafted with creativity, curiosity, and countless cups of coffee ☕. <br /> Let&apos;s build something awesome together! 🚀✨ <br />
            <span className=" text-gray-400 text-sm center sm:py-0 w-2/3">
            © 2024 | Igah Franklin | All Rights Reserved
          </span>
            </p>
            <ul className='flex justify-cente items-center gap-3 my-3'>
                <li><a target='_blank' href="https://www.linkedin.com/in/igah-franklin/"><LinkedInLogoIcon className='w-9 h-9 hover:translate-y-1 duration-300 cursor-pointer'/></a></li>
                <li><a target='_blank' href="https://github.com/igah-franklin"><GitHubLogoIcon className='w-9 h-9 hover:translate-y-1 duration-300 cursor-pointer'/></a></li>
            </ul>
        </div>
  )
}

export default Footer