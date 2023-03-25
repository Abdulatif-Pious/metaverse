import React from 'react'
import { motion } from 'framer-motion'

import {  slideIn, staggerContainer } from '../utils/motion';
import { NewFeatures, TypingTexts } from '../components';
import { newFeatures } from '../constants';

const whatsNew = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true}}
      className='flex flex-col lg:flex-row gap-8 w-full mt-4 md:m-6 2xl:mt-12'
    >
      <motion.div
        variants={slideIn("right", "spring", 1, 2)}
        className="flex  flex-wrap"
      >
        <TypingTexts 
          title="what's new" 
          style="flex justify-center w-full uppercase tracking-[0.2rem] text-lg md:text-2xl 2xl:text-4xl mt-4 md:m-6 2xl:mt-12" 
        />
        <div className='flex flex-wrap'>
          {newFeatures.map((newFeature, index) => (
            <NewFeatures  
              key={`${newFeature}-${index}`}
              {...newFeature}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("left", "spring", 1, 1)}
        className=" flex items-center justify-center w-full "
      >
        <img 
          src="./whats-new.png"
          alt="what's new"
          className=' w-[80%]'
        />
      </motion.div>
    </motion.section>
  )
}

export default whatsNew