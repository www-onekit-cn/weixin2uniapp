export default class Collection{
  constructor(db,name){
    this.THIS = db.THIS.collection(name)
  }
  get(wx_object){
    let wx_success,wx_fail,wx_complete
    if(wx_object){
       wx_success = wx_object.success
       wx_fail = wx_object.fail
       wx_complete = wx_object.complete
    }
    wx_object = null
    //////////////////////
    return new Promise((wx_resolve,wx_reject)=>{
      this.THIS.get().then(({result})=>{
        const wx_res = {
          errMsg: "collection.get:ok",
          data:result.data
        }
        wx_resolve(wx_res)
        if(wx_success){ wx_success(wx_res) }
        if(wx_complete){ wx_complete(wx_res) }
      }).catch((uni_err)=>{
        const wx_err = {
          errMsg:uni_err
        }
        wx_reject(wx_err)
        if(wx_fail){ wx_fail(wx_err) }
        if(wx_complete){ wx_complete(wx_err) }
      })
    })
  }
}