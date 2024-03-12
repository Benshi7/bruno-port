import React from 'react'
import Reveal from '../../ui/Reveal'

const BrandImage = ({ src, alt, link, className }) => (
  <a href={link} target='blank' >
    <img loading="lazy" src={src} alt={alt} className={className} />
  </a>
)

const FooterText = () =>
  <footer className=" pb-4 self-center mt-3.5 text-sm font-light tracking-normal leading-5 text-white whitespace-nowrap">
    made by <span className='font-bold'>bruno</span>
  </footer>

const Footer = () => {
  const brandImages = [
    {
      src: 'https://i.imgur.com/orpz3Aq.png',
      alt: 'Brand Logo 1',
      className: 'self-stretch my-auto aspect-[1.02] fill-neutral-300 w-[50px]  hover:scale-110 transition-all',
      link: 'http://www.github.com'
    },
    {
      src: 'https://i.imgur.com/wV36Cyz.png',
      alt: 'Brand Logo 2',
      className: 'aspect-square w-[54px]  hover:scale-110 transition-all',
      link: 'http://www.linkedin.com'
    }
  ]

  return (
    <div className="flex flex-col items-center px-16 pt-10 pb-10max-md:px-5"> {/*  bg-zinc-900  */}
    <Reveal movementY={80} movementX={0}>
      <div className="flex flex-col max-w-full w-[274px]">
        <div className="flex gap-4 justify-center items-start">
          {brandImages.map((img, index) => (
            <BrandImage key={index} src={img.src} alt={img.alt} link={img.link} className={img.className} />
          ))}
        </div>
        <FooterText />
      </div>
      </Reveal>
    </div>
  )
}

export default Footer
