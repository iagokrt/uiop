import React, { useRef } from 'react'
import { ambientLight, pointLight } from 'three'

import { useFrame } from 'react-three-fiber'

const LightGroup = () => {
  // const light = useRef()

  // useFrame(() => {
  //   light.current.rotation.x = light.current.rotation.y += 0.01
  // })

  return (
    <group>
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <pointLight position={[20, -10, 0]} intensity={1.5} />
    </group>
  )
}

export { LightGroup }
