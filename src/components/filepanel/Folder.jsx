import React from 'react'
import styled from 'styled-components'

import ContextMenuEnhance from '../common/enhance/ContextMenuEnhance'
import Wrapper from '../common/components/Wrapper'
import SVGIcon from '../common/components/SVGIcon'
import { Edit } from './Edit'

const ExtendWrapper = Wrapper.extend`
  cursor: pointer;
  height: 24px;
  ${({ isInEdit }) => !isInEdit && `
    &:hover {
      background-color: rgba(0, 0, 0, .2);
    }
  `}
`

const ContextWrapper = ContextMenuEnhance(ExtendWrapper)

const FolderNameWrapper = Wrapper.extend`
  position: relative;
  width: 88%;
`

const FolderName = styled.span`
   padding-left: 3px;
`

const Folder = (props) => {
  const {
    name,
    menuConfig,
    isExpand,
    folderClickHandler,
    folderKey,
    isInEdit,
    isInAdd,
    // 请求函数
    RenameFolderRequest,
    AddNewFolderRequest,
    cancelEditMode
  } = props

  return (
    <ContextWrapper
      menuConfig={menuConfig}
      layout='rowLeft'
      onClick={() => folderClickHandler(folderKey)}
      onContextMenuEvtCb={(contextMenuClickFlag) => folderClickHandler(folderKey, contextMenuClickFlag)}
      isInEdit={isInEdit}
    >
      <Wrapper
        wWidth='12%'
      >
        <SVGIcon name={isExpand ? 'FolderOpen' : 'Folder'}  color='#333' />
      </Wrapper>
      <FolderNameWrapper
        layout='rowLeft'
      >
        <FolderName>{name}</FolderName>
        { isInEdit &&
            <Edit
              submitRequest={isInAdd ? AddNewFolderRequest : RenameFolderRequest}
              cancelEditMode={cancelEditMode}
              value={name}
              requestParam={isInAdd ? '' : folderKey}
            />
        }
      </FolderNameWrapper>
    </ContextWrapper>
  )
}
const FolderWrapper = styled.div`
  width: 100%;
  color: rgba(0,0,0,.75);
  font-size: 14px;
`

export {
  FolderWrapper,
  Folder
}