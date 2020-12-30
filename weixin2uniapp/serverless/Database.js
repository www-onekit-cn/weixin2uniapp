import Collection from './Collection'
import Geo from './Geo'
export default class Database {
  constructor(uni_database) {
    this.THIS = uni_database
  }
  collection(name) {
    return new Collection(this.THIS.collection(name))
  }

  get command() {
    return this.THIS.command
  }

  get Transaction() {
    return this.THIS.Transaction
  }

  get Geo() {
    return new Geo(this.THIS.Geo)
  }

}