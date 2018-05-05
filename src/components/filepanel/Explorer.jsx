import React, { Component } from 'react'
import { fromJS, Map, List } from 'immutable'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Wrapper from '../common/components/Wrapper'
import ContextMenuEnhance from '../common/enhance/ContextMenuEnhance'
import {
  FolderWrapper,
  Folder
} from './Folder'

import {
  FileWrapper,
  File
} from './File'

const ExplorerWrapper = ContextMenuEnhance(Wrapper)

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0,0,0,.75);
`

class Explorer extends Component {
  // 转换数据
  static convertDataToExplorerList = (data, explorerData) => data.map((item, index) => {
    return fromJS({
      folderName: item.get('name'),
      folderIndex: item.get('archiveId'),
      isExpand: explorerData.size !== 0 ? explorerData.get(index).get('isExpand') : false,
      fileLists: item.get('articles').map(article => Map({
        fileName: article.get('title'),
        fileIndex: article.get('articleId'),
        fileLink: article.get('articleId'),
        isSelected: explorerData.size !== 0 ? explorerData.get(index).get('isSelected') : false
      }))
    })
  })
  static getDerivedStateFromProps (nextProps, prevState) {
    return {
      explorerLists: Explorer.convertDataToExplorerList(nextProps.data, prevState.explorerLists)
    }
  }
  state = {
    explorerLists: Explorer.convertDataToExplorerList(this.props.data, List()),
  }

  getExplorerContextMenuDefine = () => {
    const {
      AddNewFolderHandler,
    } = this.props

    return {
      activeHandler: AddNewFolderHandler,
      activeTag: 0,
      displayTags: [0, 1, 2, 3]
    }
  }

  getFolderContextMenuDefine = () => {
    const {
      AddNewFolderHandler,
    } = this.props

    return {
      activeHandler: AddNewFolderHandler,
      activeTag: 1,
      displayTags: [0, 1, 2, 3]
    }
  }

  getFileContextMenuDefine = () => {
    const {
      AddNewFolderHandler,
    } = this.props

    return {
      activeHandler: AddNewFolderHandler,
      activeTag: 2,
      displayTags: [0, 1, 2, 3]
    }
  }

  folderClickHandler = (folderKey) => {
    const {
      explorerLists
    } = this.state
    const newExplorerLists = explorerLists.map(explorer => {
      // 设置isExpand
      if (explorer.get('folderIndex') === folderKey) {
        return explorer
          .update('isExpand', val => !val)
      } else {
        return explorer
      }
    })
    this.setState({
      explorerLists: newExplorerLists
    })
  }

  fileClickHandler = (folderKey, fileKey) => {
    const {
      updateArticleId
    } = this.props
    const {
      explorerLists
    } = this.state
    // 更新全局contex
    updateArticleId(fileKey)
    // 生成新的explorerlist
    const newExplorerLists = explorerLists
      .map(explorer => {
        if (explorer.get('folderIndex') === folderKey) {
          return explorer
            .update('fileLists', fileLists => fileLists.map(file => {
              if (file.get('fileIndex') === fileKey) {
                return file.update('isSelected', val => true)
              } else {
                return file.update('isSelected', val => false)
              }     
            }))
        } else {
          return explorer
            .update('fileLists', fileLists => fileLists.map(file => file.update('isSelected', val => false)))
        }
      })
    this.setState({
      explorerLists: newExplorerLists
    })
  }

  render() {
    const {
      explorerLists
    } = this.state
    return (
      <ExplorerWrapper
        menuConfig={this.getExplorerContextMenuDefine()}
        layout='columnTopLeft'
        wHeight='90%'
      >
        {
          explorerLists.map(folder => (
            <FolderWrapper
              key={folder.get('folderIndex')}
            >
              <Folder
                menuConfig={this.getFolderContextMenuDefine()}
                name={folder.get('folderName')}
                isExpand={folder.get('isExpand')}
                folderKey={folder.get('folderIndex')}
                folderClickHandler={this.folderClickHandler}
              />
              <FileWrapper
                isExpand={folder.get('isExpand')}
              >
                {
                  folder.get('fileLists').map(file => (
                    <StyledLink
                      key={file.get('fileIndex')}
                      to={`/${folder.get('folderName')}/${file.get('fileIndex')}`}
                    >
                      <File
                        menuConfig={this.getFileContextMenuDefine()}
                        name={file.get('fileName')}
                        isSelected={file.get('isSelected')}
                        folderKey={folder.get('folderIndex')}
                        fileKey={file.get('fileIndex')}
                        fileClickHandler={this.fileClickHandler}
                      />
                    </StyledLink>
                  ))
                }
              </FileWrapper>
            </FolderWrapper>
          ))
        }
      </ExplorerWrapper>
    )
  }
}

export default Explorer
