export default class Aggregate {
   
  constructor(uni_aggregate) {
    this.THIS = uni_aggregate
  }

  group(object) {
    return new Aggregate(this.THIS.group(object))
  }

  end(wx_object) {
    let wx_success, wx_fail, wx_complete
    if (wx_object) {
      wx_success = wx_object.success
      wx_fail = wx_object.fail
      wx_complete = wx_object.complete
    }
    wx_object = null
    //////////////////////
    return new Promise((wx_resolve, wx_reject) => {
      this.THIS.end().then(({
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
}