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
      uniCloud.getTempFileURL({
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