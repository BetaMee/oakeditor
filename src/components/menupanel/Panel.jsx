import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import PanelTitle from './PanelTitle'
import Explorer from './Explorer'

const PanelWrapper = Wrapper.extend`
  width: 260px;
  height: 100%;
  background-color: #dadada;
  position: absolute;
  top: 0;
  right: 0;
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
        wOverFlow='auto'
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
