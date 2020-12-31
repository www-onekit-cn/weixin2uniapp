import Database from './Database'
export default class wx_cloud {

  static init(wx_options) {
    const env = wx_options.env
    const traceUser = wx_options.traceUser || false
    wx_options = null
    /////////////////////
    this.env = env // 并不支持
    this.traceUser = traceUser
  }

  static database() {
    let wx_database = this.wx_database
    if (!wx_database) {
      wx_database = new Database(uniCloud.database())
      this.wx_database = wx_database
    }
    return wx_database
  }

  static callFunction(wx_object) {
    let wx_success, wx_fail, wx_complete
    const name = wx_object.name
    const data = wx_object.data
    if (wx_object.success || wx_object.fail || wx_object.complete) {
      wx_success = wx_object.success
      wx_fail = wx_object.fail
      wx_complete = wx_object.complete
    }
    wx_object = null
    return new Promise((wx_resolve, wx_reject) => {
      uniCloud.callFunction({
        name,
        data
      }).then(res => {
        const resu = {
          errMsg: 'cloud.callFunction:ok',
          requestId: res.requestId,
          result: res.result
        }
        wx_resolve(resu)
        if (wx_success) {
          wx_success(resu)
        }
        if (wx_complete) {
          wx_complete(resu)
        }
      }).catch(err => {
        wx_reject(err)
        if (wx_fail) {
          wx_fail(err)
        }
        if (wx_complete) {
          wx_complete(err)
        }
      })
    })

  }

  static callContainer(wx_object) {
    let wx_success, wx_fail, wx_complete
    if (wx_object) {
      wx_success = wx_object.success
      wx_fail = wx_object.fail
      wx_complete = wx_object.complete
    }
    wx_object = null
    //////////////////////
    return new Promise((wx_resolve, wx_reject) => {

      const wx_err = {
        errMsg: "callContainer is not support"
      }
      if (wx_fail) {
        wx_fail(wx_err)
      } else {
        wx_reject(wx_err)
      }
      if (wx_complete) {
        wx_complete(wx_err)
      }
    })
  }

  static uploadFile(wx_object) {
    const cloudPath = wx_object.cloudPath
    const filePath = wx_object.filePath
    let wx_success, wx_fail, wx_complete
    if (wx_object.success || wx_object.fail || wx_object.complete) {
      wx_success = wx_object.success
      wx_fail = wx_object.fail
      wx_complete = wx_object.complete
    }
    wx_object = null
    return new Promise((wx_resolve, wx_reject) => {
      uniCloud.uploadFile({
        filePath,
        cloudPath
      }).then(res => {
        const resu = {
          errMsg: 'cloud.uploadFile:ok',
          fileID: res.fileID,
          statusCode: 204
        }
        wx_resolve(resu)
        if (wx_success) {
          wx_success(resu)
        }
        if (wx_complete) {
          wx_complete(resu)
        }
      }).catch(err => {
        wx_reject(err)
        if (wx_fail) {
          wx_fail(err)
        }
        if (wx_complete) {
          wx_complete(err)
        }
      })
    })
  }

  static downloadFile(wx_object) {
    const fileID = wx_object.fileID
    const wx_success = wx_object.success
    const wx_fail = wx_object.fail
    const wx_complete = wx_object.complete

    wx_object = null

    return new Promise((wx_resolve, wx_reject) => {
      uniCloud.downloadFile({
        fileID: `c${fileID}`
      }).then(res => {
        const resu = {
          cookies: [],
          dataLength: 0,
          errMsg: 'downloadFile:fail',
          header: '请在云函数中执行',
          statusCode: 500,
          tempFilePath: null
        }
        wx_resolve(resu)
        if (wx_success) {
          wx_success(resu)
        }
        if (wx_complete) {
          wx_complete(resu)
        }
      }).catch(err => {
        wx_reject(err)
        if (wx_fail) {
          wx_fail(err)
        }
        if (wx_complete) {
          wx_complete(err)
        }
      })
    })
  }

  static deleteFile(wx_object) {

  }

  static getTempFileURL(wx_object) {
    let wx_success, wx_fail, wx_complete
    const fileList = wx_object.fileList
    if (wx_object.success || wx_object.fail || wx_object.complete) {
      wx_success = wx_object.success
      wx_fail = wx_object.fail
      wx_complete = wx_object.complete
    }
    wx_object = null

    return new Promise((wx_resolve, wx_reject) => {
      this.THIS.getTempFileURL({
        fileList,
      }).then(res => {
        const resu = {
          errMsg: 'cloud.getTempFileURL:ok',
          fileList: res.fileList.map(res => {
            const obj = {
              errMsg: 'OK',
              fileID: res.fileID,
              maxAge: fetch(res.tempFileURL).then(res => res.blob()).then(data => data.size),
              status: 0,
              tempFileURL: res.tempFileURL
            }
            return obj
          })

        }
        wx_resolve(resu)
        if (wx_success) {
          wx_success(resu)
        }
        if (wx_complete) {
          wx_complete(resu)
        }
      }).catch(err => {
        wx_reject(err)
        if (wx_fail) {
          wx_fail(err)
        }
        if (wx_complete) {
          wx_complete(err)
        }
      })
    })
  }

}