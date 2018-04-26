import axios from 'axios'
import { Url } from '../utils'

const request = {
  // 加载数据
  fetch: async (prefix, params) => {
    try {
      const data = await axios.get(Url(prefix, params))
      if (data.statusText === 'OK' && data.data) {
        const fetchedData = data.data
        if (fetchedData.success) {
          return {
             data: fetchedData.item || fetchedData.items,
             success: true
          }
        } else {
          throw(new Error(fetchedData.message))
        }
      }
    } catch(e) {
      // 容错，可提示toast
      console.warn(e)
      return {
        message: e.message,
        success: false
      }
    }
  },
  // 上传数据
  post() {

  },
  // 更新数据
  update() {

  },
  // 删除数据
  delete: (prefix, params) => {
    try {
      // const data = await axios.delete(Url(prefix, params))
      console.log(Url(prefix, params))
      return Url(prefix, params)
    } catch(e) {

    }
  },
  // 上传资源
  upload: (prefix, data, onUploadProgressCb) => {
    // 配置
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent) => {
        // 已完成的比例
        const percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )
        onUploadProgressCb(percentCompleted)
      }
    }
    return axios.post(Url(prefix), data, config)
  }
}

export default request
