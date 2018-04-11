import React, { Component } from 'react'
import styled from 'styled-components'

import Wrapper from '../common/components/Wrapper'

const ContentEditArea = styled.div`
  height: 100%;
  width: 50%;
  padding-left: 50px;
`

class Board extends Component {
  handleInput = (e) => {
    console.log('handleInput')    
    console.log(e.target)
  }
  handleChange = (e) => {
    console.log('handleChange')    
    console.log(e)
  }
  handleKeyDown = (e) => {
    console.log('handleKeyDown')
    // console.log(e)
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    console.log(range)
  }
  handleBlur = (e) => {
    console.log('handleBlur')
    console.log(e)
  }
  render() {
    return (
      <Wrapper
        layout='rowLeft'
      >
        <ContentEditArea
          contentEditable={true}
          onChange={this.handleChange}
          onInput={this.handleInput}
          onKeyDown={this.handleKeyDown}
          onBlur={this.handleBlur}
        />
      </Wrapper>
    )
  }
}

export default Board
