import React, { Component } from 'react'
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
const notice = (type, duration = 3000, $container, onClose, mask = true) => {
  let notificationInstance = getNewNotification($container)

  notificationInstance.notice({
    duration,
    mask: mask,
    content: (<div>Hello</div>),
    onClose: () => {
      onClose && onClose();
    }
  })
}

export default {
  loading(duration, $container, mask, onClose) {
    return notice('loading', duration, $container, onClose, mask)
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
