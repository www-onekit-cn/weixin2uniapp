export default class Geo {
  constructor(uni_database) {
    this.THIS = uni_database
  }

  Point(longitude, latitude) {
    return new this.THIS.Point(longitude, latitude)
  }

  LineString(wx_points) {
    const res = new this.THIS.LineString(wx_points)
    const uni_params = res.param[0].map(res => res.param)
    let resultObj = {
      points: []
    }
    for (let key of uni_params) {
      const res = {
        st: {
          latitude: key[1],
          longtitud: key[0],
          _internalType: Symbol('GEO_POINT')
        }
      }
      resultObj.points.push(res)
    }
    resultObj._internalType = Symbol('Geo_POINT')
    return resultObj
  }

  Polygon(linestring) {
    const res = new this.THIS.Polygon(linestring)
    const result = {
      lines: res.param
    }
    return result
  }
}