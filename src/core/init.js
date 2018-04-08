export default () => {
  const $body = document.getElementsByTagName('body')[0]
  $body.addEventListener('contextmenu', (e) => {
    // 取消右键菜单事件
    e.preventDefault()
  })
}