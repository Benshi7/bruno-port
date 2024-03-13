import React from 'react'
import { Card, Image, CardFooter, Button } from '@nextui-org/react'
import PropTypes from 'prop-types'
import { MingcuteLinkFill } from './LinkSvg'

const CardComponent = ({ title, description, url, github, alt, src, disponible = false }) => {
  return (
      <div className="rounded-md p-4 opacity-80 hover:opacity-100 transition-all">
      <h2 className="text-2xl font-semibold mb-4 text-right text-slate-200">{title}</h2>
      <div className="flex items-center pl-0">
        <div className='pl-0 2xl:pl-80'>
        <p className="hidden justify-end items-end text-balance text-sm font-light xl:flex">{description}</p>
        <div>
        { url !== ''
          ? (<>
            <a target='blank' href={url} className={`${disponible === false ? null : 'hover:text-red-800 transition-colors'}`}>{url || 'Sitio no disponible'}</a>
            <br />
          </>)
          : null
        }
        <a target='blank' href={github} className='hover:text-red-800 transition-colors'>Github</a>
        </div>
        </div>
        <Card
          isPressable
          isFooterBlurred
          radius="lg"
          className="border-none ml-auto"
        >
          <Image
            alt={alt}
            className="object-cover"
            height={350}
            src={src}
            width={350}
          />
          <CardFooter className={`${disponible ? 'justify-between' : 'justify-center'} before:bg-white/10 border-white/20 border-1 h-10 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10`}>
            <p className="text-tiny text-white/80">{ disponible ? 'Disponible' : 'Aún no disponible'}</p>
            {
            disponible &&
              <Button className="text-tiny text-white bg-black/20 hover:text-red-700 transition-colors" variant="flat" color="default" radius="lg" size="sm">
              <a target='blank' href={url} className='hover:text-red-700 transition-colors'>
              Ingresar
              </a>
            </Button>
            }
          </CardFooter>
        </Card>
      </div>
  </div>
  )
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  disponible: PropTypes.bool
}

CardComponent.defaultProps = {
  disponible: false
}

export default CardComponent
