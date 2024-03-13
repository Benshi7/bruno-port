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
      <div className='py-8 xl:py-16 lg:py-16 pb-8'>
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
          <h2 className="text-5xl text-right ml-[20rem] text-slate-200 font-semibold mt-12 xl:text-7xl lg:text-6xl xl:mr-[60rem] xl:text-left">SKILLS</h2>
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
