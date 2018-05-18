import React, { Component } from 'react'
import { Map } from 'immutable'

import Wrapper from '../common/components/Wrapper'
import ContentEditArea from './ContentEditArea'
import ContentPreviewArea from './ContentPreviewArea'
import SettingBar from './SettingBar'
import { Grid, Cell } from '../common/GridLayout'
import { editor, request, context } from '../../core'

const { GlobalConsumer } = context

class Board extends Component {
  currentId = '' // 当前articleId
  isContentLoked = false // 内容锁定
  state = {
    renderMode: 0, // 页面渲染模式, 0是普通模式 1是写模式 2是预览模式
    editContent: '' // 编辑器展示的内容
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
      return currentArticle.set('isLoading', false)
    } else {
      return Map({
        content: 'Loading...',
        isLoading: true
      })
    }
  }
  // 监听codemirror数据变化
  editContentChangeHanlder = (editContent) => {
    this.setState({
      editContent: editContent
    })
  }
  // 只在停止敲击的时候更新context中的状态
  editContentUpdateHandler = () => {
    const {
      editContent
    } = this.state
    const {
      contextData,
      contextAction
    } = this.props
    const {
      articleId,
      editorSrore
    } = contextData
    const {
      updateEditorSrore
    } = contextAction

    const newEditorSrore = editorSrore.map(_archive => _archive.update('articles', (_articles) => {
      return _articles.map((_article) => {
        if (_article.get('articleId') === articleId) {
          return _article.update('content', () => editContent)
        } else {
          return _article
        }
      })
    }))
    updateEditorSrore(newEditorSrore)
  }

  editOnSaveHandler = async () => {
    const {
      editContent
    } = this.state
    const {
      contextData,
      contextAction
    } = this.props
    const {
      editorSrore,
      articleId
    } = contextData
    const {
      updateEditorSrore
    } = contextAction
    const updatePrefix = 'rest/article/update'
    const updateParam = [articleId]
    // 提交
    const updatedArticle = await request.update(updatePrefix, updateParam, { content: editContent })
    if (updatedArticle.success) {
      const _newEditorSrore = editorSrore.map(_archive => _archive.update('articles', (_articles) => {
        return _articles.map((_article) => {
          if (_article.get('articleId') === articleId) {
            return _article.update('content', () => updatedArticle.data.content)
          } else {
            return _article
          }
        })
      }))
      updateEditorSrore(_newEditorSrore)
    } else {
      // toast提示
      console.log(updatedArticle.message)
    }
  }

  renderCurrentContent = () => {
    const {
      contextData
    } = this.props
    const {
      editorSrore,
      articleId
    } = contextData
    const currentArticle = this.getCurrentArticle(articleId, editorSrore)
    // 解决codemirror onchange和react自身的数据流冲突死循环的解法
    if (!currentArticle.get('isLoading') && !this.isContentLoked && this.currentId === articleId) {
      editor.updateMDEditorValue(currentArticle.get('content'))
      this.isContentLoked = true
    } else if (this.isContentLoked && this.currentId !== articleId) {
      editor.updateMDEditorValue(currentArticle.get('content'))
      this.isContentLoked = true
      this.currentId = articleId
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
      this.currentId = articleId
    } else {
      this.currentId = contextData.articleId
      this.renderCurrentContent()
    }
  }

  componentDidUpdate() {
    this.renderCurrentContent()
  }

  render() {
    const {
      toggleUp,
      toggleDown,
      isToggleUp,
      isToggleDown
    } = this.props
    const {
      renderMode,
      editContent
    } = this.state
    // 获取布局参数
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
            <ContentEditArea
              onChange={this.editContentChangeHanlder}
              onSave={this.editOnSaveHandler}
              onUpdate={this.editContentUpdateHandler}
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
              content={editContent}
            />
          </Cell>
        </Grid>
      </Wrapper>
    )
  }
}

export default GlobalConsumer(Board)
