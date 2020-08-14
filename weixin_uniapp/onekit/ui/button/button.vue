<template>
	<button
		:class="['onekit-button',class_]"
		:style="style_"
		:id="id_"
		:size="size"
		:type="type"
		:plain="plain"
		:disabled="disabled"
		:loading="loading"
		:form-type="formType"
		:open-type="openType"
		:hover-class="hoverClass"
		:hover-stop-propagation="hoverStopPropagation"	
		:hover-start-time="hoverStartTime"	
		:hover-stay-time="hoverStayTime"	
		:lang="lang"
		:session-from="sessionFrom"
		:send-message-title="sendMessageTitle"
		:send-message-path="sendMessagePath"
		:send-message-img="sendMessageImg"
		:app-parameter="appParameter"
		:show-message-card="showMessageCard"
		
		@getphonenumber="button_getphonenumber"
		@getuserinfo="button_getuserinfo"	
		@opensetting="button_opensetting"	
		@launchapp="button_launchapp"	
		
		
		
	>
		<slot/>
	</button>
</template>

<script>
	export default {
		
		props: {
			class_:{
				type:String,
				default:''
			},
			style_:{
				type:String,
				defaul:''
			},
			id_:{
				type:String,
				defaul:''
			},
			size:{
				type:String,
				default: "default"
			},
			type:{
				type:String,
				default: "default"
			},
			plain:{
				type: Boolean,
				default: false
			},
			disabled:{
				type:Boolean,
				default:false
			},
			loading:{
				type: Boolean,
				default: false
			},
			formType:{
				type:String,
				default: ""
			},
			openType:{
				type:String,
				default: ""
			},
			hoverClass:{
				type:String,
				default: "button-hover"
			},
			hoverStopPropagation:{
				type: Boolean,
				default: false
			},
			hoverStartTime:{
				type:Number,
				default: 20
			},
			hoverStayTime:{
				type:Number,
				default: 70
			},
			lang:{
				type:String,
				default: "en"
			},
			sessionFrom:{
				type:String,
				default: ""
			},
			sendMessageTitle:{
				type:String,
				default: "当前标题"
			},
			sendMessagePath:{
				type:String,
				default: "当前分享路径"
			},
			sendMessageImg:{
				type:String,
				default: "截图"
			},
			appParameter:{
				type:String,
				default: ""
			},
			showMessageCard:{
				type:Boolean,
				default: false
			},
		  },
		  methods:{
		  	button_getphonenumber(e){
		  	        console.log("button_getphonenumber",e)
		  	        this.$emit('getphonenumber',e)
		  	       }, 
			button_getuserinfo(e){
			        console.log("button_getuserinfo",e)
			        this.$emit('getuserinfo',e)
			       }, 
			button_opensetting(e){
			        console.log("button_opensetting",e)
			        this.$emit('opensetting',e)
			       }, 
			button_launchapp(e){
			        console.log("button_launchapp",e)
			        this.$emit('launchapp',e)
			       }, 	 
			   
		  },
	
	}
	
	
</script>

<style>
</style>
