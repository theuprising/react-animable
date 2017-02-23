import {TweenMax} from 'gsap'

import React from 'react'
import ReactAnimable from '../src/'

export default class Demo extends React.Component {
  constructor (props) {
    super(props)
    this.toggleState = this.toggleState.bind(this)

    this.state = {
      opacity: 0,
      x: -100
    }
  }

  toggleState () {
    if (this.state.opacity === 0) {
      this.setState({
        opacity: 1,
        x: 100
      })
    } else {
      this.setState({
        opacity: 0,
        x: -100
      })
    }
  }

  componentDidMount () {
    setInterval(this.toggleState, 2000)
  }

  render () {
    const {opacity, x} = this.state
    return (
      <main>
        <ReactAnimable
          makeTimeline={el => TweenMax.to(el, 1, {opacity, x})}
        >
          THING
        </ReactAnimable>
      </main>
    )
  }
}

