import React, { Component } from 'react'
// 引入组件
import Wrapper from '../common/components/Wrapper'
import SVGIconWrapper from '../common/components/SVGIconWrapper'
import SVGIcon from '../common/components/SVGIcon'
import Input from '../common/components/Input'
import { request, context } from '../../core'

const { GlobalConsumer } = context

const TitleInput = Input.extend`
  padding: 4px 12px 4px 12px;
  font-size: 21px;
  border-radius: 2px;
  &:hover {
    color: #fff;
    background-color: hsla(0,0%,100%,.1);
  }
`

class Status extends Component {
  state = {
    title: '',
    prevTitle: ''
  }
  /**
   * TODO 重新设计数据流，尽量不使用getDerivedStateFromProps，因为不管props还是state更新都会触发重更新
   * 这里的问题是props和state混合使用了
   * @param {*} props 
   * @param {*} state 
   */
  static getDerivedStateFromProps(props, state) {
    const {
      contextData
    } = props
    const {
      editorSrore,
      articleId
    } = contextData

    // 获取当前文章的值
    const currentArticle = editorSrore.map(archive => archive.get('articles'))
      .flatten(1)
      .find((article) => article.get('articleId') === articleId)
    
    let propsValue = ''
    if (currentArticle) {
      propsValue = currentArticle.get('title')
    }
    
    // 判断controlValue是否一致
    const controlledValue = state.prevTitle === state.title ? propsValue : state.title

    return {
      title: controlledValue,
      prevTitle: propsValue
    }
  }
  titleChangeHanlder = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  enterToSubmitHanlder = async (e) => {
    const {
      contextAction,
      contextData
    } = this.props
    const {
      title
    } = this.state
    const {
      updateEditorSrore
    } = contextAction
    const {
      editorSrore,
      articleId
    } = contextData
    // 按下enter键
    if (e.keyCode === 13) {
      const updatePrefix = 'rest/article/update/title'
      const updateParam = [articleId]
      // 提交
      const updatedArticle = await request.update(updatePrefix, updateParam, { title })
      if (updatedArticle.success) {
        const _newEditorSrore = editorSrore.map(_archive => _archive.update('articles', (_articles) => {
          return _articles.map((_article) => {
            if (_article.get('articleId') === articleId) {
              return _article.update('title', () => title)
            } else {
              return _article
            }
          })
        }))
        updateEditorSrore(_newEditorSrore)
      } else {
        console.log(updatedArticle.message)
      }
    }
  }

  render() {
    const {
      title
    } = this.state
    return (
      <Wrapper
        layout='rowRight'
        wPadding='0 20px 0 0'        
      >
        <SVGIconWrapper
          title='Sync'
        >
          <SVGIcon name='Sync' />
        </SVGIconWrapper>
        {/* 输入框 */}
        <TitleInput
          onChange={this.titleChangeHanlder}
          value={title}
          onKeyUp={this.enterToSubmitHanlder}
        />
        <SVGIconWrapper
          title='Synchronize now'
        >
          <SVGIcon name='Sync' />
        </SVGIconWrapper>
        <SVGIconWrapper
          title='Publish'
        >
          <SVGIcon name='Publish' />
        </SVGIconWrapper>
      </Wrapper>
    )
  }
}

export default GlobalConsumer(Status)
