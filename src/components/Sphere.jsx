import React from 'react'
import Reveal from '../ui/Reveal'

const Sphere = () => {
  return (
    <div className='flex justify-center mt-[25rem] -mb-32'>
      <Reveal
      movementY={350}
      movementX={0}
      duration={0.73}
      >
      <img src='https://i.imgur.com/gUCDIh9.png' alt='Sphere' className='w-[500px] h-[500px] opacity-40 z-0 hover:scale-[1.12] transition-all' />
      </Reveal>
    </div>
  )
}

export default Sphere
