import React, { Component } from 'react'  
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import Editor from './pages/Editor'
import User from './pages/User'
import NoMatch from './pages/NoMatch'
import { context } from './core'
import { storage } from './utils'
import './App.css'

const {
  GlobalProvider
} = context

const ignoreRoutePath = [
  '/login',
  '/register',
  '/404'
]

class App extends Component {
  checkIfUserLogin = () => {
    return storage.getItem('isLogin') || false
  }

  render() {
    return (
      <GlobalProvider>
        <Router>
          <div>
            <User />
            <Route
              exact
              path='/404'
              component={NoMatch}
            />
            <Route
              path='/'
              render={({ location, history }) => {
                // 跳过登录注册页面
                if (ignoreRoutePath.includes(location.pathname)) {
                  return null
                } else {
                  // 判断是否登录
                  if (this.checkIfUserLogin()) {
                    return <Editor history={history}/>
                  } else {
                    return <Redirect to='/login'/>
                  }
                }
              }}
            />
          </div>
        </Router>
      </GlobalProvider>
    )
  }
}

export default App
