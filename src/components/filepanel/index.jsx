import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
// Modal组件
import Modal from '../common/components/Modal'

const FileWrapper = Wrapper.extend`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`

class FilePanel extends Component {
  render() {
    const { hideFilePanel } = this.props
    return (
      <Modal>
        <FileWrapper
          backgroundColor='rgba(0,0,0,0.5)'
          onClick={hideFilePanel}
        >
          {/* file panel */}
        </FileWrapper>
      </Modal>
    )
  }
}

export default FilePanel
