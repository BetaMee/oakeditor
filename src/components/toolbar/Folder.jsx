import React, { Component } from 'react'

// 引入组件
import Wrapper from '../common/components/Wrapper'
import Icon from '../common/components/Icon'
import IconWrapper from '../common/components/IconWrapper'

class Folder extends Component {
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
        ><Icon mSize={36}>folder</Icon></IconWrapper>
      </Wrapper>
    )
  }
}

export default Folder
