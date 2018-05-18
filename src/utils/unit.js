const isArray =  (object) => {
  return object && typeof object === 'object' && Array == object.constructor
}

export {
  isArray
}
