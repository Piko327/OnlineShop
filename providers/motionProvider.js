'use client'
import { motion,AnimatePresence } from "framer-motion"
import React from 'react'



const MotionProvider = ({children}) => {
    return (
        <AnimatePresence>
        <motion.div
        initial={{opacity:0,y:15,translateX:-10,translateY:-10}}
        animate={{opacity:1,y:0,translateX:0,translateY:0}}
        exit={{opacity:0,y:15}}
    transition={{duration:0.3 ,delay:0.2}}
        >{children}</motion.div>
        </AnimatePresence>
      )
}

export default MotionProvider



