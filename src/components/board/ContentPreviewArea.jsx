import React from 'react'
import styled from 'styled-components'

import Wrapper from '../common/components/Wrapper'
import { editor } from '../../core'

const Preview = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

const ContentPreviewArea = ({ content }) =>
  <Wrapper
   backgroundColor='#f3f3f3'
  >
    <Preview
      dangerouslySetInnerHTML={{__html: editor.renderToHTML(content)}}
    />
  </Wrapper>

export default ContentPreviewArea
