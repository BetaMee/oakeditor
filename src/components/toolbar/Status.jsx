import React, { Component } from 'react'

// 引入组件
import Wrapper from '../common/components/Wrapper'
import SVGIconWrapper from '../common/components/SVGIconWrapper'
import SVGIcon from '../common/components/SVGIcon'
import Input from '../common/components/Input'

const TitleInput = Input.extend`
  padding: 4px 12px 4px 12px;
  font-size: 21px;
  border-radius: 2px;
  &:hover {
    color: #fff;
    background-color: hsla(0,0%,100%,.1);
  }
`

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
        <TitleInput
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
