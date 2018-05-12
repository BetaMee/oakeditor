import MarkdownIt from 'markdown-it'
import ReactDOM from 'react-dom'
import React from 'react'

import EditorZone from './components/EditorZone'

class Editor {
  mdRender = new MarkdownIt()

  /**
   * 将字符串格式化为标记语言
   * @param {*} rawString 
   */
  formatStringToMarkup(rawString) {
    const h1Reg = /^#{1}\s{2,}/g
    const h2Reg = /^#{2}\s{2,}/g

    if (h2Reg.test(rawString)) {
      return [
        {
          type: 'h2',
          content: '##'
        },
        {
          type: 'text',
          content: rawString.replace(/^##/, '')
        }
      ]
    }
    
  }

  convertRawStringToSplitedArr(rawString) {
    if (typeof rawString !== 'string') {
      throw new Error('rawString is not string')
    }
    const splitedArr = []
    let toSplitString = rawString
    // 位置
    let toSplitStartIndex = 0
    let toSplitEndIndex = toSplitString.search(/\n\n(?!\n)/)
    while(toSplitEndIndex > -1) {
      const splitedString = toSplitString.slice(toSplitStartIndex, toSplitEndIndex + 2)
      // 添加进数组中
      splitedArr.push(splitedString)
      // 分离原数组，去除已search过的字符
      toSplitString = toSplitString.slice(toSplitEndIndex + 2)
      // 更新end index
      toSplitEndIndex = toSplitString.search(/\n\n(?!\n)/)
    }
    // 将最后一段加进去
    splitedArr.push(toSplitString)
    return splitedArr
  }
  /**
   * 将字符串渲染成markdown编辑内容的格式
   * @param {*} rawString 
   */
  renderToMD(rawString) {
    const convertedArr = this.convertRawStringToSplitedArr(rawString)
    console.log(convertedArr)
    const editorData = convertedArr.map(paragraph => {
      return this.formatStringToMarkup(paragraph)
    })

    ReactDOM.render(<EditorZone raw={editorData} />, document.getElementById('article'))
  }

  renderToHTML(rawString) {
    return this.mdRender.render(rawString)
  }
}

export default new Editor()
