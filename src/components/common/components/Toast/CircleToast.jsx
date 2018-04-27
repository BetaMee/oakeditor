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
  // 每次都要重写，原因在于assets panel会被unmount，但Notification实例仍然会保持，所以需要每次都用reWrite生成
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
      // 清理实例
      notificationInstance.destroy()
      newNotification = null
      // 回调函数
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
