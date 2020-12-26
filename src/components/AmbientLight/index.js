import React, { useRef } from 'react'
// import { ambientLight } from 'three'

import { useFrame } from 'react-three-fiber'

/**
 * This creates a Ambientlight with a color.
 * @param color Numeric value of the RGB component of the color or a Color instance.
 * @param [intensity=1]
 */
// constructor( color?: Color | string | number, intensity?: number );
const AmbientLight = () => {
  const light = useRef()

  useFrame(() => {
    // console.log(rd)
  })

  return <ambientLight ref={light} intensity={1} color={0x404040} />
}

export { AmbientLight }
