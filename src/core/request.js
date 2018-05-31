import axios from 'axios'
import { Url, storage } from '../utils'

const getPublicConfig = () => {
  return {
    headers: {
      'Authorization': `Bearer ${storage.getItem('token')}`
    }
  }
}

const request = {
  // 登录接口
  login: async (prefix, data) => {
    try {
      const response = await axios.post(Url(prefix), data)
      if (response.statusText === 'OK' && response.data) {
        const postData = response.data
        if (postData.success) {
          return {
             data: postData.item || postData.items || postData,
             message: postData.message,
             success: true
          }
        } else {
          throw(new Error(postData.message))
        }
      } else {
        throw(new Error('bad request'))
      }
    } catch (e) {
      // 容错，可提示toast
      console.warn(e)
      return {
        message: e.message,
        success: false
      }
    }
  },
  // 上传数据
  post: async (prefix, data) => {
    try {
      const response = await axios.post(Url(prefix), data, getPublicConfig())
      if (response.statusText === 'OK' && response.data) {
        const postData = response.data
        if (postData.success) {
          return {
             data: postData.item || postData.items || postData,
             message: postData.message,
             success: true
          }
        } else {
          throw(new Error(postData.message))
        }
      } else {
        throw(new Error('bad request'))
      }
    } catch (e) {
      // 容错，可提示toast
      console.warn(e)
      return {
        message: e.message,
        success: false
      }
    }
  },
  // 加载数据
  fetch: async (prefix, params) => {
    try {
      const response = await axios.get(Url(prefix, params), getPublicConfig())
      if (response.statusText === 'OK' && response.data) {
        const fetchedData = response.data
        if (fetchedData.success) {
          return {
             data: fetchedData.item || fetchedData.items || fetchedData,
             message: fetchedData.message,
             success: true
          }
        } else {
          throw(new Error(fetchedData.message))
        }
      } else {
        throw(new Error('bad request'))
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
  // 更新数据
  update: async (prefix, params, data) => {
    try {
      const response = await axios.put(Url(prefix, params), data, getPublicConfig())
      if (response.statusText === 'OK' && response.data) {
        const updatedData = response.data
        if (updatedData.success) {
          return {
             data: updatedData.item || updatedData.items || updatedData,
             message: updatedData.message,
             success: true
          }
        } else {
          throw(new Error(updatedData.message))
        }
      } else {
        throw(new Error('bad request'))
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
  // 删除数据
  delete: async (prefix, params) => {
    try {
      const response = await axios.delete(Url(prefix, params), getPublicConfig())
      if (response.statusText === 'OK' && response.data) {
        const deletedData = response.data
        if (deletedData.success) {
          return {
             message: deletedData.message,
             success: true
          }
        } else {
          throw(new Error(deletedData.message))
        }
      } else {
        throw(new Error('bad request'))
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
  // 上传资源
  upload: async (prefix, data, onUploadProgressCb) => {
    // 配置
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        ...getPublicConfig().headers
      },
      onUploadProgress: (progressEvent) => {
        // 已完成的比例
        const percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )
        onUploadProgressCb(percentCompleted)
      }
    }
    try {
      const response = await axios.post(Url(prefix), data, config)
      if (response.statusText === 'OK' && response.data) {
        const uploadedData = response.data
        if (uploadedData.success) {
          return {
             data: uploadedData.item || uploadedData.items || uploadedData,
             message: uploadedData.message,
             success: true
          }
        } else {
          throw(new Error(uploadedData.message))
        }
      } else {
        throw(new Error('bad request'))
      }
    } catch(e) {
      // 容错，可提示toast
      console.warn(e)
      return {
        message: e.message,
        success: false
      }
    }
  }
}

export default request
