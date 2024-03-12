import React from 'react'
import { InfiniteMovingCards } from '../../ui/infinite-moving-cards'

const SkillCard = ({ title, imageUrl }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="w-32 h-32 mr-4">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-full" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  )
}

const Skills = () => {
  const tecnologias = [
    {
      title: 'React',
      imageUrl: 'https://i.imgur.com/fvSjfcr.png'
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

  return (
    <div className="flex -mt-32">
      <div className="w-1/2 p-4">
        <div className="shadow-md rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4 text-left">ITBank</h2>
          <div className="flex items-center">
            <h3 className="text-lg font-semibold mr-4">En este proyecto hice diversas cosas como</h3>
            <img src="https://i.imgur.com/AOTKD3s.png" alt="Imagen" className="ml-auto" />
          </div>
        </div>
        <div className="shadow-md rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4 text-left">Título de la Tarjeta</h2>
          <div className="flex items-center">
            <h3 className="text-lg font-semibold mr-4">Título</h3>
            <img src="https://i.imgur.com/AOTKD3s.png" alt="Imagen" className="ml-auto" />
          </div>
        </div>

      </div>

      <div className="w-1/2 p-4 py-60">
        <div className="shadow-md rounded-md p-4">
          <h2 className="text-6xl text-left text-slate-200 font-semibold mb-4">SKILLS</h2>
        </div>
        <div className="h-[10rem] rounded-md flex flex-col antialiaseddark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={tecnologias}
                direction="right"
                speed="slow"
              />
    </div>

      </div>
    </div>
  )
}

export default Skills
