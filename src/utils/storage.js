const storage = {
  getItem: (key) => {
    return window.localStorage.getItem(key)
  },
  setItem: (key, val) => {
    window.localStorage.setItem(key, val)
  },
  setGroupItems: (items) => {
    Object.entries(items).forEach(([key, val]) => {
      window.localStorage.setItem(key, val)
    })
  },
  deleteItem: (key) => {
    window.localStorage.removeItem(key)
  },
  clear: () => {
    window.localStorage.clear()
  }
}



export default storage
