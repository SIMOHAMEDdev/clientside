import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";

const Section = ({children}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

  return (
    <div className='section' ref={ref}>
        <span 
            className='transition'
            style={{
                transform: isInView ? "none" : "translateY(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
            }}
        >
            {children}
        </span>
    </div>
  )
}

export default Section