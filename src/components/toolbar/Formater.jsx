import React, { Component } from 'react'

// 引入组件
import Wrapper from '../common/components/Wrapper'
import SVGIconWrapper from '../common/components/SVGIconWrapper'
import SVGIcon from '../common/components/SVGIcon'
import { editor } from '../../core'

class Formater extends Component {
  undoHandler = () => {
    editor.execCommand('undo')
  }
  redoHandler = () => {
    editor.execCommand('redo')
  }
  boldHandler = () => {
    editor.boldingText()
  }
  italicHandler = () => {
    editor.italicText()
  }
  strikethroughHandler = () => {
    editor.strikethroughText()
  }
  headingHandler = () => {
    editor.getHeading()
  }
  listBulletedHandler = () => {
    editor.getUnorderedList()
  }
  listNumberedHandler = () => {
    editor.getOrderedList()
  }
  tableHandler = () => {
    editor.getTable()
  }
  insertQuoteHandler = () => {
    editor.insertQuoteText()
  }
  insertCodeHandler = () => {
    editor.insertCodeText()
  }
  insertLinkHandler = () => {
    editor.insertLinkText()
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
          title='Undo'
          onClick={this.undoHandler}
        >
          <SVGIcon name='Undo' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Redo'
          onClick={this.redoHandler}
        >
          <SVGIcon name='Redo' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Bold'
          onClick={this.boldHandler}
        >
          <SVGIcon name='Bold' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Italic'
          onClick={this.italicHandler}
        >
          <SVGIcon name='Italic' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Strikethrough'
          onClick={this.strikethroughHandler}          
        >
          <SVGIcon name='Strikethrough' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Heading'
          onClick={this.headingHandler}
        >
          <SVGIcon name='TextFields' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Unordered list'
          onClick={this.listBulletedHandler}
        >
          <SVGIcon name='ListBulleted' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Ordered list'
          onClick={this.listNumberedHandler}
        >
          <SVGIcon name='ListNumbered' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Table'
          onClick={this.tableHandler}
        >
          <SVGIcon name='Table' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Blockquote'
          onClick={this.insertQuoteHandler}
        >
          <SVGIcon name='Quote' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Code'
          onClick={this.insertCodeHandler}
        >
          <SVGIcon name='Code' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Link'
          onClick={this.insertLinkHandler}
        >
          <SVGIcon name='Link' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Horizontal rule'
        >
          <SVGIcon name='HorizontalRule' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Assets'
          onClick={openAssetsPanel}
        >
          <SVGIcon name='CloudAssets' />
        </SVGIconWrapper>
      </Wrapper>
    )
  }
}

export default Formater
