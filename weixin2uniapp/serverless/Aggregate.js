export default class Aggregate {
   
  constructor(uni_collection) {
    this.THIS = uni_collection
  }

  group(wx_object) {
    console.log('ok')
    return new Aggregate(this.THIS.group(wx_object))
  }

  end() {
    return new Aggregate(this.THIS.end())
  }
}