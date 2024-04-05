import React from 'react'
import Reveal from '../ui/Reveal'

const Sphere = () => {
  return (
    <div className='flex justify-center mt-[12rem] 2xl:mt-[30rem] xl:mt-[45rem] sm:mt-[8rem] '>
      <Reveal
      movementY={350}
      movementX={0}
      duration={0.7}
      >
      <img src='https://i.imgur.com/gUCDIh9.png' alt='Sphere' className='w-[350px] h-[350px] sm:w-250px] sm:h-250px] 2xl:w-[500px] 2xl:h-[500px] xl:w-[450px] xl:h-[450px] lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px] opacity-40 z-0 hover:scale-[1.12] transition-all' />
      </Reveal>
    </div>
  )
}

export default Sphere
