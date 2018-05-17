import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import { editor } from '../../core'

const EditWrapper = Wrapper.extend`
  padding-right: 20px;
`

class ContentEditArea extends Component {
  editorRef = React.createRef()

  componentDidMount() {
    editor.initMDEditor(this.editorRef.current)
      .bindEditorChangeHandler(this.editorOnChangeHanlder)
      .bindEditorScrollHandler()
      .bindExtralKeyEvent({
        'Ctrl-S': this.editorOnSaveHandler
      })
  }

  editorOnSaveHandler = () => {
    const {
      onSave
    } = this.props
    onSave()
  }

  editorOnChangeHanlder = (value) => {
    const { onChange } = this.props
    onChange(value)
  }

  render() {
    return (
      <EditWrapper
        innerRef={this.editorRef}
      />
    )
  }
}

export default ContentEditArea
