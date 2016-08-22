import React, { Component, PropTypes } from 'react'

export default class Input extends Component {
  static get displayName () {
    return 'Input'
  }

  static propTypes () {
    return {}
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>Input Component</div>
    )
  }
}
