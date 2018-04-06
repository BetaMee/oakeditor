import React, { Component } from 'react'
import styled from 'styled-components'
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
    isShowAssetsPanel: false
  }

  render() {
    return (
      <Wrapper
        wWidth='100vw'
        wHeight='100vh'
      >
        <Grid
          gColumns={1}
          gRows={'44px 1fr 20px'}
          gap='0px'
          gHeight='100%'
          gWidth='100%'
        >
          {/* 工具栏 */}
          <Cell>
            <ToolBar />
          </Cell>
          {/* 编辑器主板 */}
          <Cell>
            <Borad />
          </Cell>
          {/* 底部状态栏 */}
          <Cell>
            <StatusBar />
          </Cell>
        </Grid>
      </Wrapper>
    )
  }
}

export default Editor

{/*
<AssetsPortal />  
<FilePortal />
<MenuPortal /> */}
