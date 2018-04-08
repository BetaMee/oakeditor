import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Wrapper from './Wrapper'

const MenuWrapper = Wrapper.extend`
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
  position: fixed;
  top: ${({ positionY }) => `${positionY}px`};
  left: ${({ positionX }) => `${positionX}px`};
  width: 100px;
  height: 100px;
`

const ListContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const List = styled.li`

`

const SelfDefinedMenuList = ({ positionX, positionY, menuConfig, menuRef, isVisible }) =>
  <MenuWrapper
    isVisible={isVisible}
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
  </MenuWrapper>

SelfDefinedMenuList.defaultProps = {
  menuConfig: [],
  positionX: 0,
  positionY: 0
}

SelfDefinedMenuList.propTypes = {
  menuConfig: PropTypes.array.isRequired,
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired
}

export default SelfDefinedMenuList
