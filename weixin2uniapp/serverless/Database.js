import Collection from './Collection'
export default class Database{
  constructor(){
    this.THIS = uniCloud.database()
  }
  collection(name){
    return new Collection(this,name)
  }
}