import React from 'react'
import { motion } from 'framer-motion';

import { slideIn } from '../utils/motion';

const InsightCard = ({ title, imgUrl, subtitle, index}) => {
  return (
    <motion.article
      variants={slideIn("down", "spring", 1, index * 0.5)}
      className="flex flex-col md:flex-row md:justify-between w-full my-4 md:my-6 2xl:my-8 px-4 md:px-6 text-white"
    >
      <div className='flex items-center justify-center w-full'>
          <div className='flex items-center justify-center w-[200px] h-[200px] md:w-[300px] md:h-[300px]'>
            <img 
              src={imgUrl}
              alt={title}
              className="w-4/5 h-4/5 rounded-2xl object-cover"
            />
        </div>
      </div>

      <div className='flex items-center w-full'>
        <div>
          <h4 className='font-bold text-center text-xl md:text-[24px] 2xl:text-[32px] leading-[32px] md:leading-[40px] 2xl:leading-[48px]'>{title}</h4>
          <p className='font-normal text-base md:text-lg 2xl:text-2xl text-gray-300 my-4 md:my-6 2xl:my-8'>
            {subtitle}
          </p>
        </div>
      </div>

      <div className='hidden lg:flex lg:items-center lg:justify-center w-full'>
        <motion.div 
          className='flex items-center justify-center w-[100px] h-[100px] border-2 border-purple-500 rounded-full lg:cursor-pointer'
          whileHover={{ scale: 1.2 }}
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