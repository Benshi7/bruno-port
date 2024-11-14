import React from 'react'

const Noise = () => {
  return (
    <div
      id='noise'
      className={
        '-top-1/2 -left-1/2 -bottom-1/2 -right-1/2 fixed bg-repeat bg-transparent w-[200%] h-[200vh] z-[999999] point-eventers-none opacity-[0.144] brightness-100 contrast-125 '
      }
    >
      <style>
        {`
    #noise {
      background-image: url(/smoke.webp?url);
      animation: noise 0.3s infinite;
      pointer-events: none;
    }
    h1 { font-color: 'red';}
    @keyframes noise {
      0% {
        transform: translate(0,0);
      }
      10% {
        transform: translate(-5%, -5%);
      }
      20% {
        transform: translate(-5%, -10%);
      }
      30% {
        transform: translate(5%, 5%);
      }
      40% {
        transform: translate(-5%, 10%);
      }
      50% {
        transform: translate(5%, -5%);
      }
      60% {
        transform: translate(-10%, 5%);
      }
      70% {
        transform: translate(10%, 10%);
      }
      80% {
        transform: translate(-10%, -10%);
      }
      90% {
        transform: translate(10%, -5%);
      }
      100% {
        transform: translate(-5%, 5%);
      }
    }
  `}
      </style>
    </div>
  )
}

export default Noise
