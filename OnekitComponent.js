export default function(options){
	const _data = options.data || {};
	const uniapp_options = {
		props:{},
		beforeCreate(){
			if(this.beforeCreate){
				this.beforeCreate(this);
			}
		},
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
		},
		beforeMount(){
			if(this.beforeMount){
				this.beforeMount.apply(this);
			}
		},
		mounted(){
			if(mounted){
				this.mounted.apply(this);
			}
		},
		beforeUpdate(){
			if(this.beforeUpdate){
				this.beforeUpdate.apply(this);
			}
		},
		updated(){
			if(this.updated){
				this.updated.apply(this);
			}
		},
		beforeDestroy(){
			if(this.beforeDestroy){
				this.beforeDestroy.apply(this);
			}
		},
		destroyed(){
			if(this.destroyed){
				this.destroyed.apply(this);
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
			case "properties":
				for(const k of Object.keys(value)){
						uniapp_options.prpos[k] = value[k];
					}
				}
				break;
			case "lifetime":
				for(const k of Object.keys(value)){
						uniapp_options.methods[k] = value[k];
					}
				}
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