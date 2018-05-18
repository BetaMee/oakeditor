export default async () => {
  const $body = document.getElementsByTagName('body')[0]
  $body.addEventListener('contextmenu', (e) => {
    // 取消右键菜单事件
    e.preventDefault()
  })
  $body.addEventListener('keydown', (e) => {
    // ctrl-s 保存事件 
    if (e.keyCode === 83 && e.ctrlKey) {
      e.preventDefault();
    }
  })
}