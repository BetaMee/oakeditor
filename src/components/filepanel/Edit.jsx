import React, { Component } from 'react'
import styled from 'styled-components'

import Input from '../common/components/Input'
import Wrapper from '../common/components/Wrapper'

const EditWrapper = Wrapper.extend`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999;
`

const EditInput = Input.extend`
  color: rgba(0,0,0,.75);
  background-color: #ffffff;
  padding: 0;
  height: 100%;
  width: 100%;
  margin-left: 3px;
  font-size: 14px;
`

const EditMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -99;
`

class Edit extends Component {
  state = {
    value: this.props.value
  }

  editValueChangeHandler = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  enterToSubmitHandler = (e) => {
    const {
      submitRequest,
      requestId
    } = this.props
    const {
      value
    } = this.state
    if (e.keyCode === 13) {
      submitRequest(value, requestId)
    }
  }

  escToCancel = (e) => {
    const {
      cancelEditMode
    } = this.props
    if (e.keyCode === 27) {
      cancelEditMode()
    }
  }

  maskClickHandler = (e) => {
    e.stopPropagation()
    const {
      cancelEditMode
    } = this.props
    cancelEditMode()
  }

  render() {
    const {
      value
    } = this.state
    return (
      <EditWrapper>
        <EditInput
          type='text'
          value={value}
          onChange={this.editValueChangeHandler}
          onKeyUp={this.enterToSubmitHandler}
          onKeyDown={this.escToCancel}
          onClick={(e) => {e.stopPropagation()}}   
          onContextMenu={(e) => {e.stopPropagation()}}          
        />
        <EditMask
          onClick={this.maskClickHandler}
          onContextMenu={(e) => {e.stopPropagation()}}
        />
      </EditWrapper>
    )
  }
}

export {
  Edit
}
