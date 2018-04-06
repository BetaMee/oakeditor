import React, { Component } from 'react'

// 引入组件
import Wrapper from '../common/components/Wrapper'
import Icon from '../common/components/Icon'
import IconWrapper from '../common/components/IconWrapper'

class Formater extends Component {
  state = {

  }

  handleClick = (e) => {
    console.log(e)
  }

  render() {
    return(
      <Wrapper
        center={true}
      >
        <IconWrapper
          isAllowed={false}
          // onClick
        ><Icon>undo</Icon></IconWrapper>
        <IconWrapper
        
        ><Icon>redo</Icon></IconWrapper>
        <IconWrapper
        
        ><Icon>format_bold</Icon></IconWrapper>
        <IconWrapper
        
        ><Icon>format_italic</Icon></IconWrapper>
        <IconWrapper
        
        ><Icon>strikethrough_s</Icon></IconWrapper>
        <IconWrapper
        
        ><Icon>text_fields</Icon></IconWrapper>
        <IconWrapper
        
        ><Icon>format_list_bulleted</Icon></IconWrapper>
        <IconWrapper
        
        ><Icon>format_list_numbered</Icon></IconWrapper>
        <IconWrapper
        
        ><Icon>format_quote</Icon></IconWrapper>
        <IconWrapper
        
        ><Icon>code</Icon></IconWrapper>
        <IconWrapper
        
        ><Icon>link</Icon></IconWrapper>
        <IconWrapper
        
        ><Icon>image</Icon></IconWrapper>
      </Wrapper>
    )
  }
}

export default Formater
