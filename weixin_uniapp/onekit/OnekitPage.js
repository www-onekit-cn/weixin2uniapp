export default function(options){
	const uniapp_options = {
		data(){
			return options.data;
		},
		methods:{
			setData(data){
				for(const key of Object.keys(data)){
					this[key] = data[key];
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