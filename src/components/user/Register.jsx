import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Wrapper from '../common/components/Wrapper'
import UserInput from './UserInput'
import UserSubmit from './UserSubmit'
import Label from './Label'

const RegisterWrapper = Wrapper.extend`
  width: 308px;
  height: 300px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 1px 4px 0px rgba(0,0,0,0.2);
  border-radius: 4px;
  padding: 20px;
`

const LinkWrapper = Wrapper.extend`
  height: 34px;
  margin-top: 10px;
`
class Register extends Component {
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
  registerHandler = () => {
    const {
      username,
      password
    } = this.state
    const {
      registerRequest
    } = this.props
    // 提交
    registerRequest(username, password)
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
        <RegisterWrapper
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
            type='text'
            value={password}
            onChange={this.passwordChangeHandler}
          />
            <UserSubmit
            onClick={this.registerHandler}
          >注册</UserSubmit>
          <LinkWrapper>
            <Link to='/login'>登录</Link>
          </LinkWrapper>
        </RegisterWrapper>
      </Wrapper>
    )
  }
}

export default Register
