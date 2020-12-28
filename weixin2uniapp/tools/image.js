export default class TheKit {
  static compressImg(img, type, mx, mh) {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      const {
        width: originWidth,
        height: originHeight
      } = img
      const maxWidth = mx
      const maxHeight = mh
      let targetWidth = originWidth
      let targetHeight = originHeight
      if (originWidth > maxWidth || originHeight > maxHeight) {
        if (originWidth / originHeight > 1) {
          targetWidth = maxWidth
          targetHeight = Math.round(maxWidth * (originHeight / originWidth))
        } else {
          targetHeight = maxHeight
          targetWidth = Math.round(maxHeight * (originWidth / originHeight))
        }
      }
      canvas.width = targetWidth
      canvas.height = targetHeight
      context.clearRect(0, 0, targetWidth, targetHeight)
      context.drawImage(img, 0, 0, targetWidth, targetHeight)
      canvas.toBlob(function (blob) {
        resolve(blob)
      }, type || 'image/png')
    })
    /*
      @create by wangyewei 
    */
  }
  
  static downloadPicture(file, name) {
    const _image = new Image()
    _image.setAttribute("crossOrigin", 'Anonymous')
    _image.onload = () => {
      let canvas = document.createElement('canvas')
      canvas.width = _image.width
      canvas.height = _image.height
      let context = canvas.getContext('2d')
      context.drawImage(_image, 0, 0, _image.width, _image.height)
      const url = canvas.toDataURL('image/png')
      const $a = document.createElement('a')
      const event = new MouseEvent('click')
      $a.download = name
      $a.href = url
      $a.dispatchEvent(event)
    }
    _image.src = file
    /*
      @create by wangyewei 
    */
  
  }
  
  static blobToBase64(blob, callback) {
    let a = new FileReader();
    a.onload = function (e) {
      callback(e.target.result)
    }
    a.readAsDataURL(blob)
  
    /*
      @create by wangyewei 
    */
  }
  
  static getBase64Image(img) {
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    const ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    const dataURL = canvas.toDataURL("image/" + ext);
  
    return dataURL;
  }
  
  static fileBtof(data, fileName) {
    const dataArr = data.split(",");
    const byteString = atob(dataArr[1]);
  
    const options = {
      type: "image/jpeg",
      endings: "native"
    };
    const u8Arr = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      u8Arr[i] = byteString.charCodeAt(i);
    }
    return new File([u8Arr], fileName + ".jpg", options);
  }
  
  static async dealImage(base64, w, quality, callback) {
    var newImage = new Image();
    newImage.src = base64;
    newImage.setAttribute("crossOrigin", 'Anonymous'); //url为外域时需要
    var imgWidth, imgHeight;
    newImage.onload = function () {
      imgWidth = this.width;
      imgHeight = this.height;
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      if (Math.max(imgWidth, imgHeight) > w) {
        if (imgWidth > imgHeight) {
          canvas.width = w
          canvas.height = w * imgHeight / imgWidth
        } else {
          canvas.height = w
          canvas.width = w * imgWidth / imgHeight
        }
      } else {
        canvas.width = imgWidth
        canvas.height = imgHeight
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(this, 0, 0, canvas.width, canvas.height)
      var base64 = canvas.toDataURL("image/jpeg", quality)
      callback(base64)
    }
  }
}