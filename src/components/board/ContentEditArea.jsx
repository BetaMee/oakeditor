import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import { editor } from '../../core'

const EditWrapper = Wrapper.extend`
  padding-right: 20px;
`
// 临时方案，解决每次onChange更新context带来的卡顿，未来将content数据移至本地存储
const ignoreKeyCode = [
  37,38,39,40, // 上下左右
  20, // tab
  16, // shift
  17, // ctrl
  27, // esc
]

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
    const {
      onUpdate
    } = this.props
    return (
      <EditWrapper
        innerRef={this.editorRef}
        onKeyUp={(e) => {
          if (!ignoreKeyCode.includes(e.keyCode))
            onUpdate()
        }}
      />
    )
  }
}

export default ContentEditArea
