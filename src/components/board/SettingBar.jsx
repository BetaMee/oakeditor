import React from 'react'

import Wrapper from '../common/components/Wrapper'
import SVGIconWrapper from '../common/components/SVGIconWrapper'
import SVGIcon from '../common/components/SVGIcon'


const BarSVGIconWrapper = SVGIconWrapper.extend`
  margin: 3px 0;
  width: 26px;
  height: 26px;
  &:hover {
    background-color: rgba(0,0,0,.05);
    fill: rgba(0,0,0,.4);
  }
  ${({ isActive }) => isActive && `
    background-color: rgba(0,0,0,.05);
    fill: rgba(0,0,0,.4);
  `}
`

const SettingBar = (props) => {
  const {
    toggleUp,
    toggleDown,
    toggleRenderMode,
    renderMode,
    isToggleUp,
    isToggleDown
  } = props
  return (
    <Wrapper
        layout='columnCenter'
        wWidth='26px'
        backgroundColor='#f3f3f3'
      >
        {/* 设置组一 */}
        <Wrapper
          layout='columnTop'
          wHeight='50%'
        >
          <BarSVGIconWrapper
            onClick={toggleUp}
            isActive={isToggleUp}
          >
            <SVGIcon name='ToggleUp' />
          </BarSVGIconWrapper>
          <BarSVGIconWrapper
            onClick={() => toggleRenderMode(1)}
            isActive={renderMode === 1}
          >
            <SVGIcon name='WriteMode' />
          </BarSVGIconWrapper>
          <BarSVGIconWrapper
            onClick={() => toggleRenderMode(2)}
            isActive={renderMode === 2}
          >
            <SVGIcon name='RenderMode' />
          </BarSVGIconWrapper>
        </Wrapper>
        {/* 设置组二 */}
        <Wrapper
          layout='columnButtom'
          wHeight='50%'
        >
          <BarSVGIconWrapper
            onClick={toggleDown}
            isActive={isToggleDown}
          >
            <SVGIcon name='ToggleDown' />
          </BarSVGIconWrapper>
        </Wrapper>
      </Wrapper>
  )
}

export default SettingBar
