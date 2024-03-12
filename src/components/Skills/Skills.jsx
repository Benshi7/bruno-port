import React from 'react'
import { InfiniteMovingCards } from '../../ui/infinite-moving-cards'
import { Card, Image, CardFooter, Button } from '@nextui-org/react'
import CardComponent from './CardComponent'
import Reveal from '../../ui/Reveal'

const Skills = () => {
  const tecnologias = [
    {
      title: 'React',
      imageUrl: 'https://i.imgur.com/1MumQjN.png'
    },
    {
      title: 'JavaScript',
      imageUrl: 'https://i.imgur.com/TIecYXK.png'
    },
    {
      title: 'CSS',
      imageUrl: 'https://i.imgur.com/Z5O87Mg.png'
    },
    {
      title: 'Figma',
      imageUrl: 'https://i.imgur.com/GOS2Unn.png'
    },
    {
      title: 'HTML',
      imageUrl: 'https://i.imgur.com/WgPN2tw.png'
    },
    {
      title: 'NextJS',
      imageUrl: 'https://i.imgur.com/3UZgTSg.png'
    },
    {
      title: 'SQL',
      imageUrl: 'https://i.imgur.com/D6vz1gO.png'
    }
  ]

  const projects = [
    {
      title: 'Noesflix',
      description: 'Mi primer aplicación React. Custom Hooks, uso de useEffect, useState, y fetch a API. ',
      url: 'https://noesflix.netlify.app/',
      github: 'http://www.google.com',
      alt: 'Captura de Noesflix',
      src: 'https://i.imgur.com/CeNN0DU.jpeg',
      disponible: true
    },
    {
      title: 'TwinBank',
      description: 'Proyecto final en ITBA FS. Homebanking utilizando NextJS, Django Rest Framework, y SQL.',
      url: '',
      github: '',
      alt: 'Captura de TwinBank',
      src: 'https://i.imgur.com/O3vhije.jpeg',
      disponible: false
    }

  ]

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <Reveal movementY={250} movementX={0}>
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
      <div className="w-1/2 p-4 py-80 text-left">
        <div className="h-[rem] rounded-md flex flex-col antialiaseddark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <Reveal movementY={0} movementX={-150}>
          <h2 className="text-7xl text-left text-slate-200 font-semibold mt-12 mr-[40rem]">SKILLS</h2>
          </Reveal>
        </div>
          <Reveal movementY={100} movementX={0}>
              <InfiniteMovingCards
                items={tecnologias}
                direction="right"
                speed="slow"
              />
          </Reveal>
      </div>

    </div>
  )
}

export default Skills
