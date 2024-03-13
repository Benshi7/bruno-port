import React from 'react'
import WebDev from '../../assets/svgs/Web-Dev.svg'
import Database from '../../assets/svgs/Database.svg'
import Design from '../../assets/svgs/Design.svg'
import { Tooltip } from '@nextui-org/react'
import Reveal from '../../ui/Reveal'

const Services = () => {
  return (
    <div>
    <div className='flex justify-center items-center opacity-80 gap-12'>
      <Tooltip showArrow='true' delay={10} closeDelay={50} color='foreground' content='Web Development'><img src={WebDev} alt="Web Dev" /></Tooltip>
      <Tooltip showArrow='true' delay={10} closeDelay={50} color='foreground' content='Design'><img src={Design} alt="Design" /></Tooltip>
      <Tooltip showArrow='true' delay={10} closeDelay={50} color='foreground' content='Databases'><img src={Database} alt="Database" /></Tooltip>
    </div>
    <br />
      <Reveal movementY={0} movementX={-150} duration={0.6}>
          <h2 className="text-7xl text-left text-slate-200 font-semibold mt-12 mr-[40rem]">PROJECTS</h2>
          </Reveal>
    </div>
  )
}

export default Services
