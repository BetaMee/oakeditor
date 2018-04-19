import React, { Component } from 'react'
import { fromJS } from 'immutable'

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

const ExplorerLists = fromJS([
  {
    folderName: 'LifeLogs',
    folderIndex: 0,
    isExpand: true,
    fileLists: [
      {
        fileName: 'Issuse: 毕设怎么搞啊',
        fileLink: '',
        fileIndex: 0,
        isSelected: true,        
      },
      {
        fileName: 'Issuse: 毕设怎么搞啊',
        fileLink: '',
        fileIndex: 1,
        isSelected: false,        
      },
      {
        fileName: 'Issuse: 毕设怎么搞啊',
        fileLink: '',
        fileIndex: 2,
        isSelected: false,        
      }
    ],
  },
  {
    folderName: 'LinuxLogs',
    folderIndex: 1,
    isExpand: false,
    fileLists: [
      {
        fileName: 'Issuse: 论如何学好前端',
        fileLink: '',
        fileIndex: 3,
        isSelected: false,        
      },
      {
        fileName: 'Issuse: 论如何学好前端',
        fileLink: '',
        fileIndex: 4,
        isSelected: false,      
      },
      {
        fileName: 'Issuse: 论如何学好前端',
        fileLink: '',
        fileIndex: 5,
        isSelected: false,        
      }
    ],
  },
  {
    folderName: 'LifeLogs',
    folderIndex: 2,
    isExpand: false,
    fileLists: [
      {
        fileName: 'Issuse: 做人呢，最重要的是开心',
        fileLink: '',
        fileIndex: 6,
        isSelected: false,                
      },
      {
        fileName: 'Issuse: 做人呢，最重要的是开心',
        fileLink: '',
        fileIndex: 7,
        isSelected: false,                
      },
      {
        fileName: 'Issuse: 做人呢，最重要的是开心',
        fileLink: '',
        fileIndex: 8,
        isSelected: false,        
      }
    ],
  }
])

class Explorer extends Component {
  state = {
    explorerLists: ExplorerLists,
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
      explorerLists
    } = this.state
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
                    <File
                      menuConfig={this.getFileContextMenuDefine()}                    
                      name={file.get('fileName')}
                      key={file.get('fileIndex')}
                      isSelected={file.get('isSelected')}
                      folderKey={folder.get('folderIndex')}                      
                      fileKey={file.get('fileIndex')}
                      fileClickHandler={this.fileClickHandler}
                    />
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
