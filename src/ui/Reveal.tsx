import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, useIsPresent} from "framer-motion"

interface Props {
  children: JSX.Element
  width?: 'fit-content' | '100%'
  movementY: number
  movementX: number
}

const Reveal = ({ children, movementY, movementX}: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once:true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if(isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView])

  return (
    <div ref={ref} style={{overflow:'hidden' }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y:movementY, x:movementX},
          visible: { opacity: 1, y: 0, x:0}
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.35}}>
        {children}
      </motion.div>

    </div>
  )
}

export default Reveal