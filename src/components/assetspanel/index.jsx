import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
// Modal组件
import Modal from '../common/components/Modal'
// 组件
import Panel from './Panel'

const AssetsWrapper = Wrapper.extend`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0,0,0,0.3);
`

class AssetsPanel extends Component {
  render() {
    const { hideAssetsPanel } = this.props
    return (
      <Modal>
        <AssetsWrapper
          onClick={hideAssetsPanel}
          isUserSelect={false}
        >
          {/* Assets panel */}
          <Panel />
        </AssetsWrapper>
      </Modal>
    )
  }
}

export default AssetsPanel

