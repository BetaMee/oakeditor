import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import PanelTitle from './PanelTitle'
import Explorer from './Explorer'
import { fromJS } from 'immutable'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_ARCHIVES = gql`
query archives($attachId: String!){
  attachedArchives(attachId: $attachId) {
    archiveId
    name
    articles {
      articleId
      title
    }
  }
}
`

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
    const attachId = 'd5da709f-dc12-413f-a7d6-073357799fb5'
    return (
      <PanelWrapper
        layout='columnTop'
        onClick={this.stopHideFilePanelEvt}
        wOverFlow='auto'
      >
        {/* title */}
        <PanelTitle />
        {/* explorer */}
        <Query
          query={GET_ARCHIVES}
          variables={{ attachId }}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return null
            }
            if (error) {
              return null
            }
            const { attachedArchives } = data
            return (
              <Explorer
                AddNewFileHandler={this.AddNewFileHandler}
                AddNewFolderHandler={this.AddNewFolderHandler}
                DeleteFileHandler={this.DeleteFileHandler}
                DeleteFolderHandler={this.DeleteFolderHandler}
                RenameFileHandler={this.RenameFileHandler}
                RenameFolderHandler={this.RenameFolderHandler}
                data={fromJS(attachedArchives)}
              />
            )
          }}
        </Query>
      </PanelWrapper>
    )
  }
}

export default Panel
