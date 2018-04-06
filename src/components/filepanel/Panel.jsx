import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import PanelTitle from './PanelTitle'
import Explorer from './Explorer'

const PanelWrapper = Wrapper.extend`
  width: 20%;
  height: 100%;
  background-color: #dadada;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`

class Panel extends Component {
  state = {

  }

  handlePanelClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    return (
      <PanelWrapper
        layout='columnTop'
        onClick={this.handlePanelClick}
      >
        {/* title */}
        <PanelTitle />
        {/* explorer */}
        <Explorer />
      </PanelWrapper>
    )
  }
}

export default Panel
