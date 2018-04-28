
/**
 * 计算文件大小
 * @param {number} size 
 */
const calculateFileSize = (size) => {
  const kbUnit = Math.floor(size / 1024)
  const mbUnit = Math.floor(kbUnit / 1024)
  if (0 <= kbUnit <= 1024) {
    return `${kbUnit}KB`
  } else {
    return `${mbUnit}M`
  }
}

/**
 * 分割文件扩展名
 * @param {*} originalName 
 */
const splitFileExtension = (originalName) => {
  const exec = /\.[a-z]{2,}$/.exec(originalName)
  const extension = exec[0] // 拓展名
  const extensionIndex = exec['index'] // 拓展名分割index
  const fileName = originalName.slice(0, extensionIndex)
  return {
    extension,
    fileName
  }
}

export default {
  calculateFileSize,
  splitFileExtension
}
