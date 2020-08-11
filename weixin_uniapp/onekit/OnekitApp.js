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
		switch(key){
			
		}
	}
	return uniapp_options;
}