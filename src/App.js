import React, { Suspense, useRef, useState } from 'react'
import { Canvas } from 'react-three-fiber'
import { BlurPass, Resizer, KernelSize, BlendFunction } from 'postprocessing'
import {
  TrackballControls,
  OrbitControls,
  FlyControls,
  Loader,
  Text,
  MeshWobbleMaterial,
  MeshDistortMaterial
} from 'drei'
import {
  EffectComposer,
  DepthOfField,
  ChromaticAberration,
  Bloom,
  Noise,
  Vignette,
  Glitch,
  Sepia
} from '@react-three/postprocessing'
import { Env } from './components/Env/Env'
import { AmbientLight } from './components/AmbientLight'
import { LightGroup } from './components/LightGroup/LightGroup'
import { Mob } from './components/Mob'
import { Plane } from './components/Plane'

/**
 *
 * post processing effects
 *  <EffectComposer>
            <ChromaticAberration offset={[-0.002, 0.002]} />
          </EffectComposer>

            <Glitch
            delay={[1.5, 3.5]} // min and max glitch delay
            duration={[1.6, 1.0]} // min and max glitch duration
            strength={[0.3, 1.0]} // min and max glitch strength
            active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
            ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
          />
          <Bloom
            intensity={1.0} // The bloom intensity.
            blurPass={undefined} // A blur pass.
            width={Resizer.AUTO_SIZE} // render width
            height={Resizer.AUTO_SIZE} // render height
            kernelSize={KernelSize.LARGE} // blur kernel size
            luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          />
 */
function App() {
  const text = useRef()

  const [active, setActive] = useState(true)

  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 3, 6], fov: 67 }}>
        <Suspense fallback={null}>
          <AmbientLight />
          <LightGroup />

          <Env />
          <Mob />

          <OrbitControls />

          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL} // blend mode
            offset={[0.02, 0.002]} // color offset
          />
          <Text
            ref={text}
            color={active ? 'blue' : 'crimson'}
            fontSize={2}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.025}
            textAlign={'left'}
            onClick={(e) => setActive(!active)}
            onPointerMove={(e) => setActive(!active)}
          >
            chilseok
            <MeshDistortMaterial speed={10} factor={2} />
          </Text>
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
