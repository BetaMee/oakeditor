import React, { Component } from 'react'
import Wrapper from '../common/components/Wrapper'

class ContentEditArea extends Component {
  state = {

  }

  // SaveContent = (e)  => {
  //   if(e.ctrlKey === true && e.keyCode === 83) {
  //     console.log('ctrl+s')
  //     return false // 截取返回false就不会保存网页了
  //   }
  // }

  render() {
    const { content } = this.props
    return (
      <Wrapper
        onKeyDown={this.SaveContent}
      >
        {content}
      </Wrapper>
    )
  }
}

export default ContentEditArea
