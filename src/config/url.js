
const baseServerUrl = 'http://oakserver-dev.ap-northeast-1.elasticbeanstalk.com' 

export default (prefix, params) => {
  let paramUrl = ''
  if (params && params.length > 0) {
    paramUrl= params.reduce((total, param) => `${total}${param}/`, '/')
  }
  return `${baseServerUrl}/${prefix}${paramUrl}`
}
