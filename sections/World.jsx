import React from 'react'
import { motion } from 'framer-motion';

import { slideIn, staggerContainer } from '../utils/motion';
import { TypingTexts } from '../components';

const World = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full"
    > 
      <TypingTexts 
        title="people on the world"
        style="flex justify-center w-full  uppercase tracking-[0.2rem] text-lg md:text-2xl 2xl:text-4xl mt-4 md:m-6 2xl:mt-12"
      />

      <motion.div
        variants={slideIn("up", 'tween', 1, 1.5)}
        className="relative flex  justify-center w-full my-4 md:my-6 2xl:my-12"
      >
        <img 
          src="./map.png"
          alt="world"
          className='w-4/5'
        />

        <motion.img 
          variants={slideIn("down", "tween", 1, 2)}
          src="./people-01.png"
          alt="a person"
          className='absolute top-[20%] right-[35%] w-[20px] md:w-[40px] 2xl:w-[60px]'
        />

        <motion.img 
          variants={slideIn("down", "tween", 1, 3)}
          src="./people-02.png"
          alt="a person"
          className='absolute top-[60%] right-[72%] w-[20px] md:w-[40px] 2xl:w-[60px]'
        />

        <motion.img 
          variants={slideIn("down", "tween", 1, 4)}
          src="./people-03.png"
          alt="a person"
          className='absolute top-[15%] left-[20%] w-[20px] md:w-[40px] 2xl:w-[60px]'
        />
      </motion.div>
    </motion.section>
  )
}

export default World