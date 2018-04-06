import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
// Modal组件
import Modal from '../common/components/Modal'

const MenuWrapper = Wrapper.extend`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`

class MenuPanel extends Component {
  render() {
    const { hideMenuPanel } = this.props
    return (
      <Modal>
        <MenuWrapper
          backgroundColor='rgba(0,0,0,0.5)'
          onClick={hideMenuPanel}
        >
          {/* menu panel */}
        </MenuWrapper>
      </Modal>
    )
  }
}

export default MenuPanel