import React from 'react'
import { InfiniteMovingCards } from '../../ui/infinite-moving-cards'
import CardComponent from './CardComponent'
import Reveal from '../../ui/Reveal'
import Services from '../Services/Services'
import { projects, tecnologias } from './consts'
import { BottomLine } from './BottomLine'
import Sphere from '../Sphere'

const Skills = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 pb-50 p-4">
      <div className='py-6 sm:py-0 md:py-2 xl:py-4'>
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
      <div className="w-full sm:w-1/2 p-4 py-0 text-left">
        <div className="h-[rem] rounded-md flex flex-col antialiaseddark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <Reveal movementY={0} movementX={-150} duration={0.6}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-right justify-end text-slate-200 ml-[20rem] font-semibold mt-10 xl:mr-[40rem] lg:mr-[28rem] md:mr-[30rem] sm:mr-[25rem] pr-[8rem] sm:pr-[4rem]">SKILLS</h2>
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
          <Sphere />
      </div>

    </div>
  )
}

export default Skills
