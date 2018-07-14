import React, { Component } from 'react'  
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
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


class AuthorizedRoute extends React.Component {
  state = {
    pending: true,
    logged: false
  };
  componentDidMount() {
    // 做些鉴权登录检查
    // 1. 是否已登录
    // 2. token是否失效
    setTimeout(() => {
      this.setState({
        pending: false,
        logged: true
      });
    }, 800);
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const { pending, logged } = this.state;

    return (
      <Route
        {...rest}
        render={props => {
          if (pending) return <div>Loading...</div>;
          return logged ? (
            <Component {...props} />
          ) : (
            <Redirect to='/user/login' />
          );
        }}
      />
    );
  }
}

class App extends Component {
  checkIfUserLogin = () => {
    return storage.getItem('isPrevLogined') || false
  }

  render() {
    return (
        <GlobalProvider>
          <Router>
            {/*// <div>
            //   <User />
            //   <Route
            //     exact
            //     path='/404'
            //     component={NoMatch}
            //   />
            //   <Route
            //     path='/'
            //     render={({ location, history }) => {
            //       // 跳过登录注册页面
            //       if (ignoreRoutePath.includes(location.pathname)) {
            //         return null
            //       } else {
            //         // 判断是否登录
            //         if (this.checkIfUserLogin()) {
            //           return <Editor history={history}/>
            //         } else {
            //           return <Redirect to='/login'/>
            //         }
            //       }
            //     }}
            //   />
            // </div>*/}
            <Switch>
              {/* 用户登录组件 */}
              <Route path='/user' component={User}/>
              {/* 使用鉴权组件包裹的主体 */}
              <AuthorizedRoute path='/app' component={Editor} />
              {/* 默认情况下进入app路径下 */}
              <Redirect to='/app'/>
            </Switch>
          </Router>
        </GlobalProvider>
    )
  }
}

export default App
