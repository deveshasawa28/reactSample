export const storageActions = {
  storageInstance: localStorage,

  storeItem(key, value) {
    this.storageInstance.setItem(key, value)
  },

  getItem(key) {
    return this.storageInstance.getItem(key)
  },

  clearStorage() {
    this.storageInstance.clear()
  },

  storeItems(keys, values) {
    keys.map((key, i) => {
      return this.storeItem(key, values[i])
    })
  },
}
