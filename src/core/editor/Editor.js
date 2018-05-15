import MarkdownIt from 'markdown-it'
import Codemirror from 'codemirror'
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
  mdRender = new MarkdownIt()

  mdEditor = null

  /**
   * 初始化Markdown编辑器
   */
  initMDEditor($container) {
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
    return this
  }

  bindEditorChangeHandler(editorOnHandler) {
    this.mdEditor.on('change', (editor) => {
      editorOnHandler(editor.getValue())
    })
  }
  /**
   * 更新编辑器内容的值
   * @param {*} value 
   */
  updateMDEditorValue(value) {
    this.mdEditor.setValue(value)
  }

  renderToHTML(rawString) {
    return this.mdRender.render(rawString)
  }
}

export default new Editor()
