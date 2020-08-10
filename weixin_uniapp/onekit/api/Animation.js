export default class Animation {
	constructor(uniappAnimation) {
		this.uniappAnimation = uniappAnimation;
	}
	matrix(){
		return this.uniappAnimation.matrix()
	}
	matrix3d(){
		return this.uniappAnimation.matrix3d()()
	}
	opacity(value){
		return this.uniappAnimation.opacity(value)
	}
	right(value){
		return this.uniappAnimation.right(length)
	}
	rotate(angle){
		return this.uniappAnimation.rotate(deg)
	}
	rotate3d(x,y,z,angle){
		return this.uniappAnimation.rotate3d(x,y,z,angle)
	}
	rotateX(angle){
		return this.uniappAnimation.rotateX(deg)
	}
	rotateY(angle){
		return this.uniappAnimation.rotateY(deg)
	}
	rotateZ(){
		return this.uniappAnimation.rotateZ(deg)
	}
	scale(sx,sy){
		return this.uniappAnimation.scale(sx,sy)
	}
	scale3d(sx,sy,sz){
		return this.uniappAnimation.scale3d(sx,sy,sz)
	}
	scaleX(scale){
		return this.uniappAnimation.scaleX(scale)
	}
	scaleY(scale){
		return this.uniappAnimation.scaleY(scale)
	}
	scaleZ(scale){
		return this.uniappAnimation.scaleZ(scale)
	}
	skew(ax,ay){
		return this.uniappAnimation.skew(ax,ay)
	}
	skewX(angle){
		return this.uniappAnimation.skewX(angle)
	}
	skewY(angle){
		return this.uniappAnimation.skewY(angle)
	}
	step(object){
		return this.uniappAnimation.step(object)
	}
	top(value){
		return this.uniappAnimation.top(length)
	}
	translate(tx,ty){
		return this.uniappAnimation.translate(tx,ty)
	}
	translate3d(tx,ty,tz){
		return this.uniappAnimation.translate3d(tx,ty,tz)
	}
	translateX(translation){
		return this.uniappAnimation.translateX(tx)
	}
	translateY(translation){
		return this.uniappAnimation.translateY(ty)
	}
	translateZ(translation){
		return this.uniappAnimation.translateZ(tz)
	}
	width(value){
		return this.uniappAnimation.width(length)
	}
	bottom(value){
		return this.uniappAnimation.bottom(length)
	}
	export(object){
		return this.uniappAnimation.export(object)
	}
	backgroundColor(value){
		return this.uniappAnimation.backgroundColor(color)
	}
	height(value){
		return this.uniappAnimation.height(length)
	}
	left(value){
		return this.uniappAnimation.left(length)
	}
	
	
	
	
	
	
	
}
