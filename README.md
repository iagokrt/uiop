# uiop-explore


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

-
- post processing effects
- <EffectComposer>
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

  // Rotate mesh every frame
  // useFrame((t) => {
  // mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  // })

  // const handleClick = useCallback((e) => {
  // e.stopPropagation()
  // setActive((v) => !v)
  // }, [])

  <MeshWobbleMaterial
  attach="material"
  side={FrontSide}
  metalness={0.12}
  speed={2}
  color={active ? 'crimson' : 'blue'}
  />

    <meshNormalMaterial attach="material" />

-- positional audio drei

// load song context to use with positional audio
// const argument = { url: 'Salvando.m4a' }
/_ <PositionalAudio url={argument.url} /> _/

<ChromaticAberration
blendFunction={BlendFunction.NORMAL} // blend mode
offset={[0.02, 0.002]} // color offset
/>

-drei text compnt

<Text
ref={text}
color={active ? 'blue' : 'crimson'}
fontSize={2}
maxWidth={200}
lineHeight={1}
letterSpacing={0.025}
textAlign={'left'}
onClick={(e) => setActive(!active)}
onPointerMove={(e) => setActive(!active)} >
chilseok
<MeshDistortMaterial speed={10} factor={2} />
</Text>

       not workds onCreated={(() => THREE, AudioContext.resume())}

//

// post processing effects
// function Effect({ down }) {
// const composer = useRef()
// const { scene, gl, size, camera } = useThree()
// const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [
// size
// ])
// useEffect(() => void composer.current.setSize(size.width, size.height), [
// size
// ])
// useFrame(() => composer.current.render(), 1)
// return (
// <effectComposer ref={composer} args={[gl]}>
// <renderPass attachArray="passes" scene={scene} camera={camera} />
// <waterPass attachArray="passes" factor={1.5} />
// <unrealBloomPass attachArray="passes" args={[aspect, 2, 1, 0]} />
// <glitchPass attachArray="passes" factor={down ? 1 : 0} />
// </effectComposer>
// )
// }

/\*\*

-
- @param mesh
-
- \*const Env = (props) => {
  const mesh = useRef()
  const [active, setActive] = useState(false)

  return (
  <>
  <mesh ref={mesh} onClick={(e) => setActive(!active)}>
  <sphereBufferGeometry args={[15, 20, 55]} attach="geometry" />
  <MeshWobbleMaterial
  attach="material"
  side={FrontSide}
  metalness={0.12}
  speed={2}
  color={active ? 'crimson' : 'blue'}
  />
  </mesh>
  </>
  )
  }

/\*\*\*/

## groups

import React, { useRef, useState, useMemo } from 'react'
import { BackSide, MeshNormalMaterial, FrontSide, DoubleSide } from 'three'

import { MeshWobbleMaterial } from 'drei'

import { useFrame } from 'react-three-fiber'

const NUM = 1

const Mob = () => {
const locations = useMemo(() => {
const pos = []
const half = (NUM - 1) / 2

    for (let x = 0; x < NUM; x++) {
      for (let y = 0; y < NUM; y++) {
        pos.push({
          id: `${x}-${y}`,
          position: [(x - half) * 4, (y - half) * 4, 0]
        })
      }
    }

    return pos

}, [])

const mesh = useRef()
const [active, setActive] = useState(false)

// useFrame((t) => {
// mesh.current.rotation.y += 0.01
// mesh.current.scale.y = mesh.current.scale.z = mesh.current.scale.x += 0.01
// })
// const args = [
// {
// position: [0, 0, 5],
// color: '#ff0000'
// },
// {
// position: [0, 0, -5],
// color: '#00ff00'
// }
// ]
return (
<>
<group position={[0, 0, 12]}>
{locations.map(({ id, position }) => (
<mesh key={id} position={position} args={[1, 1]}>
<coneBufferGeometry attach="geometry" />
<meshNormalMaterial attach="material" color="white" wireframe />
</mesh>
))}
</group>
</>
)
}

export { Mob }
