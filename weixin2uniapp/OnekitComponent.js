export default function(UC_JSON, wx_object) {
  let uni_object = {
    onLoad(query) {
      this.data = this.$data;
      if(wx_object){
        for (let key of Object.keys(wx_object)) {
          let obj = wx_object[key];
          switch (key) {
            case "data":
            case "onLoad":
            case "onUnload":
            case "onReady":
            case "onShow":
            case "onHide":
              break;
            default:
              if(typeof(obj)!=='function'){
                this.data[key] = obj
              }
              break;
          }
        }
      }
      if(wx_object && wx_object.pageLifetimes && wx_object.pageLifetimes.attached){
        wx_object.pageLifetimes.attached.call(this);
      }
      if (wx_object && wx_object["attached"]) {
        wx_object["attached"].call(this );
      }
    },
    onUnload() {
      if(wx_object && wx_object.pageLifetimes && wx_object.pageLifetimes.attadetachedched){
        wx_object.pageLifetimes.detached.call(this);
      }
      if (wx_object && wx_object["detached"]) {
        wx_object["detached"].call(this);
      }
    },
    methods: {
      setData(data) {
        let that = this;
        this.$nextTick(() => {
          for (let k of Object.keys(data)) {
            that[k] = data[k];
          }
        });
      },
      animate(){
        
      }
    }
  };
  if (wx_object) {
    if (wx_object.data) {
      uni_object.data = () => {
        return wx_object.data;
      };
      for (let key of Object.keys(wx_object)) {
        let obj = wx_object[key];
        switch (key) {
          case "data":
          case "onLoad":
          case "onUnload":
          case "onReady":
          case "onShow":
          case "onHide":
            break;
          default:
            if(typeof(obj)==='function'){
              uni_object.methods[key] = obj;
            }
            break;
        }
      }
    }
  }
  return uni_object;
}