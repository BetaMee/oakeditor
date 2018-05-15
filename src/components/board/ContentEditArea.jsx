import React, { Component } from 'react'

import Wrapper from '../common/components/Wrapper'
import { editor } from '../../core'

class ContentEditArea extends Component {
  editorRef = React.createRef()

  componentDidUpdate() {
    const {
      content
    } = this.props
    editor.updateMDEditorValue(content)
  }
  componentDidMount() {
    editor
      .initMDEditor(this.editorRef.current)
      .bindEditorChangeHandler(this.editorOnChangeHanlder)
  }

  editorOnChangeHanlder = (value) => {
    console.log(value)
    const {
      updateEditorSrore,
      contentId,
      editorSrore
    } = this.props
    const newEditorSrore = editorSrore.map(_archive => _archive.update('articles', (_articles) => {
      return _articles.map((_article) => {
        if (_article.get('articleId') === contentId) {
          return _article.update('content', () => value)
        } else {
          return _article
        }
      })
    }))
    // updateEditorSrore(newEditorSrore)
  }

  render() {
    return (
      <Wrapper
        innerRef={this.editorRef}
      >
      </Wrapper>
    )
  }
}

export default ContentEditArea
