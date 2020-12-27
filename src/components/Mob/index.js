import React, { useRef, useState, useMemo } from 'react'
import { BackSide, MeshNormalMaterial, FrontSide, DoubleSide } from 'three'

import { MeshWobbleMaterial } from 'drei'

import { useFrame } from 'react-three-fiber'

const NUM = 1

const Mob = () => {
  const mesh = useRef()
  const [active, setActive] = useState(false)

  // useFrame((t) => {
  //   mesh.current.rotation.y += 0.01
  //   mesh.current.scale.y = mesh.current.scale.z = mesh.current.scale.x += 0.01
  // })
  // const args = [
  //   {
  //     position: [0, 0, 5],
  //     color: '#ff0000'
  //   },
  //   {
  //     position: [0, 0, -5],
  //     color: '#00ff00'
  //   }
  // ]
  return (
    <>
      <group>
        <mesh onClick={(e) => console.log('click')}>
          <coneBufferGeometry attach="geometry" />
          <meshNormalMaterial attach="material" wireframe />
        </mesh>
      </group>
    </>
  )
}

export { Mob }
