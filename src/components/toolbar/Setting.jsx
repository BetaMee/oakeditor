import React, { Component } from 'react'
import styled from 'styled-components'

// 引入组件
import Wrapper from '../common/components/Wrapper'
import Icon from '../common/components/Icon'
import IconWrapper from '../common/components/IconWrapper'

class Setting extends Component {
  state = {

  }

  handleClick = (e) => {
    console.log(e)
  }

  render() {
    return(
      <Wrapper
        layout='rowCenter'
      >
        <IconWrapper
          wHeight={38}
          wWidth={38}
          onClick={this.handleClick}
        ><Icon mSize={36}>settings</Icon></IconWrapper>
      </Wrapper>
    )
  }
}

export default Setting
