import React from 'react'
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { ContactForm } from './ContactForm'

const Form = () => {
  return (
    <div className='p-5 md:p-0 flex flex-col md:flex-row justify-center items-center gap-10 my-20'>
        <div className='md:w-4/12'>
            <h3 className='text-lg md:text-4xl mb-4 font-bold text-neutral-500 dark:text-neutral-500 '>lets connect!</h3>
            <p>
            If you ever want to grab a coffee/bubble tea (virtually) or just want a quick chat - you can find me on social media or you can send me a message here!
            </p>
            <ul className='flex justify-cente items-center gap-3 my-3'>
                <li><a target='_blank' href="https://www.linkedin.com/in/igah-franklin/"><LinkedInLogoIcon className='w-12 h-12 hover:translate-y-1 duration-300 cursor-pointer'/></a></li>
                <li><a target='_blank' href="https://github.com/igah-franklin"><GitHubLogoIcon className='w-12 h-12 hover:translate-y-1 duration-300 cursor-pointer'/></a></li>
            </ul>
        </div>
        <div className='md:w-8/12'>
        <ContactForm />
        </div>
    </div>
  )
}

export default Form