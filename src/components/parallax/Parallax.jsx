import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './style.scss'

function Parallax({ type }) {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const yText = useTransform(scrollYProgress, [0,1], ['0%','500%'])
  const yBg = useTransform(scrollYProgress, [0,1], ['0%','100%'])

  return (
    <div 
    ref={ref}
    className='parallax' 
    style={{background: 'linear-gradient(180deg,#111132,#505064)'}}
    >
        <motion.h1 style={{y: yText}}>What I Did ?</motion.h1>
        <motion.div className='mountains'></motion.div>
        <motion.div style={{y: yBg}} className='planets'></motion.div>
        <motion.div style={{x: yBg}} className='stars'></motion.div>
    </div>
  )
}
export default Parallax