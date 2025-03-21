import React from 'react'

interface ShapeProps {
    color: string
    position: string
    width?: string
    height?: string
    className?: string
}

const LiquidShape = ({color, position, width = "500px", height = "500px", className } : ShapeProps) => {
   

  return (
    <svg
        className={`absolute ${position} z-0 ${className}`}
        width={width}
        height={height}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          d="M57.2,-29.6C68.2,-13.8,67.3,12.3,55.8,26.1C44.3,40,22.1,41.6,1.8,40.6C-18.6,39.6,-37.3,36,-51.5,20.5C-65.7,5.1,-75.5,-22.1,-66.2,-36.8C-56.9,-51.5,-28.4,-53.8,-2.7,-52.3C23,-50.7,46.1,-45.3,57.2,-29.6Z"
          transform="translate(100 100)"
        />
      </svg>
  )
}

export default LiquidShape