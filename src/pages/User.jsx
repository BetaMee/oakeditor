import React, { Component } from 'react'
import {
  Route,
  withRouter
} from 'react-router-dom'

import Login from '../components/user/Login'
import Register from '../components/user/Register'
import { request, context } from '../core'
import { storage } from '../utils'

const { GlobalConsumer } = context

class User extends Component {
  loginRequest = async (username, password) => {
    const {
      history
    } = this.props
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
        isLogin: true
      })
      // 跳转
      history.replace('/')
    } else {
     // toast提示
     console.log(loginedUser.message)
    }
  }

  registerRequest = () => {

  }
  componentDidMount() {
    const {
      history,
      location
    } = this.props
    const isLogin = storage.getItem('isLogin')
    if (isLogin &&  [ '/login', '/register'].includes(location.pathname)) {
      history.replace('/')
    }
  }
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path='/login'
          render={() => <Login loginRequest={this.loginRequest} />}
        />
        <Route
          exact
          path='/register'
          render={() => <Register registerRequest={this.registerRequest} />}          
        />
      </React.Fragment>
    )
  }
}

export default GlobalConsumer(withRouter(User))
