import React from 'react'
import { Button } from '@nextui-org/react'
import Reveal from '../../ui/Reveal'

function Main () {
  return (
    <>
    <div className='relative h-screen'>
    <div
        className="absolute mb-20 inset-0 bg-cover bg-center animate-fade-in"
        style={{
          backgroundImage: 'url(https://i.imgur.com/30FUpBt.png)',
          mixBlendMode: 'lighten' // Establece la capa de fusión aclarar
        }}
      />
      <main className="flex flex-col xl:px-80 px-16 py-10 max-md:px-5 md:py-2 sm:px-20">
        <header className="text-4xl font-bold tracking-wide leading-5 text-violet-100 max-md:mr-2 max-md:max-w-full">
          <h1 className="text-left text-red-500 sm:text-4xl md:text-[4.25rem] xl:[text-[5.25rem] leading-none fade-in">PORTFOLIO</h1>
          <h2 className='text-left text-xl md:text-3xl text-slate-300 mt-[-0.6rem] lg:ml-[0.2rem] md:mt-[0.4rem] xl:mr-[1rem]'>Full-Stack Developer</h2>
        </header>
        <section className="w-full max-md:max-w-full">
          <div className="flex items-center justify-center py-40 max-md:flex-col max-md:gap-0">
            <Reveal movement={75}>
              <Button
                className="flex justify-center items-center p-5 text-2xl font-extralight tracking-normal leading-5 text-slate-950 whitespace-nowrap
                  rounded-lg border border-solid bg-white bg-opacity-70 border-neutral-900 mt-24 mr-2 ">
                          <a href='https://drive.google.com/file/d/1JAHLqbkLbl1NoTtGYaUjAsFes4Ihked9/view?usp=sharing' target='blank' >
                            curriculum
                            </a>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}

export default Main
