import React from 'react'
import { motion } from 'framer-motion';

import { slideIn } from '../utils/motion';

const InsightCard = ({ title, imgUrl, subtitle, index}) => {
  return (
    <motion.article
      variants={slideIn("down", "spring", 1, index * 0.5)}
      className="flex flex-col items-center md:flex-row md:justify-between md:gap-10 w-full my-4 md:my-6  px-4 md:px-6 text-white"
    >
      <div className='flex justify-center w-full'>
          <div className='w-full h-[200px] md:w-[300px] md:h-[300px]'>
            <img 
              src={imgUrl}
              alt={title}
              className="w-full h-full rounded-2xl object-cover"
            />
        </div>
      </div>

      <div className='w-full'>
        <div>
          <h4 className='font-bold text-center text-lg md:text-xl  leading-[32px] md:leading-[40px] mt-4 md:mt-0'>{title}</h4>
          <p className='font-normal text-base md:text-lg text-gray-300 my-4 md:my-6 '>
            {subtitle}
          </p>
        </div>
      </div>

      <div className='hidden items-center justify-center lg:flex ml-auto  w-full'>
        <motion.div 
          className='flex items-center justify-center w-[100px] h-[100px] border-2 border-purple-500 rounded-full lg:cursor-pointer'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img 
            src="./arrow.svg"
            alt="link"
          />  
        </motion.div>
      </div>
    </motion.article>
  )
}

export default InsightCard