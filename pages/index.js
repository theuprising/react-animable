import {TweenMax} from 'gsap'

import React from 'react'
import ReactAnimable from '../src/'

export default () => {
  return (
    <main>
      <ReactAnimable
        makeTimeline={el => TweenMax.from(el, 1, {opacity: 0, x: -100})}
      >
        THING
      </ReactAnimable>
    </main>
  )
}

