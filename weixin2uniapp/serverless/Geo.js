export default class Geo {
  constructor(uni_database) {
    this.THIS = uni_database
  }

  Point(longitude, latitude) {
    // return new Geo(this.THIS.Geo(longitude, latitude))
    return new this.THIS.Point(longitude, latitude)
  }
}
