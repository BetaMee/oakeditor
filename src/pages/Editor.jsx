import React, { Component } from 'react'
import Styled from 'styled-components'
// 引入组件
import AssetsPortal from '../components/assetsportal'
import Borad from '../components/board'
import FilePortal from '../components/fileportal'
import MenuPortal from '../components/menuportal'
import StatusBar from '../components/statusbar'
import ToolBar from '../components/toolbar'

const Wrapper = Styled.div`
  backgound-color: red;
  position: absolute;
`

class Editor extends Component {
  state = {

  }

  render() {
    return (
      <Wrapper>
        <ToolBar />
        <Borad />
        <StatusBar />
        <FilePortal />
        <MenuPortal />
      </Wrapper>
    )
  }
}

export default Editor
