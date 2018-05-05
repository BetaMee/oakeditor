import React from 'react'

import Wrapper from '../common/components/Wrapper'
// Modal组件
import Modal from '../common/components/Modal'
// 组件
import Panel from './Panel'

const FileWrapper = Wrapper.extend`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0,0,0,0.3);
  ${({ isDisplay }) => !isDisplay && `display: none`}
`

const FilePanel = ({ hideFilePanel, isDisplay }) =>
  <Modal>
    <FileWrapper
      onClick={hideFilePanel}
      isUserSelect={false}
      isDisplay={isDisplay}
    >
      {/* file panel */}
      <Panel />
    </FileWrapper>
  </Modal>

export default FilePanel
