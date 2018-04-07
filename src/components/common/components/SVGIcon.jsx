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
  Undo
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
  Undo
}

const SVGIcon = ({ name, className}) => {
  const SelectedSVGIcon = SVGIconGroupMap[name]
  return SelectedSVGIcon ? <SelectedSVGIcon className={className}/>: null
}

export default styled(SVGIcon)`
  width: ${({ size = '24' }) => `${size}px`};
  height: ${({ size = '24' }) => `${size}px`};
  ${({ color }) => color && `fill: ${color}`}
` 
