import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import PanelTitle from './PanelTitle'
import Explorer from './Explorer'
import { fromJS } from 'immutable'
import { request, context } from '../../core'

const { GlobalConsumer } = context

const PanelWrapper = Wrapper.extend`
  width: 20%;
  height: 100%;
  background-color: #dadada;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`

class Panel extends Component {
  stopHideFilePanelEvt = (e) => {
    // 禁止传播点击事件至父元素，避免关闭Modal
    e.preventDefault();
    e.stopPropagation();
  }

  AddNewFileHandler = () => {

  }

  AddNewFolderHandler = () => {
    console.log('something')
  }

  DeleteFileHandler = () => {

  }

  DeleteFolderHandler = () => {

  }

  RenameFileHandler = () => {

  }

  RenameFolderHandler = () => {

  }
  async componentDidMount() {
    const {
      contextData,
      contextAction
    } = this.props
    const {
      userId
    } = contextData
    const {
      updateEditorSrore
    } = contextAction
    // archive url
    const archivePrefix = 'rest/archive/attach'
    const archiveParam = [userId]
    const fetchedArchives = await request.fetch(archivePrefix, archiveParam)
    if (fetchedArchives.success) {
      const promisedResult = fetchedArchives.data.map(async (archive) => {
        // article url
        const articlePrefix = 'rest/article/archive'
        const articleParam = [archive.archiveId]
        const fetchedArticles = await request.fetch(articlePrefix, articleParam)
        if (fetchedArticles.success) {
          const articles = fetchedArticles.data.map((article) => ({
            articleId: article.articleId,
            title: article.title,
            content: article.content,
            isPublished: article.isPublished
          }))
          return {
            archiveId: archive.archiveId,
            name: archive.name,
            articles,
          }
        } else {
          return Promise.reject(new Error(fetchedArticles.message))
        }
      })
      // 使用promise获取最终结果
      Promise.all(promisedResult)
        .then((result) => {
          // 更新全局store
          updateEditorSrore(fromJS(result))
        })
        .catch((e) => {
          // 容错处理
          console.log(e)
        })
    } else {
       // toast提示
       console.log(fetchedArchives.message)
    }
  }
  render() {
    const {
      contextData,
      contextAction
    } = this.props
    const {
      editorSrore
    } = contextData
    const {
      updateArticleId
    } = contextAction
    return (
      <PanelWrapper
        layout='columnTop'
        onClick={this.stopHideFilePanelEvt}
        wOverFlow='auto'
      >
        {/* title */}
        <PanelTitle />
        {/* explorer */}
        <Explorer
          AddNewFileHandler={this.AddNewFileHandler}
          AddNewFolderHandler={this.AddNewFolderHandler}
          DeleteFileHandler={this.DeleteFileHandler}
          DeleteFolderHandler={this.DeleteFolderHandler}
          RenameFileHandler={this.RenameFileHandler}
          RenameFolderHandler={this.RenameFolderHandler}
          data={editorSrore}
          updateArticleId={updateArticleId}
        />
      </PanelWrapper>
    )
  }
}

export default GlobalConsumer(Panel)
