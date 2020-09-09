export default class MapContext {
	constructor(uniMapContext) {
		this.uniMapContext = uniMapContext;
	}
	addCustomLayer(object) {
		return
	}
	getCenterLocation(object) {
		return this.uniMapContext.getCenterLocation(object)
	}
	getRegion(object) {
		return this.uniMapContext.getRegion(object)
	}
	getRotate(object) {
		return
	}
	getScale(object) {
		return this.uniMapContext.getScale(object)
	}
	getSkew(object) {
		return
	}
	includePoints(object) {
		return this.uniMapContext.includePoints(object)
	}
	moveToLocation(object) {
		return this.uniMapContext.moveToLocation(object)
	}
	removeCustomLayer() {
		return
	}
	setCenterOffset() {
		return
	}
	translateMarker(object) {
		return this.uniMapContext.translateMarker(object)
	}
}
