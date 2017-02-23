import React from 'react'
import GSAP from 'react-gsap-enhancer'

const Animable = GSAP(
  class Animable extends React.Component {
    constructor (props) {
      super(props)
      this.makeTimeline = this.makeTimeline.bind(this)
    }
    makeTimeline (props) {
      const _makeTimeline = (props && props.makeTimeline) || this.props.makeTimeline
      return (utils) => {
        return _makeTimeline(utils.target)
      }
    }
    componentDidMount () {
      this.animationController = this.addAnimation(
        this.makeTimeline()
      )
    }
    componentWillReceiveProps (nextProps) {
      if (nextProps.makeTimeline !== this.props.nextTimeline) {
        this.makeTimeline(nextProps)
      }
    }
    render () {
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

