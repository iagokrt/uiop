import React, { useRef, useState } from 'react'
import { FrontSide, BackSide } from 'three'

import { MeshWobbleMaterial, PositionalAudio } from 'drei'

const Sourcery = () => {
  const mesh = useRef()

  const [select, set] = useState(false)

  const args = [
    {
      position: [10, 0, -10],
      url: 'Salvando.m4a',
      color: '#0000ff'
    },
    {
      position: [-10, 0, -10],
      url: 'Saverrr.m4a',
      color: '#ff0000'
    }
  ]

  return (
    <>
      {/*inside meshes */}
      <group position={[0, 0, 5]}>
        {args.map(({ position, url, color }, index) => (
          <mesh
            key={`0${index}`}
            position={position}
            onClick={() => set(!select)}
            ref={mesh}
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
