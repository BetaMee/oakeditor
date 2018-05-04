import React, { Component } from 'react'
import GlobalContext from './GlobalContext'

class GlobalProvider extends Component {
  state = { // 全局state
    articleId: '',
    userId: ''
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
  render() {
    const {
      articleId,
      userId
    } = this.state
    const providerValue = {
      data: {
        articleId,
        userId
      },
      action: {
        updateArticleId: this.updateArticleId,
        updateUserId: this.updateUserId
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
