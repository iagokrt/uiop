import React, { useRef, useState, useCallback } from 'react'
import { useFrame } from 'react-three-fiber'

import { MeshWobbleMaterial, PositionalAudio } from 'drei'
import { FrontSide } from 'three'
// import { useFrame } from 'react-three-fiber'

const Env = (props) => {
  const mesh = useRef()
  const [active, setActive] = useState(false)

  // load song context to use with positional audio
  const argument = { url: 'Salvando.m4a' }
  // <PositionalAudio url={argument.url} />

  // Rotate mesh every frame
  // useFrame((t) => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  // })

  // const handleClick = useCallback((e) => {
  //   e.stopPropagation()
  //   setActive((v) => !v)
  // }, [])

  /**
   * useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
   */
  useFrame((t) => {
    // Here we use a sine wave to move between y: [-1, 1]
    if (active) {
      mesh.current.rotation.y += 0.1

      if (mesh.current.position.y > 20) {
        mesh.current.position.y = 0
      }
    }
  })

  return (
    <>
      {/*outside environment */}
      <mesh ref={mesh} onClick={(e) => setActive(!active)}>
        <sphereBufferGeometry args={[15, 20, 50]} attach="geometry" />
        <MeshWobbleMaterial
          attach="material"
          side={FrontSide}
          metalness={0.12}
          speed={2}
          color={active ? 'crimson' : 'blue'}
        />
        <PositionalAudio url={argument.url} />
      </mesh>
    </>
  )
}

export { Env }
