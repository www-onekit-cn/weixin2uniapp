export default class CanvasContext {
  constructor(uniCanvasContext) {
    this.uniCanvasContext = uniCanvasContext;
  }
  beginPath(a) {
    return this.uniCanvasContext.beginPath(a);
  }

  save() {
    return this.uniCanvasContext.save();
  }
  restore() {
    return this.uniCanvasContext.restore();
  }
  //
  setGlobalAlpha(alpha) {
    return this.uniCanvasContext.setGlobalAlpha(alpha);
  }
  setFillStyle(color) {
    return this.uniCanvasContext.setFillStyle(color);
  }
  setStrokeStyle(color) {
    return this.uniCanvasContext.setStrokeStyle(color);
  }
  setShadow(offsetX, offsetY, blur, color) {
    return this.uniCanvasContext.setShadow(offsetX, offsetY, blur, color);
  }
  setLineCap(lineCap) {
    return this.uniCanvasContext.setLineCap(lineCap);
  }
  setLineJoin(lineJoin) {
    return this.uniCanvasContext.setLineJoin(lineJoin);
  }
  setLineWidth(lineWidth) {
    return this.uniCanvasContext.setLineWidth(lineWidth);
  }
  setMiterLimit(miterLimit) {
    return this.uniCanvasContext.setMiterLimit(miterLimit);
  }
  setFontSize(fontSize) {
    return this.uniCanvasContext.setFontSize(fontSize);

  }
  rotate(rotate) {
    return this.uniCanvasContext.rotate(rotate);
  }
  scale(scaleWidth, scaleHeight) {
    return this.uniCanvasContext.scale(scaleWidth, scaleHeight);
  }
  translate(x, y) {
    return this.uniCanvasContext.translate(x, y);
  }
  moveTo(x, y) {
    return this.uniCanvasContext.moveTo(x, y);
  }
  lineTo(x, y) {
    return this.uniCanvasContext.lineTo(x, y);
  }
  closePath() {
    return this.uniCanvasContext.closePath();
  }
  fillText(text,x,y,maxWidth) {
    return this.uniCanvasContext.fillText(text,x,y);
  }
  drawImage(imageResource,sx,sy,sWidth,sHeight,dx,dy,dWidth,dHeight) {
    return this.uniCanvasContext.drawImage(imageResource,x,y,width,height);
  }
  arc(x,y,r,sAngle,eAngle,counterclockwise) {
    return this.uniCanvasContext.arc(x,y,r,sAngle,eAngle,counterclockwise);
  }
  quadraticCurveTo(cpx,cpy,x,y) {
    return this.uniCanvasContext.quadraticCurveTo(cpx,cpy,x,y);
  }
  bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y) {
    return this.uniCanvasContext.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
  }
  //
  rect(x, y, width, height) {
    return this.uniCanvasContext.rect(x, y, width, height);
  }
  //
  clearRect(x, y, width, height) {
    return this.uniCanvasContext.clearRect(x, y, width, height);
  }
  stroke() {
    return this.uniCanvasContext.stroke();
  }
  fill() {
    return this.uniCanvasContext.fill();
  }
  draw(reserve,callback) {
    return this.uniCanvasContext.draw(reserve,callback);
  }
  fillRect (x,y,width,height) {
    return this.uniCanvasContext.fillRect (x,y,width,height);
  }
  getActions() {
    return this.uniCanvasContext.getActions();
  }
}