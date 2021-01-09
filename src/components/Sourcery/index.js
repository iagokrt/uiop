import React, { useRef, useState } from 'react'
import { FrontSide, BackSide } from 'three'

import { MeshWobbleMaterial, PositionalAudio } from 'drei'

const Sourcery = () => {
  const mesh = useRef()

  const [selected, set] = useState(false)

  const meshes = [
    {
      position: [selected ? 8 : 2, 0, 0],
      url: 'Salvando.m4a',
      color: '#0000ff',
      visible: true
    },
    {
      position: [-10, -10, -10],
      url: 'Saverrr.m4a',
      color: '#ff0000',
      visible: false
    }
  ]

  return (
    <>
      {/* inside music orbs - meshes */}
      <group position={[0, 0, 5]}>
        {meshes.map(({ position, url, color, visible }, index) => (
          <mesh
            key={`0${index}`}
            position={position}
            onClick={() => set(!selected)}
            ref={mesh}
            visible={visible}
          >
            <octahedronBufferGeometry attach="geometry" />

            <MeshWobbleMaterial
              attach="material"
              side={FrontSide}
              metalness={0.12}
              factor={0.9}
              speed={2}
              color={color}
            />
            <PositionalAudio url={url} />
          </mesh>
        ))}
      </group>
    </>
  )
}

export { Sourcery }
