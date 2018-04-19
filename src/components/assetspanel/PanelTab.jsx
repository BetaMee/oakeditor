import React from 'react'
import styled from 'styled-components'
// 布局组件
import Wrapper from '../common/components/Wrapper'
// svg组件
import SVGIcon from '../common/components/SVGIcon'

const TabWrapper = Wrapper.extend`
  background-color: #dadada;
  border-radius: 0 0 0 4px;
`

const Tab = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  fill: ${({ checked }) => checked ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)'};
  ${({ checked }) => checked && `background-color: #F5F5F5`}
  &:hover {
    background-color: #F5F5F5;
    fill: rgba(0, 0, 0, 0.7);
  }
`

const PanelTab = ({  handleTabSwitch, currentTabId }) =>
  <TabWrapper
    layout='columnTop'
  >
    <Tab
      checked={currentTabId === 0}
      onClick={(e) => handleTabSwitch(e, 0)}
    >
      <SVGIcon name='Image' />
    </Tab>
    <Tab
      checked={currentTabId === 1}
      onClick={(e) => handleTabSwitch(e, 1)}
    >
      <SVGIcon name='Attachment' />
    </Tab>
    <Tab
      checked={currentTabId === 2}
      onClick={(e) => handleTabSwitch(e, 2)}
    >
      <SVGIcon name='Music' />
    </Tab>
    <Tab
      checked={currentTabId === 3}
      onClick={(e) => handleTabSwitch(e, 3)}
    >
      <SVGIcon name='Video' />
    </Tab>
  </TabWrapper>

export default PanelTab
