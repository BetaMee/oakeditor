import React, { Component } from 'react'
import Wrapper from '../common/components/Wrapper'
import { editor } from '../../core'

class ContentEditArea extends Component {
  state = {

  }

  // SaveContent = (e)  => {
  //   if(e.ctrlKey === true && e.keyCode === 83) {
  //     console.log('ctrl+s')
  //     return false // 截取返回false就不会保存网页了
  //   }
  // }

  inputHandler = (e) => {
    // console.log(e.target.value)
  }

  componentDidMount() {
    editor.DOMObserver()
  }

  render() {
    const { content } = this.props
    return (
      <Wrapper
        onKeyDown={this.SaveContent}
      >
        <div
          id='article'
          style={{
            width: '100%',
            height: '100%'
          }}
          contentEditable='plaintext-only'
          dangerouslySetInnerHTML={{__html: content}}
          onInput={this.inputHandler}
        ></div>
      </Wrapper>
    )
  }
}

export default ContentEditArea
