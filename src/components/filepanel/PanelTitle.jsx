import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import SVGIconWrapper from '../common/components/SVGIconWrapper'
import SVGIcon from '../common/components/SVGIcon'

const TitleSVGIconWrapper = SVGIconWrapper.extend`
  &:hover {
    background-color: rgba(0,0,0,.1);
    opacity: 1;
    fill: #333;
  }
  fill: #333;
  opacity: .75;
`

const PanelTitle = () =>
  <Wrapper
    backgroundColor='rgba(0,0,0,.1)'
    wHeight='44px'
  >
    <TitleSVGIconWrapper
      title='New file'
    >
      <SVGIcon name='NewFile' size={24} />
    </TitleSVGIconWrapper>
    <TitleSVGIconWrapper
      title='New folder'
    >
      <SVGIcon name='NewFolder' size={24} />
    </TitleSVGIconWrapper>
    <TitleSVGIconWrapper
      title='Delete'
    >
      <SVGIcon name='Delete' size={24} />
    </TitleSVGIconWrapper>
    <TitleSVGIconWrapper
      title='Rename'
    >
      <SVGIcon name='Rename' size={24} />
    </TitleSVGIconWrapper>
  </Wrapper>

export default PanelTitle
