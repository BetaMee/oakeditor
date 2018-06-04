import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

const menuLists = [
  {
    name: '新建文件夹',
    tag: 0,
  },
  {
    name: '新建文件',
    tag: 1,
  },
  {
    name: '重命名',
    tag: 2,
  },
  {
    name: '删除',
    tag: 3,
  }
]

const MenuWrapper = Wrapper.extend`
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
`

const ContextMenu = styled.div`
  background-color: #ebebeb;
  position: fixed;
  top: ${({ positionY }) => `${positionY}px`};
  left: ${({ positionX }) => `${positionX}px`};
  width: 130px;
  min-height: 50px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 10px rgba(0,0,0,.16), 0 3px 10px 1px rgba(0,0,0,.12);
`

const ListContainer = styled.ul`
  margin: 0;
  padding: 15px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  font-size: 14px;
`

const List = styled.li`
  box-sizing: border-box;
  width: 100%;
  padding: 1px 25px 1px 25px;
  color: ${({ active }) => active ? '#333' : '#aaa'};
  cursor:${({ active }) => active ? 'pointer' : 'auto'};  
  &:hover {
    background-color: ${({ active }) => active ? '#007acc' : '#ebebeb'};
    color: ${({ active }) => active ? '#fff' : '#aaa'};
  }
`

const SelfDefinedMenuList = ({ positionX, positionY, menuConfig, menuRef, isVisible, cancelContextMenuEvt }) =>
  <MenuWrapper
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      cancelContextMenuEvt(e)
    }}
    onContextMenu={(e) => {
      e.preventDefault()
      e.stopPropagation()
    }}
    isVisible={isVisible}
  >
    <ContextMenu
      ref={menuRef}
      positionX={positionX}
      positionY={positionY}
    >
      <ListContainer>
        {menuLists.map((item, index) => {
          const activeMenu = menuConfig.find((menu) => menu.tag === item.tag)
          if (activeMenu) {
            return (
              <List
                key={item.tag}
                active={true}
                onClick={activeMenu.handler}
              >{item.name}</List>
            )
          } else {
            return (
              <List
                key={item.tag}
                active={false}
                onClick={null}
              >{item.name}</List>
            ) 
          }
        })}
      </ListContainer>
    </ContextMenu>
  </MenuWrapper>

SelfDefinedMenuList.defaultProps = {
  menuConfig: {},
  positionX: 0,
  positionY: 0,
  isVisible: false
}

SelfDefinedMenuList.propTypes = {
  menuConfig: PropTypes.array.isRequired,
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  cancelContextMenuEvt: PropTypes.func
}

export default SelfDefinedMenuList
