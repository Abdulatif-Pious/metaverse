import React, { useState } from 'react'
import { motion } from 'framer-motion';

import { staggerContainer, slideIn } from '../utils/motion';
import  { TypingTexts, ExploreCard }  from '../components'
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section id="explore">
      <motion.div
        variants={staggerContainer(1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true}}
        className='flex flex-col w-full justify-center'
      >
        <TypingTexts 
          title='choose the world'
          style={`flex justify-center w-full uppercase tracking-[0.2rem] text-lg md:text-2xl 2xl:text-4xl`}
        />
        <TypingTexts 
          title='you want'
          style={`flex justify-center w-full uppercase tracking-[0.2rem] text-lg md:text-2xl 2xl:text-4xl`}
        />

        <div className="flex flex-col 2xl:flex-row h-[700px] gap-10 m-4 md:m-8 2xl:m-12 px-4 md:px-8 2xl:px-12">
          {exploreWorlds.map((world, index) => (
            <ExploreCard 
              key={index}
              {...world}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
  
        </div>
      </motion.div>
    </section>
  )
}

export default Explore