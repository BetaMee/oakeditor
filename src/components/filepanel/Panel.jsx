import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import PanelTitle from './PanelTitle'
import Explorer from './Explorer'
import { fromJS, Map } from 'immutable'
import { request, context } from '../../core'

const { GlobalConsumer } = context

const PanelWrapper = Wrapper.extend`
  width: 260px;
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
  // 请求函数
  RenameFolderRequest = async (newFolderName, archiveId) => {
    const {
      contextData,
      contextAction
    } = this.props
    const {
      userId,
      editorSrore
    } = contextData
    const {
      updateEditorSrore
    } = contextAction
    const archivePrefix = 'rest/archive/update'
    const archiveParam = [archiveId]
    const toUpdateData = {
      name: newFolderName,
      attachId: userId
    }
    const updatedArchive = await request.update(archivePrefix, archiveParam, toUpdateData)
    if (updatedArchive.success) {
      const newEditorSrore = editorSrore.map(_archive => {
        if (_archive.get('archiveId') === archiveId) {
          return _archive.update('name', () => updatedArchive.data.name)
        } else {
          return _archive
        }
      })
      updateEditorSrore(newEditorSrore)
    } else {
      // toast提示
      console.log(updatedArchive.message)
    }
  }

  RenameFileRequest = async (newFileName, articleId) => {
    const {
      contextData,
      contextAction
    } = this.props
    const {
      editorSrore
    } = contextData
    const {
      updateEditorSrore
    } = contextAction
    const updatePrefix = 'rest/article/update'
    const updateParam = [articleId]
    // 提交
    const updatedArticle = await request.update(updatePrefix, updateParam, { title: newFileName })
    if (updatedArticle.success) {
      const _newEditorSrore = editorSrore.map(_archive => _archive.update('articles', (_articles) => {
        return _articles.map((_article) => {
          if (_article.get('articleId') === articleId) {
            return _article.update('title', () => updatedArticle.data.title)
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
            isPublished: article.isPublished,
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
      try {
        const result = await Promise.all(promisedResult)
        updateEditorSrore(fromJS(result))
      } catch(e) {
        console.log(e)
      }
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
      editorSrore,
      articleId
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
          RenameFileRequest={this.RenameFileRequest}
          RenameFolderRequest={this.RenameFolderRequest}
          data={editorSrore}
          articleId={articleId}
          updateArticleId={updateArticleId}
        />
      </PanelWrapper>
    )
  }
}

export default GlobalConsumer(Panel)
