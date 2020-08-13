export default function(options){
	const _data = options.data || {};
	const uniapp_options = {
		created(){
			Object.defineProperty(this, 'data', {
			  get: function () {
			    return _data;
			  },
			  set: function (data) {
			    _data = data;
			  }
			});
			this.setData(_data);
			if(this.onLoad){
				this.onLoad.apply(this);
			}
		},
		methods:{
			setData(data){
				for(const key of Object.keys(data)){
					this[key] = data[key];
					_data[key] = data[key];
				}
			}
		}
	};
	for(const key of Object.keys(options)){
		const value = options[key];
		switch(key){
			case "data":
				break;
			default:
			if(typeof(value)=="function" ){
				uniapp_options.methods[key] = value;
			}else{
				uniapp_options[key] = value;
				}
				break;
		}
	}
	return uniapp_options;
}