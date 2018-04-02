import React, { Component } from 'react'
import styled from 'styled-components'
// 引入组件
import AssetsPortal from '../components/assetsportal'
import Borad from '../components/board'
import FilePortal from '../components/fileportal'
import MenuPortal from '../components/menuportal'
import StatusBar from '../components/statusbar'
import ToolBar from '../components/toolbar'
// Grid布局组件
import { Grid, Cell } from '../components/common/GridLayout'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

class Editor extends Component {
  state = {

  }

  render() {
    return (
      <Wrapper>
        <Grid columns={1}>
          <Cell>
            <ToolBar />
          </Cell>
          <Cell>          
            <Borad />
          </Cell>          
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
