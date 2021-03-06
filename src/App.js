import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { MeshWobbleMaterial, TrackballControls } from 'drei'
import {
  EffectComposer,
  ChromaticAberration
} from '@react-three/postprocessing'
import { AmbientLight } from './components/AmbientLight'
import { LightGroup } from './components/LightGroup/LightGroup'
import { Sourcery } from './components/Sourcery'
import { FrontSide } from 'three'

import { Frames } from './Frames'
import { act } from 'react-dom/test-utils'

function Effect({ offset }) {
  return (
    <EffectComposer>
      <ChromaticAberration offset={[-0.002, 0.009]} />
    </EffectComposer>
  )
}

function App() {
  const mesh = useRef()

  const [active, setActive] = useState(false)

  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 3, 12], fov: 67 }}>
        <Suspense fallback={null}>
          <AmbientLight />
          <LightGroup />

          <group>
            <mesh
              onPointerOver={(e) => setActive(!active)}
              position={[0, -2, 0]}
            >
              <octahedronBufferGeometry args={[1, 2]} attach="geometry" />
              <MeshWobbleMaterial
                attach="material"
                speed={active ? 1 : 3}
                color="purple"
                wireframe
                factor={active ? 0.1 : 0.4}
              />
            </mesh>
          </group>

          <Sourcery />

          {/*main environment */}
          <group>
            <mesh ref={mesh}>
              <sphereBufferGeometry args={[15, 20, 55]} attach="geometry" />
              <MeshWobbleMaterial
                attach="material"
                side={FrontSide}
                metalness={0.12}
                speed={active ? 8 : 2}
                color={active ? 'crimson' : 'blue'}
              />
            </mesh>
          </group>

          <TrackballControls noZoom />
        </Suspense>
      </Canvas>
      <Frames />
    </>
  )
}

export default App
