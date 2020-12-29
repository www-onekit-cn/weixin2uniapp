export default class Aggregate {
   
  constructor(uni_aggregate) {
    this.THIS = uni_aggregate
  }
  
  addFields(object) {
    return new Aggregate(this.THIS.addFields(object))
  }

  bucket(object) {
    return new Aggregate(this.THIS.bucket(object))
  }

  bucketAuto(object) {
    return new Aggregate(this.THIS.bucketAuto(object))
  }


  count(fieldName) {
    return new Aggregate(this.THIS.count(fieldName))
  }


  geoNear(object) {
    return new Aggregate(this.THIS.geoNear(object))
  }

  group(object) {
    return new Aggregate(this.THIS.group(object))
  }

  limit(object) {
    return new Aggregate(this.THIS.limit(object))
  }

  lookup (object) {
    return new Aggregate(this.THIS.lookup (object))
  }

  replaceRoot(object) {
    return new Aggregate(this.THIS.replaceRoot(object))
  }

  sample(object) {
    return new Aggregate(this.THIS.sample(object))
  }

  skip(object) {
    return new Aggregate(this.THIS.skip(object))
  }

  sort(object) {
    return new Aggregate(this.THIS.sort(object))
  }

  sortByCount(object) {
    return new Aggregate(this.THIS.sortByCount(object))
  }

  unwind(object) {
    return new Aggregate(this.THIS.unwind(object))
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
          errMsg: "collection.aggregate:ok",
          list: result.data
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