import React, { Component } from 'react'
import { withRouter } from 'react-router'

import Wrapper from '../common/components/Wrapper'
import Menu from './Menu'
import { storage } from '../../utils'

class Explorer extends Component {
  logoutHandler = () => {
    const {
      history
    } = this.props
    // 清空localstorage
    storage.clear()
    // 跳转
    history.replace('/login')
  }

  render() {
    return (
      <Wrapper
        wHeight='90%'
        layout='columnTop'
      >
        <Menu
          name='登出'
          iconName='Logout'
          onClick={this.logoutHandler}
        />
      </Wrapper>
    )
  }
}

export default withRouter(Explorer)
