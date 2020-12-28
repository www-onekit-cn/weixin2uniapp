export default class Collection {
  constructor(uni_collection) {
    this.THIS = uni_collection
  }

  get(wx_object) {
    let wx_success, wx_fail, wx_complete
    if (wx_object) {
      wx_success = wx_object.success
      wx_fail = wx_object.fail
      wx_complete = wx_object.complete
    }
    wx_object = null
    //////////////////////
    return new Promise((wx_resolve, wx_reject) => {
      this.THIS.get().then(({
        result
      }) => {
        const wx_res = {
          errMsg: "collection.get:ok",
          data: result.data
        }
        wx_resolve(wx_res)
        if (wx_success) {
          wx_success(wx_res)
        }
        if (wx_complete) {
          wx_complete(wx_res)
        }
      }).catch((uni_err) => {
        const wx_err = {
          errMsg: uni_err
        }
        wx_reject(wx_err)
        if (wx_fail) {
          wx_fail(wx_err)
        }
        if (wx_complete) {
          wx_complete(wx_err)
        }
      })
    })
  }

  add(wx_object) {
    let wx_data, wx_success, wx_fail, wx_complete
    wx_data = wx_object.data
    if (wx_object.success || wx_object.fail || wx_object.complete) {
      wx_success = wx_object.success
      wx_fail = wx_object.fail
      wx_complete = wx_object.complete
    }
    wx_object = null
    return new Promise((wx_resolve, wx_reject) => {
      this.THIS.add(wx_data).then(({
        result
      }) => {
        const wx_res = {
          _id: result.requestId,
          errMsg: 'collection.add:ok'
        }
        wx_resolve(wx_res)
        if (wx_success) {
          wx_success(wx_res)
        }
        if (wx_complete) {
          wx_complete(wx_res)
        }
      }).catch(uni_err => {
        const wx_err = {
          errrMsg: uni_err
        }
        wx_reject(wx_err)
        if (wx_fail) {
          wx_fail(wx_err)
        }
        if (wx_complete) {
          wx_complete(wx_err)
        }
      })
    })
  }

  where(object) {
    return new Collection(this.THIS.where(object))
  }

  remove(wx_object) {
    let wx_success, wx_fail, wx_complete
    if (wx_object) {
      wx_success = wx_object.success
      wx_fail = wx_object.fail
      wx_complete = wx_object.complete
    }
    wx_object = null
    //////////////////////
    return new Promise((wx_resolve, wx_reject) => {
      this.THIS.remove().then(({
        result
      }) => {
        const wx_res = {
          errMsg: "collection.remove:ok",
          stats: {
            removed: 0
          }
        }
        wx_resolve(wx_res)
        if (wx_success) {
          wx_success(wx_res)
        }
        if (wx_complete) {
          wx_complete(wx_res)
        }
      }).catch((uni_err) => {
        const wx_err = {
          errMsg: uni_err
        }
        wx_reject(wx_err)
        if (wx_fail) {
          wx_fail(wx_err)
        }
        if (wx_complete) {
          wx_complete(wx_err)
        }
      })
    })
  }

  update(wx_object) {
    let wx_data = wx_object.data
    let wx_success, wx_fail, wx_complete
    if (wx_object.success || wx_object.fail || wx_object.complete) {
      wx_success = wx_object.success
      wx_fail = wx_object.fail
      wx_complete = wx_object.complete
    }
    wx_object = null
    return new Promise((wx_resolve, wx_reject) => {
      this.THIS.update(wx_data).then(({
        result
      }) => {
        const wx_res = {
          stats: {
            updated: result.updated
          },
          errMsg: 'collection.add:ok'
        }
        wx_resolve(wx_res)
        if (wx_success) {
          wx_success(wx_res)
        }
        if (wx_complete) {
          wx_complete(wx_res)
        }
      }).catch(uni_err => {
        const wx_err = {
          errrMsg: uni_err
        }
        wx_reject(wx_err)
        if (wx_fail) {
          wx_fail(wx_err)
        }
        if (wx_complete) {
          wx_complete(wx_err)
        }
      })
    })
  }

  count(wx_object) {
    let wx_success, wx_fail, wx_complete
    if (wx_object) {
      wx_success = wx_object.success
      wx_fail = wx_object.fail
      wx_complete = wx_object.complete
    }
    wx_object = null

    return new Promise((wx_resolve, wx_reject) => {
      this.THIS.count().then(({
        result
      }) => {
        const wx_res = {
          total: result.total,
          errMsh: 'collection.count:ok'
        }
        wx_resolve(wx_res)
        if (wx_success) {
          wx_success(wx_res)
        }
        if (wx_complete) {
          wx_complete(wx_res)
        }
      }).catch(uni_err => {
        const wx_res = {
          errMsg: uni_err
        }
        wx_reject(wx_res)
        if (wx_fail) {
          wx_fail(wx_res)
        }
        if (wx_complete) {
          wx_complete(wx_res)
        }
      })
    })
  }

  watch(wx_object) {
    const wx_onChange = wx_object.onChange
    const wx_onError = wx_object.onChange
    let targetObject = this.THIS.content.$param
    let id = 0
    function randomRequestId(randomFlag, min, max) {
      let str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
      }
      for (var i = 0; i < range; i++) {
        let pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
      }
      return str;
    }
    const requestId = `160888${randomRequestId(false,7)}_${id}.${randomRequestId(false, 16)}`
    const watchId = `watchid_160888${randomRequestId(false,7)}_${id}.${randomRequestId(false, 16)}`
    targetObject = new Proxy({}, {
      get: target => {
        const docChange = Array.from(target)
        const res = {
          docChange,
          id,
          requestId,
          type: 'init',
          watchId
        }
        wx_onChange(res)
        id++
      }
    })

    targetObject._openid
  }

  limit(wx_value) {
    return new Collection(this.THIS.limit(wx_value))
  }

  orderBy(filedPath, order) {
    return new Collection(this.THIS.orderBy(filedPath, order))
  }

  skip(wx_offset) {
    return new Collection(this.THIS.skip(wx_offset))
  }

  field(wx_object) {
    return new Collection(this.THIS.field(wx_object))
  } 

  aggregate() {
    
  }
}