import React, { Component } from 'react'
import { Map } from 'immutable'

import Wrapper from '../common/components/Wrapper'
import ContentEditArea from './ContentEditArea'
import ContentPreviewArea from './ContentPreviewArea'
import SettingBar from './SettingBar'
import { Grid, Cell } from '../common/GridLayout'
import { context } from '../../core'

const { GlobalConsumer } = context

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
      default:
        return `1fr 26px 1fr`
    }
  }

  getCurrentArticle = (id, store) => {
    const currentArticle = store.map(archive => archive.get('articles'))
      .flatten(1)
      .find((article) => article.get('articleId') === id)
    if (currentArticle) {
      return currentArticle
    } else {
      return Map({
        content: 'Loading...'
      })
    }
  }

  componentDidMount() {
    const {
      contextData,
      contextAction,
      routeParams
    } = this.props
    const {
      updateArticleId
    } = contextAction
    const {
      articleId
    } = routeParams
    // 判断全家store是否为空
    if (contextData.articleId === '') {
      updateArticleId(articleId)
    }
  }

  render() {
    const {
      toggleUp,
      toggleDown,
      isToggleUp,
      isToggleDown,
      contextData
    } = this.props
    const {
      renderMode
    } = this.state
    const {
      editorSrore,
      articleId
    } = contextData
    // 获取布局参数
    const gridColumnParams = this.getRenderModeLayout()
    const currentArticle = this.getCurrentArticle(articleId, editorSrore)
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
            <ContentEditArea
              content={currentArticle.get('content')}
            />
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
            <ContentPreviewArea
              content={currentArticle.get('content')}
            />
          </Cell>
        </Grid>
      </Wrapper>
    )
  }
}

export default GlobalConsumer(Board)
