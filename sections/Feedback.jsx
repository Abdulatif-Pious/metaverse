import React from 'react'
import { motion } from 'framer-motion';

import { staggerContainer, slideIn } from '../utils/motion';
import { TypingTexts } from '../components';

const Feedback = () => {
  return (
    <motion.section
      variants={staggerContainer(2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      className='flex flex-col items-center w-full'
    >
      <motion.div
        variants={slideIn('down', 'tween', 1, 1.5)}
        className="flex-1 flex flex-col lg:flex-row lg:items-center w-4/5 gap-8"
      > 
        <div className='relative text-white w-full md:basis-1/3  border-2 border-indigo-500 rounded-[24px] my-4 md:my-8 2xl:my-12 p-4 md:p-6 2xl:p-12'>
          
          <div className='flex flex-col  items-center justify-center w-full'>
            <h2 className='text-lg md:text-xl 2xl:text-[32px]'>
              Samantha
            </h2>
              <TypingTexts title="Founder of metaversus" style='text-base md:text-lg 2xl:text-2xl mt-2 md:m-4' />
          </div>

          <div className='text-base md:text-lg 2xl:text-2xl mt-2 md:mt-4 2xl:mt-8'>
            <span>
              “With the development of today's technology,
              {" "} 
              <TypingTexts title="metaverse" style="inline-block tracking-[0.05rem]" />
              {" "}
              is very useful for today's work, or can be called
            </span>
            {" "}
            <TypingTexts title="web 3.0" style="inline-block tracking-[0.05rem]" />
            {" "}
              <span>
                by using metaverse you can use it as anything”
              </span>
          </div>
          
          <div className='absolute top-[100px] left-[60px] hidden lg:flex md:justify-end  w-full h-full'>
            <div>
              <img 
                src="./stamp.png"
                alt="stamp"
                className="w-[100px] h-[100px] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:basis-2/3 my-4 md:my-8 2xl:my-12">
          <img 
            src="./planet-09.png"
            alt="planet"
            className='rounded-xl'
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Feedback