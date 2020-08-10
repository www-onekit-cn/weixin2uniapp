<template>
	<button
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
			size:{
				type:String,
				default: ""
			},
			type:{
				type:String,
				default: ""
			},
			plain:{
				type: Boolean,
				default: false
			},
			disabled:{
				type: Boolean,
				default: false
			},
			loading:{
				type:String,
				default: ""
			},
			formType:{
				type:String,
				default: "未知音频"
			},
			openType:{
				type:String,
				default: "未知作者"
			},
			hoverClass:{
				type:String,
				default: "未知作者"
			},
			hoverStopPropagation:{
				type:String,
				default: "未知作者"
			},
			hoverStartTime:{
				type:String,
				default: "未知作者"
			},
			hoverStayTime:{
				type:String,
				default: "未知作者"
			},
			lang:{
				type:String,
				default: "未知作者"
			},
			sessionFrom:{
				type:String,
				default: "未知作者"
			},
			sendMessageTitle:{
				type:String,
				default: "未知作者"
			},
			sendMessagePath:{
				type:String,
				default: "未知作者"
			},
			sendMessageImg:{
				type:String,
				default: "未知作者"
			},
			appParameter:{
				type:String,
				default: "未知作者"
			},
			showMessageCard:{
				type:String,
				default: "未知作者"
			},
		  },
		  methods:{
		  	button_getphonenumber(e){
		  	        console.log("button_getphonenumber",e)
		  	        this.$emit('getphonenumber',e.details)
		  	       }, 
			button_getuserinfo(e){
			        console.log("button_getuserinfo",e)
			        this.$emit('getuserinfo',e.details)
			       }, 
			button_opensetting(e){
			        console.log("button_opensetting",e)
			        this.$emit('opensetting',e.details)
			       }, 
			button_launchapp(e){
			        console.log("button_launchapp",e)
			        this.$emit('launchapp',e.details)
			       }, 	 
			   
		  },
	
	}
	
	
</script>

<style>
</style>
