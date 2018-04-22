import axios from 'axios'

const request = {
  // get数据
  get() {

  },
  // 上传数据
  post() {

  },
  update() {

  },
  delete() {

  },
  // 上传文件
  upload(type, file, onUploadProgressCb) {
    // 配置
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent)
        // 已完成的比例
        const percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )
        onUploadProgressCb(percentCompleted)
      }
    }
    // 生成表单数据
    const formData = new FormData()
    formData.append('userId', 'd5da709f-dc12-413f-a7d6-073357799fb5')
    formData.append(type, file)

    return axios.post('http://localhost:8080/assets/upload/image', formData, config)
  }
}

export default request
