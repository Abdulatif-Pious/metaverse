import React from 'react'
import { motion } from 'framer-motion';

import { slideIn } from '../utils/motion';
import { TypingTexts } from '../components';

const ExploreCard = ({ index, active, setActive, id, imgUrl, title}) => {
  return (
    <motion.article
      variants={slideIn('left', 'spring', 5, index * 0.5)} 
      className={`relative ${active === id ? 
        'flex-[10] 2xl:flex-[6]' : '2xl:flex-[0.5] flex-[2]'} 
        flex items-center  justify-center min-w-[100px] h-[700px]
        transition-[flex] duration-[0.8s] ease-out-flex
        cursor-pointer`}
      viewport={{ once: false, amount: 0.25 }}
      onClick={() => setActive(id)}
    >
      <img 
        src={imgUrl}
        alt={title}
        className={`absolute w-full h-full object-cover rounded-[24px]`}

      />
      {active === id ? (
        <div className='absolute bottom-0 h-full 2xl:h-1/4 w-full bg-[rgba(0,0,0,0.5)] rounded-t-[24px] rounded-b-[24px] z-10'>
          <div className='flex items-center justify-between gap-4 w-full p-6  2xl:p-2 2xl:px-8'>
            <div className='relative w-[50px] h-[50px] 2xl:w-[100px] 2xl:h-[100px] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600'>
              <img 
                src="./headset.svg"
                alt="headset"
                className='absolute left-[12.5px] top-[12.5px]  w-[25px] h-[25px] 2xl:left-[25px] 2xl:w-[50px] 2xl:top-[25px] 2xl:h-[50px] object-contain'
              />
            </div>
            <h4 className='uppercase font-bold text-lg md:text-xl 2xl:text-2xl text-white'>Enter  metaverse</h4>
          </div>
          <h4 className="absolute font-black bottom-10 uppercase text-white text-lg md:text-xl 2xl:text-2xl flex items-center justify-center w-full">
            {title}
          </h4>
        </div>
      ) : (
        <h4 className='absolute font-semibold text-white text-lg 2xl:text-3xl  2xl:rotate-[270deg]'>
          {title}
        </h4>
      )}
    </motion.article>
  )
}

export default ExploreCard