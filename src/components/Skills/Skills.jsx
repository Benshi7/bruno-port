import React from 'react'
import { InfiniteMovingCards } from '../../ui/infinite-moving-cards'
import CardComponent from './CardComponent'
import Reveal from '../../ui/Reveal'
import Services from '../Services/Services'
import { projects, tecnologias } from './consts'
import { BottomLine } from './BottomLine'

const Skills = () => {
  return (
    <div className="flex">
      <div className="w-1/2 pb-50 p-4">
      <div className='py-36 pb-16'>
        <Reveal movementY={70}>
          <Services/>
        </Reveal>
        </div>
        <Reveal movementY={250} movementX={0} duration={0.6}>
          {projects.map((project) => (
            <CardComponent
              title= {project.title}
              description={project.description}
              url={project.url}
              github={project.github}
              alt={project.alt}
              src={project.src}
              disponible={project.disponible}
              key={project.title}
              />
          )) }
        </Reveal>
      </div>
      <div className="w-1/2 p-4 py-0 text-left">
        <div className="h-[rem] rounded-md flex flex-col antialiaseddark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <Reveal movementY={0} movementX={-150} duration={0.6}>
          <h2 className="text-7xl text-left text-slate-200 font-semibold mt-12 mr-[40rem]">SKILLS</h2>
          </Reveal>
        </div>
          <Reveal movementY={100} movementX={0} duration={0.6}>
              <InfiniteMovingCards
                items={tecnologias}
                direction="right"
                speed="slow"
              />
          <BottomLine />
          </Reveal>
      </div>
    </div>
  )
}

export default Skills
