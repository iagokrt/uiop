import React, { useRef, useState, useCallback } from 'react'
import { useFrame } from 'react-three-fiber'

import { MeshWobbleMaterial } from 'drei'
import { FrontSide } from 'three'
// import { useFrame } from 'react-three-fiber'

const Env = (props) => {
  const mesh = useRef()
  const [active, setActive] = useState(false)

  return (
    <>
      {/*outside environment */}
      <mesh ref={mesh} onClick={(e) => setActive(!active)}>
        <sphereBufferGeometry args={[15, 20, 55]} attach="geometry" />
        <MeshWobbleMaterial
          attach="material"
          side={FrontSide}
          metalness={0.12}
          speed={2}
          color={active ? 'crimson' : 'blue'}
        />
      </mesh>
    </>
  )
}

export { Env }
