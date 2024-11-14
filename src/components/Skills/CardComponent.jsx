import React from 'react'
import { Card, Image, CardFooter, Button } from '@nextui-org/react'
import { MingcuteLinkFill } from './LinkSvg'
import { MdiGithub } from './GithubIcon'

const CardComponent = ({
  title,
  description,
  url,
  github,
  alt,
  src,
  disponible = false
}) => {
  return (
    <div className='rounded-md p-4 pt-0 opacity-80 hover:opacity-100 transition-all'>
      <h2 className='text-2xl font-semibold mb-4 text-right text-slate-200'>
        {title}
      </h2>
      <div className='flex items-center pl-0'>
        <div className='pl-0 2xl:pl-64'>
          <p className='hidden justify-end items-end text-balance text-sm font-light 2xl:flex'>
            {description}
          </p>
          <div className='mb-10 lg:mb-0 ml-0 lg:ml-24 2xl:ml-0 '>
            {
              // eslint-disable-next-line multiline-ternary
              url !== '' ? (
                <>
                  <a
                    target='blank'
                    href={url}
                    className={`${
                      disponible === false
                        ? null
                        : 'hover:text-red-800 transition-colors'
                    } hidden 2xl:block hover:scale-105 transition-all`}
                  >
                    {url || 'Sitio no disponible'}
                  </a>
                  <a
                    target='blank'
                    href={url}
                    className='block 2xl:hidden hover:scale-105 transition-all'
                  >
                    <MingcuteLinkFill className=' w-8 h-8 ml-12 -mb-6 lg:w-10 lg:h-10 lg:-mb-4 xl:w-12 xl:h-12' />
                  </a>
                </>
              ) : (
                <>
                  <a
                    target='blank'
                    className='block 2xl:hidden hover:scale-105 transition-all'
                  >
                    <MingcuteLinkFill className='w-8 h-8 ml-12 -mb-12 lg:w-10 lg:h-10 lg:-mb-4 opacity-15 xl:w-12 xl:h-12' />
                  </a>
                  <p className='hidden 2xl:block hover:scale-105 transition-all'>
                    ⌛
                  </p>
                </>
              )
            }

            <a
              target='blank'
              href={github}
              className='hidden 2xl:block hover:scale-[1.03] hover:text-red-800 transition-all'
            >
              Github
            </a>
            <a
              target='blank'
              href={github}
              className='hover:text-red-800 text-right pl-24 transition-all visible 2xl:hidden text-white '
            >
              <MdiGithub
                className='w-8 h-8 ml-12 -mb-12 lg:w-10 lg:h-10 lg:-mb-4  xl:w-12 xl:h-12'
                color='white'
              />
            </a>
          </div>
        </div>
        <Card
          isPressable
          isFooterBlurred
          radius='lg'
          className='border-none ml-auto w-[40rem] xl:w-[35rem] lg:w-[30rem] md:w-[25rem] sm:w-[20rem]'
        >
          <Image alt={alt} src={src} className='object-cover' />
          <CardFooter
            className={`${
              disponible ? 'justify-between' : 'justify-center'
            } before:bg-white/10 border-white/20 border-1 h-10 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10`}
          >
            <p className='text-tiny text-white/80'>
              {disponible ? 'Disponible' : 'Aún no disponible'}
            </p>
            {disponible && (
              <Button
                className='text-tiny text-white bg-black/20 hover:text-red-700 transition-colors'
                variant='flat'
                color='default'
                radius='lg'
                size='sm'
              >
                <a
                  target='blank'
                  href={url}
                  className='hover:text-red-700 transition-colors'
                >
                  Ingresar
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default CardComponent
