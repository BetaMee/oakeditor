const throttle = (func, threshhold = 500) => {
  let last
  let deferTimer

  return function() {
    const now = +new Date()
    const args = arguments
    if (last && now < last + threshhold) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        last = now
        func && func.apply(this, args)
      }, threshhold)
    } else {
      last = now
      func && func.apply(this, args)
    }
  }
}

export default throttle
