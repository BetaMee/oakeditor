class DataBase {
  dbName = 'oakeditor' // 数据库名称
  dbVersion = 1 // 版本
  instance = null // 数据库实例
  // store = null
  storeName = 'article'
  keyPath = 'articleId'
  type = 'readwrite'
  /**
   * 初始化数据库
   */
  initDataBase() {
    return new Promise((resovle, reject) => {
      const dbOpenRequest = window.indexedDB.open(this.dbName, this.dbVersion)
      dbOpenRequest.onerror= (e) => {
        throw new Error('indexDB open Error!')
      }
      dbOpenRequest.onsuccess= (e) => {
        // 获取数据库句柄
        this.instance = e.target.result
      }
      dbOpenRequest.onupgradeneeded = (e) => {
        this.instance = e.target.result
        if(!this.instance.objectStoreNames.contains(this.storeName)){
          this.instance.createObjectStore(this.storeName, { keyPath: this.keyPath })
        }
      }
    })
  }
  getItem() {
    
  }
  addItem(item) {
    return new Promise((resovle, reject) => {
      const transaction=this.instance.transaction([this.storeName],this.type)
      const store=transaction.objectStore(this.storeName)
      // store添加数据是异步的
      const request = store.add(item)
      request.onerror = (e) => {
        reject(new Error(e.target.error.name))
      }
      request.onsuccess = (e) => {
        resovle(this)
      }
    })
  }
  deleteItems() {

  }
  updateItem() {

  }
  // 关闭数据库
  closeDB() {
    try {
      this.instance.close()
    } catch(e) {
      throw new Error(`indexedDB close error: ${e.message}`)
    }
  }
  // 删除数据库
  deleteDB() {
    try {
      window.indexedDB.deleteDatabase(this.dbName)
    } catch(e) {
      throw new Error(`indexedDB delete error: ${e.message}`)
    }
  }
}

export default new DataBase()
