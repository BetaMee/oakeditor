import React, { Component } from 'react'
import styled from 'styled-components'

import Wrapper from '../common/components/Wrapper'
import ContentEditArea from './ContentEditArea'
import ContentPreviewArea from './ContentPreviewArea'
import SettingBar from './SettingBar'
import { Grid, Cell } from '../common/GridLayout'

class Board extends Component {
  state = {
    renderMode: 0 // 页面渲染模式, 0是普通模式 1是写模式 2是预览模式
  }
  toggleRenderMode = (mode) => {
    this.setState(({ renderMode }) => {
      if (renderMode === mode) {
        return {
          renderMode: 0
        }
      } else {
        return {
          renderMode: mode
        }
      }
    })
  }
  getRenderModeLayout = () => {
    const {
      renderMode
    } = this.state
    switch(renderMode) {
      case 0: // 普通模式
        return `1fr 26px 1fr`
      case 1: // 写模式
        return `1fr 26px`
      case 2: // 预览模式
        return `26px 1fr`
    }
  }

  render() {
    const {
      toggleUp,
      toggleDown,
      isToggleUp,
      isToggleDown,
    } = this.props
    const {
      renderMode
    } = this.state
    const gridColumnParams = this.getRenderModeLayout()
    return (
      <Wrapper>
        <Grid
          gColumns={gridColumnParams}
          gRows={1}
          gap='0px'
          gHeight='100%'
          gWidth='100%'
        >
          {/* 编辑内容区域 */}
          <Cell
            gDisplay={renderMode !== 2}
          >
            <ContentEditArea />
          </Cell>
          {/* 设置栏 */}
          <Cell>
            <SettingBar
              toggleUp={toggleUp}
              toggleDown={toggleDown}
              toggleRenderMode={this.toggleRenderMode}
              renderMode={renderMode}
              isToggleUp={isToggleUp}
              isToggleDown={isToggleDown}
            />
          </Cell>
          {/* 预览区域 */}
          <Cell
            gDisplay={renderMode !== 1}
          >
            <ContentPreviewArea />
          </Cell>
        </Grid>
      </Wrapper>
    )
  }
}

export default Board
