import React, { Component } from 'react'
import ClipboardJS from 'clipboard'

class Clipboard extends Component {
  state = {
    clipboardId: `clipbord-${this.props.id}-${+new Date()}`
  }
  componentDidMount() {
    const { clipboardId } = this.state
    new ClipboardJS(`#${clipboardId}`)
  }
  render() {
    const {
      children,
      data
    } = this.props
    const {
      clipboardId
    } = this.state
    return React.cloneElement(children, {
      id: clipboardId,
      'data-clipboard-text': data 
    })
  }
}

export default Clipboard
