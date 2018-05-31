import React from 'react'
import styled from 'styled-components'
import Wrapper from '../common/components/Wrapper'
import SVGIcon from '../common/components/SVGIcon'

const MenuWrapper = Wrapper.extend`
  cursor: pointer;
  padding: 10px;
  margin: 10px 0;
  &:hover {
    background-color: rgba(0,0,0,.05);
  }
`

const MenuName = styled.p`
  
`

const Menu = ({ onClick ,name, iconName }) =>
  <MenuWrapper
    wHeight='60px'
    onClick={onClick}
    layout='rowLeft'
  >
    <Wrapper
      wWidth='10%'
    >
      <SVGIcon name={iconName}/>
    </Wrapper>
    <Wrapper
       wWidth='90%'
    >
      <MenuName>{name}</MenuName>
    </Wrapper>
  </MenuWrapper>

export default Menu
