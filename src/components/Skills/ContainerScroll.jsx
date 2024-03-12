'use client'
import React from 'react'
import { ContainerScroll } from '../../ui/container-scroll-animation'

export function HeroScrollDemo () {
  return (
    <div className="flex flex-col overflow-hidden mt-[-24rem]">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Tecnologías <br />
              <span className="text-3xl dark:text-red-500 text-red-500 md:text-[5rem] font-bold mt-1 font-blue leading-none ">
                con las que trabajé
              </span>
            </h1>
          </>
        }
      />
    </div>
  )
}

export const users = [
  {
    name: 'JavaScript',
    designation: '',
    image: 'https://i.imgur.com/BJJ0LUx.png',
    badge: 'Developer'
  },
  {
    name: 'NextJS',
    designation: '',
    image: 'https://i.imgur.com/c5K5DZz.png',
    badge: 'Developer'
  },
  {
    name: 'Manu Arora',
    designation: '',
    image: 'https://i.imgur.com/Fcy2bUd.png',
    badge: 'Developer'
  },
  {
    name: 'TailwindCSS',
    designation: '',
    image: 'https://i.imgur.com/dmTQBtU.png',
    badge: 'Developer'
  },
  {
    name: 'Figma',
    designation: '',
    image: 'https://i.imgur.com/4UevmA1.png',
    badge: 'Design'
  },
  {
    name: 'JavaScript',
    designation: '',
    image: 'https://i.imgur.com/BJJ0LUx.png',
    badge: 'Developer'
  },
  {
    name: 'NextJS',
    designation: '',
    image: 'https://i.imgur.com/c5K5DZz.png',
    badge: 'Developer'
  },
  {
    name: 'Manu Arora',
    designation: '',
    image: 'https://i.imgur.com/Fcy2bUd.png',
    badge: 'Developer'
  },
  {
    name: 'TailwindCSS',
    designation: '',
    image: 'https://i.imgur.com/dmTQBtU.png',
    badge: 'Developer'
  },
  {
    name: 'Figma',
    designation: '',
    image: 'https://i.imgur.com/4UevmA1.png',
    badge: 'Design'
  }
]
