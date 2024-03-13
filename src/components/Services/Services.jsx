import React from 'react'
import WebDev from '../../assets/svgs/Web-Dev.svg'
import Database from '../../assets/svgs/Database.svg'
import Design from '../../assets/svgs/Design.svg'
import { Tooltip } from '@nextui-org/react'
import Reveal from '../../ui/Reveal'

const Services = () => {
  return (
    <div>
    <div className='flex justify-center items-center opacity-80 gap-6 xl:gap-12'>
      <Tooltip showArrow='true' delay={10} closeDelay={50} color='foreground' content='Web Development'><img src={WebDev} alt="Web Dev" className='w-16 h-16 md:w-20 md:h-20'/></Tooltip>
      <Tooltip showArrow='true' delay={10} closeDelay={50} color='foreground' content='Design'><img src={Design} alt="Design" className='w-16 h-16 md:w-20 md:h-20'/></Tooltip>
      <Tooltip showArrow='true' delay={10} closeDelay={50} color='foreground' content='Databases'><img src={Database} alt="Database" className='w-16 h-16 md:w-20 md:h-20'/></Tooltip>
    </div>
    <br />
      <Reveal movementY={0} movementX={-240} duration={0.9}>
          <h2 className="text-5xl text-slate-200 font-semibold mt-12 text-left xl:text-7xl">PROJECTS</h2>
          </Reveal>
    </div>
  )
}

export default Services
