import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Notice from './Notice'
import Mask from './components/Mask'

// 统计notice总数 防止重复
let noticeNumber = 0

// 生成唯一的id
const getUuid = () => {
  return "notification-" + new Date().getTime() + "-" + noticeNumber++
}

class Notification extends Component {
  state = {
    notices: [], // 存储当前有的notices
    hasMask: true, // 是否显示蒙版
  }
  add (notice) {
    // 添加notice
    // 创造一个不重复的key
    const { notices } = this.state
    const key = notice.key ? notice.key : notice.key = getUuid()
    const mask = notice.mask ? notice.mask : false
    const unique = notice.unique ? notice.unique : false
    const temp = notices.filter((item) => item.key === key).length

    if(!temp && !unique){
      // 不存在重复的 添加
      notices.push(notice)
      this.setState({
        notices: notices,
        hasMask: mask
      })
    } else if(!temp && unique){
      this.setState({
        notices: [notice],
        hasMask: mask
      })
    }
  }
  remove (key) {
    // 根据key删除对应
    this.setState(previousState => {
      return {
        notices: previousState.notices.filter(notice => notice.key !== key)
      }
    })
  }
  getNoticeDOM () {
    const _this = this
    const {
      notices
    } = this.state
    let result = []
    notices.map((notice)=>{
      // 每个Notice onClose的时候 删除掉notices中对应key的notice
      const closeCallback = () => {
      _this.remove(notice.key);
        // 如果有用户传入的onClose 执行
        if(notice.onClose) notice.onClose();
      }

      result.push(
        <Notice key={notice.key} {...notice} onClose={closeCallback} />
      )
    })

    return result
  }
  getMaskDOM () {
    const {notices, hasMask} = this.state;
    // notices为空的时候 不显示蒙版
    // 始终只有一个蒙版
    if(notices.length > 0 && hasMask == true) return <Mask />
  }
  render () {
    const noticesDOM = this.getNoticeDOM()
    const maskDOM = this.getMaskDOM()

    return (
      <div>
        {maskDOM}
        {noticesDOM}
      </div>
    )
  }
}


// Notification增加一个重写方法
// 该方法方便Notification组件动态添加到页面中和重写
Notification.reWrite = function ($container, properties) {
  const { ...props } = properties || {}

  let $div
  $div = document.createElement('div')
  if ($container) {
    $container.appendChild($div)
  } else {
    document.body.appendChild($div)
  }

  const notification = ReactDOM.render(<Notification {...props} />, $div)

  return {
    notice(noticeProps) {
      notification.add(noticeProps)
    },
    removeNotice(key) {
      notification.remove(key)
    },
    destroy() {
      ReactDOM.unmountComponentAtNode($div)
      if ($container) {
        $container.removeChild($div)
      } else {
        document.body.removeChild($div)
      }
    },
    component: notification
  }
}

export default Notification
