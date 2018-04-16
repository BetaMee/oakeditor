import React, { Component } from 'react'

// 引入组件
import Wrapper from '../common/components/Wrapper'
import SVGIconWrapper from '../common/components/SVGIconWrapper'
import SVGIcon from '../common/components/SVGIcon'

class Formater extends Component {
  state = {

  }

  render() {
    const {
      openAssetsPanel
    } = this.props
    return(
      <Wrapper
        layout='rowLeft'
        wPadding='0 0 0 20px'
      >
        <SVGIconWrapper
          isAllowed={false}
          title='Undo'
        >
          <SVGIcon name='Undo' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Redo'
        >
          <SVGIcon name='Redo' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Bold'
        >
          <SVGIcon name='Bold' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Italic'
        >
          <SVGIcon name='Italic' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Strikethrough'
        >
          <SVGIcon name='Strikethrough' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Heading'
        >
          <SVGIcon name='TextFields' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Unordered list'
        >
          <SVGIcon name='ListBulleted' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Ordered list'
        >
          <SVGIcon name='ListNumbered' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Table'
        >
          <SVGIcon name='Table' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Blockquote'
        >
          <SVGIcon name='Quote' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Code'
        >
          <SVGIcon name='Code' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Link'
        >
          <SVGIcon name='Link' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Horizontal rule'
        >
          <SVGIcon name='HorizontalRule' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Image'
          onClick={openAssetsPanel}
        >
          <SVGIcon name='Image' />
        </SVGIconWrapper>
      </Wrapper>
    )
  }
}

export default Formater
