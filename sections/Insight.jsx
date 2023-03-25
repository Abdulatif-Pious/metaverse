import React from 'react'
import { motion } from 'framer-motion';

import { InsightCard, TypingTexts } from '../components';
import { slideIn, staggerContainer } from '../utils/motion';
import { insights } from '../constants';

const Insight = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1.5)}
      initial="hidden"
      whileInView="show"
      
      viewport={{ once: true}}
    >
      <TypingTexts  
        title="insight about"
        style="flex justify-center w-full  uppercase tracking-[0.2rem] text-lg md:text-2xl 2xl:text-4xl mt-4 md:m-6 2xl:mt-12"
      />
      <TypingTexts  
        title="metaverse"
        style="flex justify-center w-full  uppercase tracking-[0.2rem] text-lg md:text-2xl 2xl:text-4xl mt-4 md:m-6 2xl:mt-12"
      />

      <motion.div>
        {insights.map((insight, index) => (
          <InsightCard 
            key={insight.title}
            {...insight}
            index={index}
          />
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Insight