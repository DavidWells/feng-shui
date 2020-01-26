import React, { PropTypes, Component } from 'react'

const defaultStyles = {
  position: 'fixed',
  overflow: 'overlay',
}

export function findParentNodeWithHeight (elem) {
  while (elem) {
    // if target is DOCUMENT_NODE bail
    if (elem.nodeType === 9) {
      return null
    }
    if (elem.style && elem.style.height) {
      console.log('height', elem.style.height)
      return elem.style.height
    }
    if (elem.offsetHeight) {
      console.log('offsetHeight', elem.offsetHeight)
      return elem.offsetHeight
    }
    elem = elem.parentNode
  }
  return null
}

export default class Fixed extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    addBumper: PropTypes.bool,
  }
  constructor (props, context) {
    super(props, context)
    this.running = false
    this.bumper = true
    this.resize = this.resize.bind(this)
    this.calculateSize = this.calculateSize.bind(this)
  }
  componentDidMount () {
    this.calculateSize() // calc initial size
    // start process
    window.addEventListener('resize', this.resize)
    if (this.props.addBumper) {
      const height = this.refs.fixed.getBoundingClientRect().height
      const div = document.createElement('div')
      div.style.height = height + 'px'
      this.refs.fixed.parentNode.insertBefore(div, this.refs.fixed.nextSibling)
    }
  }
  calculateSize () {
    const height = findParentNodeWithHeight(this.refs.fixed.parentNode)
    // TODO test clientWidth vs offsetWidth
    // const width = this.refs.fixed.parentNode.offsetWidth
    const width = this.refs.fixed.parentNode.clientWidth
    this.refs.fixed.style.width = width + 'px'
    // check if CSS value already there
    this.refs.fixed.style.height = height
  }
  resize () {
    if (!this.running) {
      this.running = true
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(this.calculateSize)
      } else {
        setTimeout(this.calculateSize, 66)
      }
      this.running = false
    }
  }
  render () {
    const style = {
      ...defaultStyles,
      ...this.props.style,
    }
    return (
      <div {...this.props} style={style} ref='fixed'>
        {this.props.children}
      </div>
    )
  }
}
