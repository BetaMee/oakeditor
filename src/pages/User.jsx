import React, { Component } from 'react'
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom'

import Login from '../components/user/Login'
import Register from '../components/user/Register'
import { request, context } from '../core'
import { storage } from '../utils'

const { GlobalConsumer } = context

class User extends Component {
  loginRequest = async (username, password) => {
    const {
      history,
      contextAction
    } = this.props
    const {
      updateUserId
    } = contextAction
    const loginPrefix = 'user/login'
    const loginData = {
      username,
      password
    }
    const loginedUser = await request.login(loginPrefix, loginData)
    if (loginedUser.success) {
      const userData = loginedUser.data
      // 写入localstorage
      storage.setGroupItems({
        userId: userData.userId,
        token: userData.token,
        isPrevLogined: true
      })
      // 更新globalcontext
      updateUserId(userData.userId)
      // 跳转
      history.replace('/')
    } else {
     // toast提示
     console.log(loginedUser.message)
    }
  }

  registerRequest = async (username, password) => {
    const {
      history,
      contextAction
    } = this.props
    const {
      updateUserId
    } = contextAction
    const registerPrefix = 'user/register'
    const registerData = {
      username,
      password
    }
    const registeredUser = await request.register(registerPrefix, registerData)
    if (registeredUser.success) {
      const userData = registeredUser.data
      const { userInfo } = userData
      // 写入localstorage
      storage.setGroupItems({
        userId: userInfo.userId,
        token: userData.token,
        isPrevLogined: true
      })
      // 更新globalcontext
      updateUserId(userInfo.userId)
      // 跳转
      history.replace('/')
    } else {
     // toast提示
     console.log(registeredUser.message)
    }
  }
  componentDidMount() {
    const {
      history,
      location,
      contextAction
    } = this.props
    const {
      updateUserId
    } = contextAction
    const isLogin = storage.getItem('isPrevLogined')
    // 状态存在时则更新context
    if (isLogin) {
      updateUserId(storage.getItem('userId'))
    }
    if (isLogin &&  [ '/login', '/register'].includes(location.pathname)) {
      history.replace('/')
    }
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/user/login'
          render={() => <Login loginRequest={this.loginRequest} />}
        />
        <Route
          exact
          path='/user/register'
          render={() => <Register registerRequest={this.registerRequest} />}          
        />
        <Redirect to='/user/login' />
      </Switch>
    )
  }
}

export default GlobalConsumer(withRouter(User))
