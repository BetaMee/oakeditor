import React, { Component } from 'react'
// 布局组件
import Wrapper from '../common/components/Wrapper'
import { Grid, Cell } from '../common/GridLayout'
// styled animation
import {
  slideInRight
} from '../common/animations'
// 其他组件
import PanelTitle from './PanelTitle'
import PanelTab from './PanelTab'
import Explorer from './Explorer'

const PanelWrapper = Wrapper.extend`
  width: 450px;
  height: 90%;
  background-color: #FAFAFA;
  animation: ${slideInRight} 0.3s linear;
  position: absolute;
  top: 5%;
  bottom: 5%;
  right: 5%;
  z-index: 9999;
  border-radius: 4px;
`
class Panel extends Component {
  state = {
    currentTabId: 0,
  }

  handleTabSwitch = (e, tabId) => {
    this.setState({
      currentTabId: tabId
    })
  }

  stopHideAssetsPanelEvt = (e) => {
    // 禁止传播点击事件至父元素，避免关闭Modal
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const {
      currentTabId
    } = this.state
    return (
    <PanelWrapper
      layout='columnTop'
      onClick={this.stopHideAssetsPanelEvt}
    >
      <Grid
        gColumns={'55px 1fr'}
        gRows={'44px 1fr'}
        gap='0px'
        gHeight='100%'
        gWidth='100%'
      >
        {/* Panel title */}
        <Cell
          spanWidth={2}
        >
          <PanelTitle />
        </Cell>
        {/* Panel side */}
        <Cell>
          <PanelTab
            currentTabId={currentTabId}
            handleTabSwitch={this.handleTabSwitch}
          />
        </Cell>
        {/* Explorer */}
        <Cell>
          <Explorer
            currentTabId={currentTabId}
          />
        </Cell>
      </Grid>
    </PanelWrapper>
    )
  }
}

export default Panel
