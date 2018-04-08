import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

const MenuWrapper = Wrapper.extend`
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
`

const ContextMenu = styled.div`
  background-color: #fff;
  position: fixed;
  top: ${({ positionY }) => `${positionY}px`};
  left: ${({ positionX }) => `${positionX}px`};
  width: 100px;
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
`

const List = styled.li`
  padding: 0;
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
        {menuConfig.map((item, index) => (
          <List
            key={index}
            active={item.isActive}
            onClick={item.isActive ? item.handler : null}
          >{item.name}</List>
        ))}
      </ListContainer>
    </ContextMenu>
  </MenuWrapper>

SelfDefinedMenuList.defaultProps = {
  menuConfig: [],
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
