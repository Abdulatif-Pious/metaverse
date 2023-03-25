import React from 'react'
import { motion } from 'framer-motion';

import {  slideIn, staggerContainer } from '../utils/motion';
import { StartSteps, TypingTexts } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true}}
      className='flex flex-col lg:flex-row gap-8 w-full mt-4 md:m-6 2xl:mt-12'
    >
      <motion.div
        variants={slideIn("left", "spring", 1, 1)}
        className="flex-1 flex items-center justify-center w-full "
      >
        <img 
          src="./get-started.png"
          alt="get started"
          className=' w-[80%]'
        />
      </motion.div>
      <motion.div
        variants={slideIn("right", "spring", 1, 2)}
        className="flex-1 "
      >
        <TypingTexts 
          title="get started" 
          style="flex justify-center w-full uppercase tracking-[0.2rem] text-lg md:text-2xl 2xl:text-4xl mt-4 md:m-6 2xl:mt-12" 
        />
        <div className='flex flex-col w-full'>
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              index={index}
              feature={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default GetStarted