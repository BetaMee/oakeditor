import React, { Component } from 'react'
// 引入组件
import Wrapper from '../common/components/Wrapper'
import SVGIconWrapper from '../common/components/SVGIconWrapper'
import SVGIcon from '../common/components/SVGIcon'

class Setting extends Component {
  state = {

  }

  render() {
    const { openMenuPanel } = this.props
    return(
      <Wrapper
        layout='rowCenter'
      >
        <SVGIconWrapper
          wSize={38}
          title='Menu'
          onClick={openMenuPanel}
        >
          <SVGIcon name='Settings' size='36' />
        </SVGIconWrapper>
      </Wrapper>
    )
  }
}

export default Setting
