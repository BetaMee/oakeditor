
/**
 * 计算文件大小
 * @param {number} size 
 */
const calculateFileSize = (size) => {
  const kbUnit = Math.floor(size / 1024)
  const mbUnit = Math.floor(kbUnit / 1024)
  if (0< kbUnit <= 1024) {
    return `${kbUnit}KB`
  } else {
    return `${mbUnit}M`
  }
}

export default {
  calculateFileSize
}
