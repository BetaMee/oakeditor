
const baseServerUrl = 'http://oakserver-dev.ap-northeast-1.elasticbeanstalk.com'

// const baseServerUrl = 'http://localhost:8080'

export default (prefix, params) => {
  let paramUrl = ''
  if (params && params.length > 0) {
    paramUrl= params.reduce((total, param) => `${total}${param}/`, '/')
  }
  return `${baseServerUrl}/${prefix}${paramUrl}`.replace(/\/$/ ,'')
}
