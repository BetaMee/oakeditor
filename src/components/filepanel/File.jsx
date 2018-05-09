import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'

import ContextMenuEnhance from '../common/enhance/ContextMenuEnhance'
import Wrapper from '../common/components/Wrapper'
import SVGIcon from '../common/components/SVGIcon'
import { Edit } from './Edit'

const ExtendWrapper = Wrapper.extend`
  cursor: pointer;
  padding-left: 22px;
  height: 24px;
  ${({ active }) => active && `background-color: rgba(0,0,0,.3);`};
  ${({ isInEdit }) => !isInEdit && `
    &:hover {
      background-color: rgba(0,0,0,.3);
    }
  `}
`

const ContextWrapper = ContextMenuEnhance(ExtendWrapper)

const FileNameWrapper = Wrapper.extend`
  position: relative;
  width: 88%;
`

const FileName = styled.span`
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding-left: 3px;
`

const File = (props) => {
  const {
    name,
    menuConfig,
    isSelected,
    folderKey,
    folderName,
    fileKey,
    fileClickHandler,
    RenameFileRequest,
    cancelEditMode,
    isInEdit,
    history
  } = props
  return (
    <ContextWrapper
      menuConfig={menuConfig}
      layout='rowLeft'
      active={isSelected}
      isInEdit={isInEdit}
      onClick={() => fileClickHandler(folderKey, fileKey)}
      onContextMenuEvtCb={() => {
        history.push(`/${folderName}/${fileKey}`)
        fileClickHandler(folderKey, fileKey)
      }}
    >
      <Wrapper
        wWidth='12%'
      >
        <SVGIcon name='Markdown'/>
      </Wrapper>
      <FileNameWrapper>
        <FileName>{name}</FileName>
        { isInEdit &&
            <Edit
              submitRequest={RenameFileRequest}
              cancelEditMode={cancelEditMode}
              value={name}
              requestId={fileKey}
            />
        }
      </FileNameWrapper>
      
    </ContextWrapper>
  )
}
  


const FileWrapper = styled.div`
  box-sizing: border-box;
  ${({ isExpand }) => !isExpand && `display: none`};
`

const withRouterFile = withRouter(File)

export {
  FileWrapper,
  withRouterFile as File
}
