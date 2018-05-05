import React, { Component } from 'react'
import Wrapper from '../common/components/Wrapper'

class ContentPreviewArea extends Component {
  state = {

  }

  render() {
    const { content } = this.props    
    return (
      <Wrapper
        backgroundColor='#f3f3f3'
      >
      { content }
      </Wrapper>
    )
  }
}

export default ContentPreviewArea
