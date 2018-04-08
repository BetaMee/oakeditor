import React, { Component } from 'react'
import styled from 'styled-components'
import getDisplayName from './getDisplayName'

import SelfDefinedMenuList from '../components/SelfDefinedMenuList'

const ContextMenuEnhance = (WrappedComponent, menuConfig) => {
  class ContextMenu extends Component {
    state = {
      isShowSelfDefinedContextMenu: false,
      positionX: 0,
      positionY: 0
    }

    menuRef = React.createRef()

    changeDefaultContextMenuEvt = (e) => {
      // 停止冒泡&终止默认事件
      e.preventDefault()
      e.stopPropagation()
      // 计算出鼠标位置
      const clientX = e.clientX
      const clientY = e.clientY
      console.log(this.menuRef.current.clientWidth)
      // 更新状态
      this.setState((preState) => ({
        isShowSelfDefinedContextMenu: true,
        positionX: 0,
        positionY: 0
      }))
    }
    cancelContextMenuEvt = (e) => {
      console.log(e)
      this.setState((preState) => ({
        isShowSelfDefinedContextMenu: false,
        positionX: 0,
        positionY: 0
      }))
    }
    render() {
      const {
        isShowSelfDefinedContextMenu,
        positionX,
        positionY
      } = this.state
      return (
        <React.Fragment>
          <WrappedComponent
            onContextMenu={this.changeDefaultContextMenuEvt}
            onClick={this.cancelContextMenuEvt}
            {...this.props}
          />
          <SelfDefinedMenuList
            isVisible={isShowSelfDefinedContextMenu}
            menuRef={this.menuRef}
            positionX={positionX}
            positionY={positionY}
            menuConfig={menuConfig}
          />
        </React.Fragment>
      )
    }
  }

  ContextMenu.displayName = `ContextMenu(${getDisplayName(WrappedComponent)})`

  return ContextMenu
}

export default ContextMenuEnhance
