import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
// Modal组件
import Modal from '../common/components/Modal'
// 组件
import Panel from './Panel'

const MenuWrapper = Wrapper.extend`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0,0,0,0.3);
  ${({ isDisplay }) => !isDisplay && `display: none`}
`

class MenuPanel extends Component {
  render() {
    const {
      hideMenuPanel,
      isDisplay
    } = this.props
    return (
      <Modal>
        <MenuWrapper
          onClick={hideMenuPanel}
          isUserSelect={false}
          isDisplay={isDisplay}
        >
          {/* menu panel */}
          <Panel />
        </MenuWrapper>
      </Modal>
    )
  }
}

export default MenuPanel
