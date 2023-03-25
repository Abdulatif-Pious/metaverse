import React from 'react'
import Link from 'next/link';
import {  motion } from 'framer-motion';

import { navVariants } from '../utils/motion';

const Navbar = () => {
  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="relative flex items-center justify-between w-full text-white border-b-2 border-indigo-500/30 p-2 md:p-4 2xl:p-6"
    >
      {/* gradient*/}
      <div className="absolute w-1/2 inset-0 gradient-01 -mt-16" />

      <div>
        <motion.img 
          src='./search.svg'
          alt="search"
          className="w-4 h-4 md:w-6 md:h-6 2xl:w-10 2xl:h-10 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap= {{ scale: 0.9}}
        />
      </div>
      <Link href="/" className='cursor-pointer'>
        <h2 className="uppercase font-black tracking-[0.2rem] text-xl md:text-2xl 2xl:text-3xl gradient-title">
          Metaversus
        </h2>
      </Link>
      <div>
        <motion.img 
          src="./menu.svg"
          alt="menu"
          className="w-4 h-4 md:w-6 md:h-6 2xl:w-10 2xl:h-10 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap= {{ scale: 0.9}}
        />
      </div>
    </motion.nav>
  )
}

export default Navbar