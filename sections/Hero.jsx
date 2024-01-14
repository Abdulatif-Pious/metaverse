import React from 'react'
import { motion } from 'framer-motion';

import { staggerContainer, titleVariant, slideIn } from '../utils/motion';

const Hero = () => {
  return (
    <motion.section 
      className="flex flex-col items-center justify-between w-full h-full mt-6 md:8 2xl:mt:12"
      variants={staggerContainer(1, 1.5)}
      initial="hidden"
      viewport={{ once: true}}
      whileInView="show"
    >
      <div className='flex flex-col items-center '>
        <motion.h1
          variants={titleVariant(1)}
          className=" uppercase tracking-[0.5rem] font-black text-2xl md:text-4xl 2xl:text-6xl text-white gradient-title"
        >
          Metaverse
        </motion.h1>
        <motion.h1
            variants={titleVariant(1.5)}
            className='block uppercase tracking-[0.5rem] font-black text-2xl md:text-4xl 2xl:text-6xl  text-white mt-2 md:mt-6 2xl:mt-10  gradient-title z-10'
        >
          Madness
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 1, 2)}
        className="flex w-[80%] mt-6 md:8 2xl:mt-12"
      >
        <div className="absolute  top-[15%] w-full h-[200px] hero-gradient z-10" />
        
        <div className='relative flex items-center justify-center w-full h-[200px] md:h-[300px] 2xl:h-[500px]'>
          <img 
            src='./cover.png'
            alt="hero image"
            className="w-full  h-full rounded-xl object-cover mt-4"
          />
          <div className="absolute flex justify-end w-full -mr-[10%]">
            <img 
              src="stamp.png"
              alt="stamp image"
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] 2xl:w-[120px] 2xl:h-[120px] object-contain"
            />
          </div>
        </div> 
      </motion.div>
    </motion.section>
  )
}

export default Hero