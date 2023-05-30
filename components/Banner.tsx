import React from 'react'
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
    id='home'
    className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'
    >
      <motion.h3
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className='text-lg font-titleFont tracking-wide'
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col text-textGreen'
      >
        Timothy James Tagaña
        <span className='text-textDark mt-2 lgl:mt-4 text-4xl'>
        Artistic Web Dev crafting User-Centric Experiences
        </span>
      </motion.h1>
      <motion.p
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className='text-base md:max-w-[1000px] text-textDark tracking-wider font-normal'>
        {" "}
        Hello, I'm excited to introduce myself! I am a highly versatile and creative professional with a diverse skill set encompassing Multimedia Arts, Web Development, and UX Design. With a background rooted in Multimedia Arts, I possess a unique ability to think creatively and approach projects from an artistic perspective. However, my journey didn't stop there—I smoothly transitioned into the world of Web Development and have now set my sights on pursuing UX Design.{" "}
        <a href="#about">
          <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group font-semibold'
          >
            Learn more
            <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
          </span>
        </a>
      </motion.p>
      <motion.button
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className='w-32 h-12 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'
      >
        Projects
      </motion.button>
    </section>
  )
}

export default Banner;