import React, { Component } from 'react'
// 引入组件
import AssetsPanel from '../components/assetspanel'
import Borad from '../components/board'
import FilePanel from '../components/filepanel'
import MenuPanel from '../components/menupanel'
import StatusBar from '../components/statusbar'
import ToolBar from '../components/toolbar'
import Wrapper from '../components/common/components/Wrapper'
// Grid布局组件
import { Grid, Cell } from '../components/common/GridLayout'

class Editor extends Component {
  state = {
    isShowFilePanel: false,
    isShowMenuPanel: false,
    isShowAssetsPanel: false,
    isToggleUp: false, // 页面切换模式
    isToggleDown: false
  }

  openFilePanel = () => {
    this.setState((preState) => ({
      isShowFilePanel: true
    }))
  }

  openMenuPanel = () => {
    this.setState((preState) => ({
      isShowMenuPanel: true
    }))
  }

  openAssetsPanel = () => {
    this.setState((preState) => ({
      isShowAssetsPanel: true
    }))
  }

  hideFilePanel = () => {
    this.setState((preState) => ({
      isShowFilePanel: false
    }))
  }

  hideMenuPanel = () => {
    this.setState((preState) => ({
      isShowMenuPanel: false
    }))
  }

  hideAssetsPanel = () => {
    this.setState((preState) => ({
      isShowAssetsPanel: false
    }))
  }

  toggleUp = () => {
    this.setState(({ isToggleUp }) => ({
      isToggleUp: !isToggleUp
    }))
  }

  toggleDown = () => {
    this.setState(({ isToggleDown }) => ({
      isToggleDown: !isToggleDown
    }))
  }

  getPageToggleLayout = () => {
    const {
      isToggleUp,
      isToggleDown,
    } = this.state
    return `${isToggleUp ? '': '44px'} 1fr ${isToggleDown ? '': '22px'}`
  }
  render() {
    const gridRowParams = this.getPageToggleLayout()
    const {
      isToggleUp,
      isToggleDown,
    } = this.state
    return (
      <Wrapper
        wWidth='100vw'
        wHeight='100vh'
      >
        <Grid
          gColumns={1}
          gRows={gridRowParams}
          gap='0px'
          gHeight='100%'
          gWidth='100%'
        >
          {/* 工具栏 */}
          <Cell
            gDisplay={!isToggleUp}
          >
            <ToolBar
              openFilePanel={this.openFilePanel}
              openMenuPanel={this.openMenuPanel}
              openAssetsPanel={this.openAssetsPanel}
            />
          </Cell>
          {/* 编辑器主板 */}
          <Cell>
            <Borad
              toggleUp={this.toggleUp}
              toggleDown={this.toggleDown}
              isToggleUp={isToggleUp}
              isToggleDown={isToggleDown}
            />
          </Cell>
          {/* 底部状态栏 */}
          <Cell
            gDisplay={!isToggleDown}
          >
            <StatusBar />
          </Cell>
        </Grid>
        {/* file panel */}
        {
          this.state.isShowFilePanel &&
            <FilePanel
              hideFilePanel={this.hideFilePanel}
            />
        }
        {/* setting panel */}
        {
          this.state.isShowMenuPanel &&
            <MenuPanel
              hideMenuPanel={this.hideMenuPanel}
            />
        }
        {/* assets panel */}
        {
          this.state.isShowAssetsPanel &&
            <AssetsPanel
              hideAssetsPanel={this.hideAssetsPanel}
            />
        }
      </Wrapper>
    )
  }
}

export default Editor
