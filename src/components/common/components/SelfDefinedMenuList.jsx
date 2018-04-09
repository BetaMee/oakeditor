import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

const menuLists = [
  {
    name: 'New folder',
    tag: 0,
  },
  {
    name: 'New file',
    tag: 1,
  },
  {
    name: 'Rename',
    tag: 2,
  },
  {
    name: 'Delete',
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
  align-items: center;
  list-style: none;
  font-size: 14px;
`

const List = styled.li`
  width: 100%;
  padding: 1px 0;
  color: ${({ active }) => active ? '#333' : '#aaa'};
  text-align: center;
  &:hover {
    background-color: ${({ active }) => active ? '#007acc' : '#ebebeb'};
    color: ${({ active }) => active ? '#fff' : '#aaa'};
  }
`

const SelfDefinedMenuList = ({ positionX, positionY, menuConfig, menuRef, isVisible, cancelContextMenuEvt }) =>
  <MenuWrapper
    onClick={cancelContextMenuEvt}
    isVisible={isVisible}
  >
    <ContextMenu
      ref={menuRef}
      positionX={positionX}
      positionY={positionY}
    >
      <ListContainer>
        {menuLists.map((item, index) => {
          if (menuConfig.displayTags.indexOf(item.tag) !== -1) {
            const isActive = menuConfig.activeTag === item.tag 
            return (
              <List
                key={item.tag}
                active={isActive}
                onClick={isActive ? menuConfig.activeHandler : null}
              >{item.name}</List>
            )
          } else {
            return null
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
  menuConfig: PropTypes.object.isRequired,
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  cancelContextMenuEvt: PropTypes.func
}

export default SelfDefinedMenuList
