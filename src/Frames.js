import React from 'react'
import { Stats } from 'drei'

const Frames = (props) => {
  return (
    <>
      <div className="frame">
        <a className="frame__title" href="https://github.com/iagokrt">
          iagokrt/react-three-fiber three.js practice
        </a>
      </div>
      <Stats />
    </>
  )
}

export { Frames }
