export default function(UC_JSON, wx_object) {
  let uni_object = {
    props:{},
    mounted() {
      this.data = this.$data;
      if(wx_object.lifetimes && wx_object.lifetimes.attached){
        wx_object.lifetimes.attached.call(this);
      }
      if (wx_object["attached"]) {
        wx_object["attached"].call(this );
      }
    },
    destroyed() {
      if(wx_object.lifetimes && wx_object.lifetimes.attadetachedched){
        wx_object.lifetimes.detached.call(this);
      }
      if (wx_object["detached"]) {
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
    if (wx_object.data) {
      uni_object.data = () => {
        return wx_object.data;
      };
    }
    if(wx_object.properties){
      for (const key of Object.keys(wx_object.properties)) {
        const property = wx_object.properties[key];
        const prop = {
          type:property.type
        }
        if(property.value){
          prop.default = property.value
        }
        uni_object.props[key] = prop;
      }
    }
    if(wx_object.methods){
    for (let key of Object.keys(wx_object.methods)) {
      let func = wx_object.methods[key];
      uni_object.methods[key] = func;
    }
  }
  return uni_object;
}