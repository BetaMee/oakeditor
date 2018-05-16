import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import { editor } from '../../core'

class ContentEditArea extends Component {
  editorRef = React.createRef()

  componentDidMount() {
    editor.initMDEditor(this.editorRef.current)
      .bindEditorChangeHandler(this.editorOnChangeHanlder)
  }

  editorOnChangeHanlder = (value) => {
    const { onChange } = this.props
    onChange(value)
  }

  render() {
    return (
      <Wrapper
        innerRef={this.editorRef}
      />
    )
  }
}

export default ContentEditArea
