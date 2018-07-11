import React, { Component } from 'react'

import { storage } from '../../../utils'


class AuthEnhanceProvider extends Component {
  state = {
    isLogin: false
  }

  async componentDidMount() {
    // 判断之前是否有登录
    const isPrevLogined = storage.getItem('isPrevLogined')

    // 判断Token是否失效
    const checkPrefix = 'user/check'
    try {
      const status = await request.fetch(checkPrefix)
      if (!status.data.success) {
        throw new Error('status check fail')
      }
    } catch(e) {
      storage.clear()
      history.replace('/login')
    }
  }

  render() {
    const {
      isLogin
    } = this.state
    if (!isLogin) {
      return null
    } else {
      return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
    }
  }
}

export default AuthEnhanceProvider
