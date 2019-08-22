import React, { Component } from 'react'
import Example from '../../components/Example'
import html from './index.html.js'

class Events extends Component {
  render() {
    return (
      <Example
        title="Events"
        html={html}
      />
    )
  }
}

export default Events