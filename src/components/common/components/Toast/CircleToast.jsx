import React from 'react'
import Notification from './Notification'
import Failure from './components/Failure'
import Loading from './components/Loading'
import Success from './components/Success'
import CircleToastWrapper from './components/CircleToastWrapper'

const ToastContentMap = {
  loading: <Loading />,
  success: <Success />,
  failure: <Failure />
}

let newNotification
// 获得一个Notification
const getNewNotification = ($container) => {
  // 单例 保持页面始终只有一个Notification
  if (!newNotification) {
    newNotification = Notification.reWrite($container)
  }
  return newNotification
}

// notice方法实际上就是集合参数 完成对Notification的改变
const notice = (type, duration = 3000, $container, onClose, mask = true) => {
  let notificationInstance = getNewNotification($container)

  notificationInstance.notice({
    unique: true, // 是否保持单例内容
    duration,
    mask: mask,
    content: (<CircleToastWrapper>{ToastContentMap[type]}</CircleToastWrapper>),
    onClose: () => {
      onClose && onClose()
    }
  })
}

export default {
  loading($container, mask, onClose) {
    return notice('loading', 0, $container, onClose, mask)
  },
  success(duration, $container, mask, onClose) {
    return notice('success', duration, $container, onClose, mask)
  },
  fail(duration, $container, mask, onClose) {
    return notice('failure', duration, $container, onClose, mask)
  },
  // 销毁实例
  hide() {
    if (newNotification) {
      newNotification.destroy()
      newNotification = null
    }
  }
}
