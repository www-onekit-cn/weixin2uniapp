export default function(PAGE_JSON, wx_object) {
  let uni_object = {
    data() {
      return {};
    },
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
      if (wx_object && wx_object["onLoad"]) {
        wx_object["onLoad"].call(this,query );
      }
    },
    onUnload() {
      if (wx_object && wx_object["onUnload"]) {
        wx_object["onUnload"].call(this);
      }
    },
    onReady() {
      if (wx_object && wx_object["onReady"]) {
        wx_object["onReady"].call(this);
      }
    },
    onShow() {
        if (wx_object && wx_object["onShow"]) {
          wx_object["onShow"].call(this);
        }
    },
    onHide() {
        if (wx_object && wx_object["onHide"]) {
          wx_object["onHide"].call(this);
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