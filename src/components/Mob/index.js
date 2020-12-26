import React, { useRef, useState } from 'react'
import { BackSide, MeshNormalMaterial } from 'three'

import { MeshWobbleMaterial } from 'drei'

import { useFrame } from 'react-three-fiber'
/**
 *   color={'crimson'}
          attach="material"
          side={BackSide}
          metalness={0.12}
          speed={5}
          factor={0.88}
          wireframe
 */

const Mob = () => {
  const mesh = useRef()

  const [active, setActive] = useState(false)

  useFrame(() => {
    // mesh.current.rotation.x += 0.01
    mesh.current.rotation.y -= 0.02
  })

  return (
    <>
      {/*inside mesh */}
      <mesh
        ref={mesh}
        onClick={(e) => setActive(!active)}
        onPointerMove={(e) => setActive(!active)}
      >
        <octahedronBufferGeometry attach="geometry" />
        <MeshWobbleMaterial
          color={active ? 'crimson' : 'blue'}
          attach="material"
          side={BackSide}
          metalness={0.12}
          speed={4}
          factor={0.28}
          wireframe
        />
      </mesh>
    </>
  )
}

export { Mob }
