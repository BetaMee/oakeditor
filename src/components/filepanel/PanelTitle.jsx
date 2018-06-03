import React from 'react'

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
    <span>文件管理</span>
  </Wrapper>

export default PanelTitle
