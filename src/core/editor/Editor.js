import MarkdownIt from 'markdown-it'

class Editor {
  mdRender = new MarkdownIt()
  observer = new MutationObserver((mutations, observer) => {
    console.log(mutations)
    console.log(observer)
  })
  
  DOMObserver() {
    var article = document.querySelector('#article');

    var  options = {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true
    }
    this.observer.observe(article, options)
  }

  renderToHTML(rawContent) {
    return this.mdRender.render(rawContent)
  }
}

export default new Editor()
