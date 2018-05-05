import React, { Component } from 'react'
import Wrapper from '../common/components/Wrapper'

class ContentEditArea extends Component {
  state = {

  }

  render() {
    const { content } = this.props
    return (
      <Wrapper>
        {content}
      </Wrapper>
    )
  }
}

export default ContentEditArea
