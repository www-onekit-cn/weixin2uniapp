export default class wx_cloud {

	init(options) {
		/*
		basement.user.getInfo().then(user => {
		  wx_cloud._openid = user.userId
		}).catch(console.error);
		*/
	}
	database(options) {
		return
	}
	callFunction(options) {
		return
	}
	uploadFile(options) {

	}
	getTempFileURL(options) {

	}
	deleteFile(options) {}
}
///////////////////////// database ///////////////////////
class wx_cloud_database {
	constructor(env) {}
	collection(collectionName) {}
	RegExp(initOptions) {
	}
	serverDate(options) {

	}
	get Decoder() {}
	set Decoder(Decoder) {}
	get QuerySerializer() {}
	set QuerySerializer(QuerySerializer) {}
	get UpdateSerializer() {}
	set UpdateSerializer(UpdateSerializer) {}
}

class wx_cloud_geo {
	Point(longitude, latitude) {

	}
	LineString() {

	}
	Polygon() {

	}
	MultiLineString() {

	}
	MultiPolygon() {

	}
}
class wx_cloud_query {
	constructor(collectionName, database, _query, _field) {}
	orderBy(fieldName, order) {

	}
	limit(number) {

	}
	skip(number) {}
	count(options) {

	}
	field(definition) {

	}
	get(options) {}
}
class wx_cloud_collection {
	constructor(database, collectionName) {}
	doc(id) {

	}
	where(rule) {

	}
	add(options) {}
	orderBy(fieldName, order) {}
	limit(number) {
	}
	skip(number) {
	}
	field(definition) {
	}
	get(options) {}
}
class wx_cloud_document {
	constructor(collection, database, _field, id) {}
	get(options) {}
	update(options) {}
	set(options) {}
	remove(options) {}
	field(definition) {}
}
class wx_cloud_command {
	geoNear(options) {
	}
	geoWithin(options) {
	}
	geoIntersects(options) {
	}
	eq(value) {
	}
	neq(value) {
	}
	lt(value) {
	}
	lte(value) {
	}
	gt(value) {
	}
	gte(value) {
	} 
	in (value) {
	}
	nin(value) {
	}
	and(value) {
	}
	or(value) {
	}
	set(value) {
	}
	remove() {
	}
	inc(value) {
	}
	mul(value) {
	}
	push(value) {
	}
	pop(value) {
	}
	shift(value) {
	}
	unshift(value) {
		
	}
}
class wx_cloud_engine {

}
