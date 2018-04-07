import React, { Component } from 'react'

// 引入组件
import Wrapper from '../common/components/Wrapper'
import SVGIconWrapper from '../common/components/SVGIconWrapper'
import SVGIcon from '../common/components/SVGIcon'

class Folder extends Component {
  state = {

  }

  render() {
    const { openFilePanel } = this.props
    return(
      <Wrapper
        layout='rowCenter'
      >
        <SVGIconWrapper
          wSize={38}
          title='Toggle explorer'
          onClick={openFilePanel}
        >
          <SVGIcon name='Folder' size='36' />
        </SVGIconWrapper>
      </Wrapper>
    )
  }
}

export default Folder
