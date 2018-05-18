import React, { Component } from 'react'
import GlobalContext from './GlobalContext'
import { List } from 'immutable'

class GlobalProvider extends Component {
  state = { // 全局state
    articleId: '',
    userId: '',
    editorSrore: List()
  }
  // 操作
  updateArticleId = (newArticleId) => {
    this.setState({
      articleId: newArticleId
    })
  }
  updateUserId = (newUserId) => {
    this.setState({
      userId: newUserId
    })
  }
  updateEditorSrore = (newStore) => {
    this.setState({
      editorSrore: newStore
    })
  }
  render() {
    const {
      articleId,
      userId,
      editorSrore
    } = this.state
    const providerValue = {
      data: {
        articleId,
        userId,
        editorSrore
      },
      action: {
        updateArticleId: this.updateArticleId,
        updateUserId: this.updateUserId,
        updateEditorSrore: this.updateEditorSrore
      }
    }
    return (
      <GlobalContext.Provider
        value={providerValue}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}


export default GlobalProvider
