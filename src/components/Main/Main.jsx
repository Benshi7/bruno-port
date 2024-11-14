import React, { useState } from 'react'
import { Button } from '@nextui-org/react'
import Reveal from '../../ui/Reveal'
import ModalCV from './ModalCV'

function Main () {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className='relative h-[40%] sm:h-[50%] md:h-[90%] lg:h-screen xl:h-screen'>
        <div
          className='absolute pt-[30rem] md:pt-[20rem] inset-0 bg-cover bg-center animate-fade-in aspect-auto'
          style={{
            backgroundImage: 'url(/hands2.webp)',
            mixBlendMode: 'lighten' // Establece la capa de fusión aclarar
          }}
        />
        <main className='flex flex-col xl:px-80 px-16 py-10 max-md:px-5 md:py-2 sm:px-20'>
          <header className='text-4xl font-bold tracking-wide leading-5 text-violet-100 max-md:mr-2 max-md:max-w-full'>
            <h1 className='text-left text-red-500 text-5xl sm:text-6xl md:text-[4.25rem] xl:[text-[5.25rem] leading-none fade-in'>
              PORTFOLIO
            </h1>
            <h2 className='text-left text-xl md:text-3xl text-slate-300 mt-[-0.6rem] lg:ml-[0.2rem] md:mt-[0.4rem] xl:mr-[1rem]'>
              Full-Stack Developer
            </h2>
          </header>
          <section className='w-full max-md:max-w-full'>
            <div className='flex items-center justify-center py-20 xl:py-40 max-md:flex-col max-md:gap-0'>
              <Reveal movement={75}>
                <div>
                  <Button
                    onClick={handleClick}
                    className='flex justify-center items-center p-2 md:p-5 text-xl md:text-2xl font-extralight tracking-normal leading-5 text-slate-950 whitespace-nowrap
                  rounded-lg border border-solid bg-white bg-opacity-70 border-neutral-900 mb-24 mr-2 md:mb-48 lg:mt-24'
                  >
                    curriculum
                  </Button>
                  <ModalCV
                    isOpen={isModalOpen}
                    onClose={handleClose}
                    className='z-30'
                  />
                </div>
              </Reveal>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Main
