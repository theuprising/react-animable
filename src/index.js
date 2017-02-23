const debug = require('debug')('react-animable')
import React from 'react'
import GSAP from 'react-gsap-enhancer'

const Animable = GSAP(
  class Animable extends React.Component {
    constructor (props) {
      debug('constructing', props)
      super(props)
      this.makeTimeline = this.makeTimeline.bind(this)
    }
    makeTimeline (props) {
      const _makeTimeline = (props && props.makeTimeline) || this.props.makeTimeline
      debug('making timleine', props, this.props)
      return (utils) => {
        return _makeTimeline(utils.target)
      }
    }
    componentDidMount () {
      debug('did mount')
      this.animationController = this.addAnimation(
        this.makeTimeline()
      )
    }
    componentWillReceiveProps (nextProps) {
      debug('receiving props', nextProps)
      if (nextProps.makeTimeline !== this.props.nextTimeline) {
        this.animationController = this.addAnimation(
          this.makeTimeline(nextProps)
        )
      }
    }
    render () {
      debug('render')
      const {children, id, className} = this.props
      return (
        <div id={id} className={className}>{children}</div>
      )
    }
  }
)
Animable.propTypes = {
  makeTimeline: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
  id: React.PropTypes.string
}

export default Animable

