import React, { Component } from 'react'

// 引入组件
import Wrapper from '../common/components/Wrapper'
import Icon from '../common/components/Icon'
import IconWrapper from '../common/components/IconWrapper'
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
        <IconWrapper><Icon>sync</Icon></IconWrapper>
        {/* 输入框 */}
        <Input
          onChange={this.handleTitleInput}
          value={'你好'}
        />
        <IconWrapper><Icon>sync</Icon></IconWrapper>
        <IconWrapper><Icon>publish</Icon></IconWrapper>
      </Wrapper>
    )
  }
}

export default Status
