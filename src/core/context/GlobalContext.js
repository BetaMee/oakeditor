import React from 'react'

const GlobalContext = React.createContext({
  data: {}, // 数据
  action: {} // 操作
})

export default GlobalContext
