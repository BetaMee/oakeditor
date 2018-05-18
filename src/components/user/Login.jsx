import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import UserInput from './UserInput'
import UserSubmit from './UserSubmit'
import Label from './Label'

const LoginWrapper = Wrapper.extend`
  width: 308px;
  height: 300px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 1px 4px 0px rgba(0,0,0,0.2);
  border-radius: 4px;
  padding: 20px;
`

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  usernameChangeHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  passwordChangeHandler = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  loginHandler = () => {
    const {
      username,
      password
    } = this.state
    const {
      loginRequest
    } = this.props
    // 提交
    loginRequest(username, password)
  }
  render() {
    const {
      username,
      password
    } = this.state
    return (
      <Wrapper
        wWidth='100vw'
        wHeight='100vh'
        backgroundColor='#f9f9f9'
      >
        <LoginWrapper
          layout='columnTopRight'
        >
          <Label>用户名</Label>
          <UserInput
            type='text'
            value={username}
            onChange={this.usernameChangeHandler}
          />
          <Label>密码</Label>
          <UserInput
            type='password'
            value={password}
            onChange={this.passwordChangeHandler}
          />
          <UserSubmit
            onClick={this.loginHandler}
          >登录</UserSubmit>
        </LoginWrapper>
      </Wrapper>
    )
  }
}

export default Login
