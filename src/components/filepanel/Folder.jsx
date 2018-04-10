import React from 'react'
import styled from 'styled-components'

import ContextMenuEnhance from '../common/enhance/ContextMenuEnhance'
import Wrapper from '../common/components/Wrapper'
import SVGIcon from '../common/components/SVGIcon'

const ExtendWrapper = Wrapper.extend`
  cursor: pointer;
  height: 24px;
`

const ContextWrapper = ContextMenuEnhance(ExtendWrapper)


const FolderName = styled.span`
   padding-left: 3px;
`

const Folder = ({ name, menuConfig, isExpand, folderClickHandler, folderKey }) =>
  <ContextWrapper
    menuConfig={menuConfig}
    layout='rowLeft'
    onClick={() => folderClickHandler(folderKey)}
    onContextMenuEvtCb={() => folderClickHandler(folderKey)}
  >
    <SVGIcon name={isExpand ? 'FolderOpen' : 'Folder'}  color='#333' />
    <FolderName>{name}</FolderName>
  </ContextWrapper>

const FolderWrapper = styled.div`
  width: 100%;
  color: rgba(0,0,0,.75);
  font-size: 14px;
`

export {
  FolderWrapper,
  Folder
}