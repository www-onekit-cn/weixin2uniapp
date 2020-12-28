export default class Aggregate {
   
  constructor(uni_collection) {
    this.THIS = uni_collection
  }

  group(wx_object) {
    return console.log('i am here')
    // return new Aggregate(this.THIS.group(wx_object))
  }

  end() {
    // return new Aggregate(this.THIS.end())
  }
}