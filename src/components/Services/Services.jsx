import React from 'react'
import WebDev from '../../assets/svgs/Web-Dev.svg'
import Database from '../../assets/svgs/Database.svg'
import Design from '../../assets/svgs/Design.svg'
import { Tooltip } from '@nextui-org/react'
import Reveal from '../../ui/Reveal'

const Services = () => {
  return (
    <div>
    <div className='flex justify-center items-center opacity-80 gap-6 xl:gap-12 md:pb-4 lg:pt-6'>
      <Tooltip showArrow='true' delay={10} closeDelay={50} color='foreground' content='Web Development'><img src={WebDev} alt="Web Dev" className='h-14 w-1h-14 md:w-14 md:h-14 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16'/></Tooltip>
      <Tooltip showArrow='true' delay={10} closeDelay={50} color='foreground' content='Design'><img src={Design} alt="Design" className='h-14 w-14 md:w-14 md:h-14  sm:w-12 sm:h-12 2xl:w-16 2xl:h-16'/></Tooltip>
      <Tooltip showArrow='true' delay={10} closeDelay={50} color='foreground' content='Databases'><img src={Database} alt="Database" className='h-14 w-14 md:w-14 md:h-14 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16'/></Tooltip>
    </div>
    <br />
      <Reveal movementY={0} movementX={-240} duration={0.9}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-200 font-semibold mt-20 text-left ">PROJECTS</h2>
          </Reveal>
    </div>
  )
}

export default Services
