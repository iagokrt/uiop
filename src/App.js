import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { MeshWobbleMaterial, TrackballControls } from 'drei'
import {
  EffectComposer,
  ChromaticAberration
} from '@react-three/postprocessing'
import { AmbientLight } from './components/AmbientLight'
import { Sourcery } from './components/Sourcery'
import { FrontSide } from 'three'

import { Frames } from './Frames'

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
      <Canvas colorManagement camera={{ position: [-5, 6, 12], fov: 67 }}>
        <Suspense fallback={null}>
          <AmbientLight />

          {/* Light Group */}
          <group>
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <pointLight position={[20, -10, 0]} intensity={1.5} />
          </group>

          {/* controller || wireframed mesh */}
          <group>
            <mesh
              onPointerOver={(e) => setActive(!active)}
              position={[0, -2, 0]}
            >
              <octahedronBufferGeometry args={[1, 2]} attach="geometry" />
              <MeshWobbleMaterial
                attach="material"
                speed={active ? 1 : 10}
                color="purple"
                wireframe
                factor={active ? 0.8 : 0.13}
              />
            </mesh>
          </group>

          <Sourcery />

          {/* big mesh || environment */}
          <group>
            <mesh ref={mesh}>
              <sphereBufferGeometry
                args={active ? [19, 20, 55] : [15, 2, 55]}
                attach="geometry"
              />
              <MeshWobbleMaterial
                attach="material"
                side={FrontSide}
                metalness={0.12}
                speed={active ? Math.PI / 1.1 : Math.E / 2}
                color={active ? 'crimson' : 'blue'}
              />
            </mesh>
          </group>

          {/* drei controlls */}
          <TrackballControls noZoom={active ? false : true} />
        </Suspense>
      </Canvas>
      <Frames />
    </>
  )
}

export default App
