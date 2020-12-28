import Database from './Database'
export default class wx_cloud {
  static init(wx_options){
    const env = wx_options.env
    const traceUser = wx_options.traceUser || false
    wx_options = null
    /////////////////////
    this.env = env // 并不支持
    this.traceUser = traceUser
  }

  static database () {
    let wx_database = this.wx_database
    if(!wx_database){
      wx_database = new Database()
      this.wx_database = wx_database
    }
    return wx_database
  }

}