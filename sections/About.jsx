import React from 'react'
import { motion } from 'framer-motion';

import  { TypingTexts }  from '../components/';
import { staggerContainer } from '../utils/motion';

const About = () => {
  return (
    <section className="relative mt-6 md:mt-8 2xl:mt-12">
      {/*gradient */}
      <motion.div
        variants={staggerContainer(1.8, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true}}
        className="flex  flex-col items-center justify-between w-full h-full text-white"
      >
        <TypingTexts title="About Metaversus" style="uppercase tracking-[0.2rem] text-lg md:text-2xl 2xl:text-4xl" />
        
        <motion.div className='p-6 md:p-8 2xl:p-12 text-lg md:text-xl 2xl:text-2xl'>
          <TypingTexts 
            title="Metaverse " 
            style="inline-block tracking-[0.05rem]"
          />{" "}
          is a new thing in the future, where you can enjoy the virtual 
          world by feeling like it's really real, you can 
          feel what you feel in this metaverse world, 
          because this is really the{" "}
          <TypingTexts 
            title="madness of the metaverse " 
            style="inline-block tracking-[0.05rem]"
          />{" "}
          of today, using only{" "}
          <TypingTexts
            style="inline-block tracking-[0.05rem]"
            title="VR" 
          />{" "}
          devices you can easily explore the metaverse world 
          you want, 
          turn your dreams into reality. Let's{" "}
          <TypingTexts 
            title="explore " 
            style="inline-block tracking-[0.05rem]"
            />{" "}
          the madness of the metaverse by scrolling down

          <TypingTexts arrow style="flex" />
        </motion.div>
        
      </motion.div>
    </section>
  )
}

export default About