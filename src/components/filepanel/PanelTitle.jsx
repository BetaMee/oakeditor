import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import SVGIconWrapper from '../common/components/SVGIconWrapper'
import SVGIcon from '../common/components/SVGIcon'

const PanelTitle = () =>
  <Wrapper
    backgroundColor='rgba(0,0,0,.1)'
    wHeight='44px'
  >
    <SVGIconWrapper
      title='New file'
    >
      <SVGIcon name='NewFile' />
    </SVGIconWrapper>
    <SVGIconWrapper
      title='New folder'
    >
      <SVGIcon name='NewFolder' />
    </SVGIconWrapper>
    <SVGIconWrapper
      title='Delete'
    >
      <SVGIcon name='Delete' />
    </SVGIconWrapper>
    <SVGIconWrapper
      title='Rename'
    >
      <SVGIcon name='Rename' />
    </SVGIconWrapper>
  </Wrapper>

export default PanelTitle
