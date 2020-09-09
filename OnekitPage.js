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
		},
		onLoad(){
			if(this.onLoad){
				this.onLoad.apply(this);
			}
		},
		onShow(){
			if(this.onShow){
				this.onShow.apply(this);
			}
		},
		onReady(){
			if(this.onReady){
				this.onReady.apply(this);
			}
		},
		onHide(){
			if(this.onHide){
				this.onHide.apply(this);
			}
		},
		onUnload(){
			if(this.onUnload){
				this.onUnload.apply(this);
			}
		},
		onResize(){
			if(this.onResize){
				this.onResize.apply(this);
			}
		},
		onPullDownRefresh(){
			if(this.onPullDownRefresh){
				this.onPullDownRefresh.apply(this);
			}
		},
		onReachBottom(){
			if(this.onReachBottom){
				this.onReachBottom.apply(this);
			}
		},
		onTabItemTap(){
			if(this.onTabItemTap){
				this.onTabItemTap.apply(this);
			}
		},
		onShareAppMessage(){
			if(this.onShareAppMessage){
				this.onShareAppMessage.apply(this);
			}
		},
		onPageScroll(){
			if(this.onPageScroll){
				this.onPageScroll.apply(this);
			}
		},
		onNavigationBarButtonTap(){
			if(this.onNavigationBarButtonTap){
				this.onNavigationBarButtonTap.apply(this);
			}
		},
		onBackPress(){
			if(this.onBackPress){
				this.onBackPress.apply(this);
			}
		},
		onNavigationBarSearchInputChanged(){
			if(this.onNavigationBarSearchInputChanged){
				this.onNavigationBarSearchInputChanged.apply(this);
			}
		},
		onNavigationBarSearchInputConfirmed(){
			if(this.onNavigationBarSearchInputConfirmed){
				this.onNavigationBarSearchInputConfirmed.apply(this);
			}
		},
		onNavigationBarSearchInputClicked(){
			if(this.onNavigationBarSearchInputClicked){
				this.onNavigationBarSearchInputClicked.apply(this);
			}
		},
		onShareTimeline(){
			if(this.onShareTimeline){
				this.onShareTimeline.apply(this);
			}
		},
		onAddToFavorites(){
			if(this.onAddToFavorites){
				this.onAddToFavorites.apply(this);
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