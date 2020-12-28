import Collection from './Collection'
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
}