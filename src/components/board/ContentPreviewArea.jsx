import React from 'react'
import styled from 'styled-components'

import Wrapper from '../common/components/Wrapper'
import { editor } from '../../core'
import 'github-markdown-css'

const Preview = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  overflow-y: auto;
`

const ContentPreviewArea = ({ content }) =>
  <Wrapper
   backgroundColor='#f3f3f3'
  >
    <Preview
      className='markdown-body'
      dangerouslySetInnerHTML={{__html: editor.renderToHTML(content)}}
    />
  </Wrapper>

export default ContentPreviewArea
