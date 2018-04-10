import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  Bold,
  Code,
  Delete,
  Folder,
  HorizontalRule,
  Image,
  Italic,
  Link,
  ListBulleted,
  ListNumbered,
  NewFile,
  NewFolder,
  Publish,
  Quote,
  Redo,
  Rename,
  Settings,
  Strikethrough,
  Sync,
  Table,
  TextFields,
  Undo,
  Markdown,
  FolderOpen
} from '../icons'

const SVGIconGroupMap = {
  Bold,
  Code,
  Delete,
  Folder,
  HorizontalRule,
  Image,
  Italic,
  Link,
  ListBulleted,
  ListNumbered,
  NewFile,
  NewFolder,
  Publish,
  Quote,
  Redo,
  Rename,
  Settings,
  Strikethrough,
  Sync,
  Table,
  TextFields,
  Undo,
  Markdown,
  FolderOpen
}

const SVGIcon = ({ name, className}) => {
  const SelectedSVGIcon = SVGIconGroupMap[name]
  return SelectedSVGIcon ? <SelectedSVGIcon className={className}/>: null
}

export default styled(SVGIcon)`
  width: ${({ size = '22' }) => `${size}px`};
  height: ${({ size = '22' }) => `${size}px`};
  ${({ color }) => color && `fill: ${color}`}
` 
