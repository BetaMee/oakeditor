import React, { Component } from 'react'
import styled from 'styled-components'

// 引入图标
import SettingsIcon from '../../assets/icons/settings.svg'
// 引入组件
import Wrapper from '../common/components/Wrapper'

const Image = styled.img`
  object-fit: cover;
  width: 36px;
  height: 36px;
`

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
        <Image
          src={SettingsIcon}
          onClick={this.handleClick}
        />
      </Wrapper>
    )
  }
}

export default Setting
