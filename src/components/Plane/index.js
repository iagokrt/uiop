import React, { useRef, useState } from 'react'
import { FrontSide, BackSide } from 'three'

import { MeshWobbleMaterial } from 'drei'

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
        <planeBufferGeometry args={[2, 10]} attach="geometry" />
        <meshBasicMaterial  side={FrontSide} attach="material" />
      </mesh>
    </>
  )
}

export { Plane }
