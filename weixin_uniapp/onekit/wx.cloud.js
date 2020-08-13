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
	field(definition) {

	}
}
class wx_cloud_command {
	geoNear(options) {

	}
	geoWithin(options) {

	}
	geoIntersects(options) {

	}
	eq(value) {
		return {
			$eq: value
		};
	}
	neq(value) {
		return {
			$ne: value
		};
	}
	lt(value) {
		return {
			$lt: value
		};
	}
	lte(value) {
		return {
			$lte: value
		};
	}
	gt(value) {
		return {
			$gt: value
		};
	}
	gte(value) {
		return {
			$gte: value
		};
	} in (value) {
		return {
			$in: value
		};
	}
	nin(value) {
		return {
			$nin: value
		};
	}
	and(value) {
		return {
			$and: value
		};
	}
	or(value) {
		return {
			$or: value
		};
	}
	set(value) {
		return {
			$set: value
		};
	}
	remove() {

	}
	inc(value) {
		return {
			$inc: value
		};
	}
	mul(value) {
		return {
			$mul: value
		};
	}
	push(value) {
		return {
			$push: value
		};
	}
	pop(value) {
		return {
			$pop: value
		};
	}
	shift(value) {
		return {
			$shift: value
		};
	}
	unshift(value) {
		return {
			$unshift: value
		};
	}
}
class wx_cloud_engine {

}
