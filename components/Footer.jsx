import React from 'react'
import { motion } from 'framer-motion';

import { slideIn } from '../utils/motion';
import { socials } from '../constants';

const Footer = () => {
  return (
    <motion.footer
      variants={slideIn("down", "spring", 1, 2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center gap-4 w-full my-4 md:my-6 2xl:my-12"
    >
      <div className='flex flex-col lg:flex-row justify-between items-center gap-4 w-4/5'>
        <h2 className='text-center tracking-[0.4rem] font-black text-white text-[24px] md:text-[32px] 2xl:text-[48px]'>
          Enter the Metaverse
        </h2>
        <motion.button 
          type="button" 
          className='font-normal flex items-center text-white bg-gradient-to-r from-indigo-500 via-blue-700 to-purple-600 rounded-full  p-2 md:p-4 2xl-p-8'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}  
        >
          <img 
            src="./headset.svg"
            alt="headset"
            className='w-5 h-5'
          />
          <p className='ml-4 text-sm md:text-base 2xl:text-xl'>
            Enter Metaverse
          </p>
        </motion.button>
      </div>

      <hr />

      <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-3 w-4/5 '>
        <p className='text-white text-sm md:text-base 2xl:text-lg'>
          Copyright ©2023 Metaversus. All rights reserved
        </p>
        <div className='flex'>
          {socials.map((social) => (
            <motion.img 
              key={social.name}
              src={social.url}
              alt={social.name}
              whileHover={{ scale : 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ml-2 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer