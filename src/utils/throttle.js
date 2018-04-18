const throttle = (func, threshhold = 500) => {
  let last
  let deferTimer

  return function() {
    const context = this

    const now = +new Date
    const args = arguments
    if (last && now < last + threshhold) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        last = now
        func.apply(context, args)
      }, threshhold)
    } else {
      last = now
      func.apply(context, args)
    }
  }
}

export default throttle
