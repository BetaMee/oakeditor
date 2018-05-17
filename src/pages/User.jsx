import React, { Component } from 'react'
import {
  Route
} from 'react-router-dom'

import Wrapper from '../components/common/components/Wrapper'
import Login from '../components/user/Login'
import Register from '../components/user/Register'

class User extends Component {
  state = {

  }


  render() {
    return (
      <Wrapper
        wWidth='100vw'
        wHeight='100vh'
        backgroundColor='#f9f9f9'
      >
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Wrapper>
    )
  }
}

export default User
