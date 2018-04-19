import React from 'react'
import styled from 'styled-components'

import ContextMenuEnhance from '../common/enhance/ContextMenuEnhance'
import Wrapper from '../common/components/Wrapper'
import SVGIcon from '../common/components/SVGIcon'

const ExtendWrapper = Wrapper.extend`
  cursor: pointer;
  padding-left: 22px;
  padding-right: 15px;
  height: 24px;
  ${({ active }) => active && `background-color: rgba(0,0,0,.3);`};
  &:hover {
    background-color: rgba(0,0,0,.3);
  }
`

const ContextWrapper = ContextMenuEnhance(ExtendWrapper)

const FileName = styled.span`
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding-left: 3px;
`

const File = ({ name, menuConfig,isSelected, folderKey, fileKey, fileClickHandler }) =>
  <ContextWrapper
    menuConfig={menuConfig}
    layout='rowLeft'
    active={isSelected}
    onClick={() => fileClickHandler(folderKey, fileKey)}
    onContextMenuEvtCb={() => fileClickHandler(folderKey, fileKey)}    
  >
    <SVGIcon name='Markdown'/>
    <FileName>{name}</FileName>
  </ContextWrapper>


const FileWrapper = styled.div`
  box-sizing: border-box;
  ${({ isExpand }) => !isExpand && `display: none`};
`

export {
  FileWrapper,
  File
}
