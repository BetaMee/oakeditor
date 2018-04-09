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

  stopHideFilePanelEvt = (e) => {
    // 禁止传播点击事件至父元素，避免关闭Modal
    e.preventDefault();
    e.stopPropagation();
  }

  AddNewFileHandler = () => {

  }

  AddNewFolderHandler = () => {
    console.log('something')
  }

  DeleteFileHandler = () => {

  }

  DeleteFolderHandler = () => {

  }

  RenameFileHandler = () => {

  }

  RenameFolderHandler = () => {

  }

  render() {
    return (
      <PanelWrapper
        layout='columnTop'
        onClick={this.stopHideFilePanelEvt}
        wOverFlow='auto'
      >
        {/* title */}
        <PanelTitle />
        {/* explorer */}
        <Explorer
          AddNewFileHandler={this.AddNewFileHandler}
          AddNewFolderHandler={this.AddNewFolderHandler}
          DeleteFileHandler={this.DeleteFileHandler}
          DeleteFolderHandler={this.DeleteFolderHandler}
          RenameFileHandler={this.RenameFileHandler}
          RenameFolderHandler={this.RenameFolderHandler}
        />
      </PanelWrapper>
    )
  }
}

export default Panel
