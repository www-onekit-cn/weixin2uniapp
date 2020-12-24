/*
 * @Autor: YeWei Wang
 * @Date: 2020-12-23 15:04:16
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2020-12-24 14:14:46
 * @Version: 1.0
 * @FilePath: \weixin2uniapp\weixin2uniapp\serverless\wx.cloud.js
 */
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
