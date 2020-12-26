import React, { useRef, useState } from 'react'
import { FrontSide, BackSide } from 'three'

import { MeshWobbleMaterial } from 'drei'
/**
 *   color={'crimson'}
          attach="material"
          side={BackSide}
          metalness={0.12}
          speed={5}
          factor={0.88}
          wireframe
 */

const Plane = () => {
  const mesh = useRef()

  function dts(mesh_data) {
    mesh_data = mesh.current
    console.log(mesh_data)
  }

  return (
    <>
      {/*inside mesh */}
      <mesh ref={mesh} onClick={(e) => dts(mesh)}>
        <planeBufferGeometry attach="geometry" />
        <MeshWobbleMaterial
          color={'crimson'}
          attach="material"
          side={BackSide}
          metalness={0.12}
          roughness={1}
          speed={2}
          factor={1}
        />
      </mesh>
    </>
  )
}

export { Plane }
