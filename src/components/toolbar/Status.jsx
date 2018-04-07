import React, { Component } from 'react'

// 引入组件
import Wrapper from '../common/components/Wrapper'
import SVGIconWrapper from '../common/components/SVGIconWrapper'
import SVGIcon from '../common/components/SVGIcon'
import Input from '../common/components/Input'

class Status extends Component {
  state = {

  }

  handleTitleInput = (e) => {

  }

  render() {
    return (
      <Wrapper
        layout='rowRight'
        wPadding='0 20px 0 0'        
      >
        <SVGIconWrapper
          title='Sync'
        >
          <SVGIcon name='Sync' />
        </SVGIconWrapper>
        {/* 输入框 */}
        <Input
          onChange={this.handleTitleInput}
          value={'你好'}
        />
        <SVGIconWrapper
          title='Synchronize now'
        >
          <SVGIcon name='Sync' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Publish'
        >
          <SVGIcon name='Publish' />
        </SVGIconWrapper>
      </Wrapper>
    )
  }
}

export default Status
