import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import getDisplayName from './getDisplayName'

import SelfDefinedMenuList from '../components/SelfDefinedMenuList'

const ContextMenuEnhance = (WrappedComponent) => {
  class ContextMenu extends Component {
    state = {
      isShowSelfDefinedContextMenu: false,
      positionX: 0,
      positionY: 0
    }

    menuRef = React.createRef()

    changeDefaultContextMenuEvt = (e, evtCallback) => {
      console.log(evtCallback)
      // 停止冒泡&终止默认事件
      e.preventDefault()
      e.stopPropagation()
      // 获取鼠标位置
      const mouseX = e.clientX
      const mouseY = e.clientY
      // 获取菜单的宽高
      const $currentMenu = ReactDOM.findDOMNode(this.menuRef.current)
      const menuWidth = $currentMenu.clientWidth
      const menuHeight = $currentMenu.clientHeight
      // 浏览器视区宽高
      const browserClientHeight = document.documentElement.clientHeight
      const browserClientWidth = document.documentElement.clientWidth
      // 最终位置
      let positionX
      let positionY
      if ((mouseX + menuWidth) < browserClientWidth) {
        positionX = mouseX
      } else {
        positionX = mouseX - menuWidth
      }
      
      if ((mouseY + menuHeight) < browserClientHeight) {
        positionY = mouseY
      } else {
        positionY = mouseY - menuHeight
      } 
      // 更新状态
      this.setState((preState) => ({
        isShowSelfDefinedContextMenu: true,
        positionX: positionX,
        positionY: positionY
      }))
      // 回调函数
      evtCallback && evtCallback()
    }
    cancelContextMenuEvt = (e) => {
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
      const {
        onContextMenuEvtCb, // 菜单事件后的回调函数
        menuConfig,
        ...rest
      } = this.props
      return (
        <React.Fragment>
          <WrappedComponent
            onContextMenu={e => this.changeDefaultContextMenuEvt(e, onContextMenuEvtCb)}
            {...rest}
          />
          <SelfDefinedMenuList
            cancelContextMenuEvt={this.cancelContextMenuEvt}
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
