export default class Geo {
  constructor(uni_database) {
    this.THIS = uni_database
  }

  Point(longitude, latitude) {
    return new this.THIS.Point(longitude, latitude)
  }

  LineString(wx_points) {
    const res = new this.THIS.LineString(wx_points)
    const uni_points = res.param[0].map(res => res.param)
    let arrRes = {}
    let longtitude = []
    let latitude = []


    for(let i in uni_points) {
      longtitude.push(uni_points[i][i-1])
      latitude.push(uni_points[i][i+1])
    }

    return new this.THIS.LineString(wx_points)
  }
}