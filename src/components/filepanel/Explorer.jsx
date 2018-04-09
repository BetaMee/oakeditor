import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import ContextMenuEnhance from '../common/enhance/ContextMenuEnhance'

const ExplorerWrapper = ContextMenuEnhance(Wrapper)

class Explorer extends Component {
  state = {

  }

  getContextMenuDefine = () => {
    const {
      AddNewFolderHandler,
    } = this.props

    return {
      activeHandler: AddNewFolderHandler,
      activeTag: 0,
      displayTags: [0, 1, 2, 3]
    }
  }

  render() {

    return (
      <ExplorerWrapper
        menuConfig={this.getContextMenuDefine()}
        wHeight='90%'
      >hello</ExplorerWrapper>
    )
  }
}

export default Explorer
