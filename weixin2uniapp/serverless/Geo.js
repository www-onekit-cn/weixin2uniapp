export default class Geo {
  constructor(uni_database) {
    this.THIS = uni_database
    console.log(this.THIS)
  }

  Point(longitude, latitude) {
    console.log(longitude, latitude)
  }
}
