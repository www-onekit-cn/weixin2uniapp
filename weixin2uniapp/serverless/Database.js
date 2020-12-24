/*
 * @Autor: YeWei Wang
 * @Date: 2020-12-24 13:47:23
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2020-12-24 14:12:54
 * @Version: 1.0
 * @FilePath: \weixin2uniapp\weixin2uniapp\serverless\Database.js
 */
import Collection from './Collection'
export default class Database{
  constructor(){
    this.THIS = uniCloud.database()
  }
  collection(name){
    return new Collection(this,name)
  }
}