import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'

const TitleWrapper = Wrapper.extend`
  background-color: #424242;
  color: #b9b9b9;
  border-radius: 2px 2px 0 0;
`

const PanelTitle = () =>
  <TitleWrapper>
    <span>资源管理</span>
  </TitleWrapper>

export default PanelTitle
