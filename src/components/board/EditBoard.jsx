import React, { Component } from 'react'
import styled from 'styled-components'


import { editor } from '../../core'

const BoradWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`
class EditBorad extends Component {
  editorRef = React.createRef()

  componentDidMount() {
    editor.initMDEditor(this.editorRef.current)
  }

  render() {
    return (
      <BoradWrapper
        innerRef={this.editorRef}
      >
      </BoradWrapper>
    )
  }
} 

export default EditBorad
