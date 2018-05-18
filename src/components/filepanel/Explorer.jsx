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
  static convertDataToExplorerList = (data, explorerData, currentArticleId) => data.map((_item, index) => {
    let isExpand = explorerData.size !== 0 ? explorerData.get(index).get('isExpand') : false
    // 判断是否folder展示有冲突
    const currentArticle = _item.get('articles').find(_article => _article.get('articleId') === currentArticleId)
    const isCurrentFlag = Map.isMap(currentArticle) && !isExpand
    if (isCurrentFlag) {
      isExpand = true
    }
    return fromJS({
      folderName: _item.get('name'),
      folderIndex: _item.get('archiveId'),
      isExpand: isExpand,
      folderEdit: false,
      folderAdd: false,
      fileLists: _item.get('articles').map(_article => {
        return Map({
          fileName: _article.get('title'),
          fileIndex: _article.get('articleId'),
          fileEdit: false,
          fileAdd: false,
          isSelected: _article.get('articleId') === currentArticleId
        })
      })
    })
  })
  static getDerivedStateFromProps (nextProps, prevState) {
    return {
      explorerLists: Explorer.convertDataToExplorerList(nextProps.data, prevState.explorerLists, nextProps.articleId)
    }
  }
  state = {
    explorerLists: Explorer.convertDataToExplorerList(this.props.data, List(), this.props.articleId),
  }

  getExplorerContextMenuDefine = () => {
    return [
      {
        handler: () => this.AddNewFolderHandler(),
        tag: 0
      }
    ]
  }
  // 生成文件夹右键菜单栏
  getFolderContextMenuDefine = (folderKey) => {
    return [
      {
        handler: () => this.AddNewFileHandler(folderKey),
        tag: 1
      },
      {
        handler: () => this.RenameFolderHandler(folderKey),
        tag: 2
      },
      {
        handler: () => this.DeleteFolderHandler(folderKey),
        tag: 3
      }
    ]
  }
  // 生成文件右键菜单栏
  getFileContextMenuDefine = (folderKey, fileKey) => {
    return [
      {
        handler: () => this.RenameFileHandler(folderKey, fileKey),
        tag: 2
      },
      {
        handler: () => this.DeleteFileHandler(fileKey),
        tag: 3
      }
    ]
  }
  AddNewFolderHandler = () => {
    const {
      explorerLists
    } = this.state
    const _newExplorerLists = explorerLists.push(fromJS({
      folderName: '新建文件夹',
      folderIndex: 'folderIndex',
      isExpand: false,
      folderEdit: true,
      folderAdd: true,
      fileLists: []
    }))
    this.setState({
      explorerLists: _newExplorerLists
    })
  }
  // 编辑模式：对文件夹操作
  AddNewFileHandler = (folderKey) => {
    const {
      explorerLists
    } = this.state
    const _newExplorerLists = explorerLists.map(_explorer => {
      // 设置为edit mode
      if (_explorer.get('folderIndex') === folderKey) {
        return _explorer
          .update('fileLists', _fileLists => _fileLists.map((_file) => _file.update('isSelected', () => false))
            .unshift(Map({
              fileName: '新建文章',
              fileIndex: 'fileIndex',
              fileEdit: true,
              fileAdd: true,
              isSelected: true
            })))
      } else {
        return _explorer
      }
    })
    this.setState({
      explorerLists: _newExplorerLists
    })
  }
  RenameFolderHandler = (folderKey) => {
    const {
      explorerLists
    } = this.state
    const _newExplorerLists = explorerLists.map(_explorer => {
      // 设置为edit mode
      if (_explorer.get('folderIndex') === folderKey) {
        return _explorer
          .update('folderEdit', () => true)
      } else {
        return _explorer
      }
    })
    this.setState({
      explorerLists: _newExplorerLists
    })
  }
  DeleteFolderHandler = (folderKey) => {

  }
  // 编辑模式：对文件操作
  RenameFileHandler = (folderKey, fileKey) => {
    const {
      explorerLists
    } = this.state
    const _newExplorerLists = explorerLists
      .map(_explorer => {
        if (_explorer.get('folderIndex') === folderKey) {
          return _explorer
            .update('fileLists', _fileLists => _fileLists.map(_file => {
              if (_file.get('fileIndex') === fileKey) {
                return _file.update('fileEdit', () => true)
              } else {
                return _file
              }     
            }))
        } else {
          return _explorer
        }
      })
    this.setState({
      explorerLists: _newExplorerLists
    })
  }
  DeleteFileHandler = (fileKey) => {
    const {
      DeleteFileRequest
    } = this.props
    DeleteFileRequest(fileKey)
  }
  // 取消编辑模式
  cancelEditMode = () => {
    const {
      explorerLists
    } = this.state
    const _newExplorerLists = explorerLists.map(_explorer => {
      // 设置为edit mode为false
      return _explorer
        .update('folderEdit', () => false)
        .update('fileLists', _fileLists => _fileLists.map(_file => {
          return _file.update('fileEdit', () => false)    
        }))
    })
    this.setState({
      explorerLists: _newExplorerLists
    })
  }
  // 点击文件夹展开
  folderClickHandler = (folderKey, contextMenuClickFlag) => {
    const {
      explorerLists
    } = this.state
    const _newExplorerLists = explorerLists.map(_explorer => {
      // 设置isExpand
      if (_explorer.get('folderIndex') === folderKey) {
        return _explorer
          .update('isExpand', val => !val || contextMenuClickFlag)
      } else {
        return _explorer
      }
    })
    this.setState({
      explorerLists: _newExplorerLists
    })
  }
  // 点击文件展开
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
    const _newExplorerLists = explorerLists
      .map(_explorer => {
        if (_explorer.get('folderIndex') === folderKey) {
          return _explorer
            .update('fileLists', _fileLists => _fileLists.map(_file => {
              if (_file.get('fileIndex') === fileKey) {
                return _file.update('isSelected', () => true)
              } else {
                return _file.update('isSelected', () => false)
              }
            }))
        } else {
          return _explorer
            .update('fileLists', _fileLists => _fileLists.map(_file => _file.update('isSelected', () => false)))
        }
      })
    this.setState({
      explorerLists: _newExplorerLists
    })
  }

  render() {
    const {
      explorerLists
    } = this.state
    const {
      RenameFolderRequest,
      RenameFileRequest,
      AddNewFileRequest,
      AddNewFolderRequest
    } = this.props
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
                menuConfig={this.getFolderContextMenuDefine(folder.get('folderIndex'))}
                name={folder.get('folderName')}
                folderKey={folder.get('folderIndex')}
                isExpand={folder.get('isExpand')}
                isInEdit={folder.get('folderEdit')}
                isInAdd={folder.get('folderAdd')}
                folderClickHandler={this.folderClickHandler}
                RenameFolderRequest={RenameFolderRequest}
                AddNewFolderRequest={AddNewFolderRequest}
                cancelEditMode={this.cancelEditMode}
              />
              <FileWrapper
                isExpand={folder.get('isExpand')}
              >
                {
                  folder.get('fileLists').map(file => {
                    return (
                      <StyledLink
                        to={`/${folder.get('folderName')}/${file.get('fileIndex')}`}
                        key={file.get('fileIndex')}
                      >
                        <File
                          menuConfig={this.getFileContextMenuDefine(folder.get('folderIndex'), file.get('fileIndex'))}
                          name={file.get('fileName')}
                          isSelected={file.get('isSelected')}
                          isInEdit={file.get('fileEdit')}
                          isInAdd={file.get('fileAdd')}
                          folderKey={folder.get('folderIndex')}
                          folderName={folder.get('folderName')}
                          fileKey={file.get('fileIndex')}
                          fileClickHandler={this.fileClickHandler}
                          RenameFileRequest={RenameFileRequest}
                          AddNewFileRequest={AddNewFileRequest}
                          cancelEditMode={this.cancelEditMode}
                        />
                      </StyledLink>
                    )
                  })
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
