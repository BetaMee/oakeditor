import MarkdownIt from 'markdown-it'
import Codemirror from 'codemirror'
import hljs from 'highlightjs'
import emoji from 'markdown-it-emoji'
import marked from 'markdown-it-mark'
import abbr from 'markdown-it-abbr'
import 'highlightjs/styles/github-gist.css'
import 'codemirror/mode/gfm/gfm'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/edit/continuelist.js'
import 'codemirror/keymap/sublime'
// 自定义样式
import './Editor.css'

class Editor {
  mdRender = new MarkdownIt({
    // 高亮支持
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }
      return ''; // use external default escaping
    }
  })

  mdEditor = null

  /**
   * 初始化Markdown编辑器
   */
  initMDEditor($container) {
    // codemirror
    this.mdEditor = Codemirror($container, {
      lineNumbers: true,
      lineWrapping: true,
      showCursorWhenSelecting: true,
      autoCloseBrackets: true,
      matchBrackets: true,
      tabSize: 2,
      mode: 'text/x-gfm',
      theme: 'idea',
      keyMap: 'sublime',
      extraKeys: {'Enter': 'newlineAndIndentContinueMarkdownList'}
    })
    // markdown-it插件
    this.mdRender
      .use(emoji)
      .use(marked)
      .use(abbr)
    return this
  }

  bindEditorChangeHandler(editorOnChangeHandler) {
    this.mdEditor.on('change', (editor) => {
      editorOnChangeHandler(editor.getValue())
    })
    return this
  }
  bindEditorScrollHandler(editorOnScrollHandler) {
    this.mdEditor.on('scroll', (editor) => {
      // editorOnHandler(editor.getValue())
      // console.log(editor)
      const editotScrollTop = editor.doc.scrollTop
      const editorHeight = editor.doc.height
      const wrapperHeight = editor.display.lastWrapHeight
      // console.log(`${editotScrollTop} ${editorHeight} ${wrapperHeight}`)
      const scrollPercent = editotScrollTop / (editorHeight - wrapperHeight)
      // console.log(scrollPercent)
    })
    return this
  }
  /**
   * 更新编辑器内容的值
   * @param {*} value 
   */
  updateMDEditorValue(value) {
    this.mdEditor.setValue(value)
    return this
  }

  renderToHTML(rawString) {
    return this.mdRender.render(rawString)
  }
}

export default new Editor()
