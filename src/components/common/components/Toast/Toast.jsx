import React from 'react'

import Notification from './Notification'

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
const notice = (content, type, duration = 3000, $container, onClose, mask = true) => {
  let notificationInstance = getNewNotification($container)

  notificationInstance.notice({
    duration,
    mask: mask,
    content: (<div>{content}</div>),
    onClose: () => {
      onClose && onClose()
    }
  })
}

export default {
  show(content, duration, $container, mask, onClose) {
    return notice(content, 'default', duration, $container, onClose, mask)
  },
  info(content, duration, $container, mask, onClose) {
    return notice(content, 'info', duration, $container, onClose, mask)
  },
  success(content, duration, $container, mask, onClose) {
    return notice(content, 'success', duration, $container, onClose, mask)
  },
  warning(content, duration, $container, mask, onClose) {
    return notice(content, 'warning', duration, $container, onClose, mask)
  },
  error(content, duration, $container, mask, onClose) {
    return notice(content, 'error', duration, $container, onClose, mask)
  },
  // 销毁实例
  hide() {
    if (newNotification) {
      newNotification.destroy()
      newNotification = null
    }
  }
}
