<template>
	<view>
		<live-player
			:src="src"
			:mode="mode"
			:autoplay="autoplay"
			:muted="muted"
			:orientation="orientation"
			:object-fit="objectFit"
			:background-mute="backgroundMute"
			:min-cache="minCache"
			:max-cache="maxCache"
			:sound-mode="soundMode"
			:picture-in-picture-mode="pictureInPictureMode"
			@statechang="live_statechang"
			@netstatus="live_netstatus"
			@fullscreenchange="live_fullscreenchange"
			@audiovolumenotify="live_audiovolumenotify"
			@enterpictureinpicture="live_enterpictureinpicture"
			@leavepictureinpicture="live_leavepictureinpicture"
		
		
		>
			
		</live-player>
	</view>
</template>

<script>
	export default {
		
		props: {
			src:{
				type:String,
				default: ""
			},
			mode:{
				type:String,
				default: "live"
			},
			autoplay:{
				type: Boolean,
				default: false
			},
			muted:{
				type: Boolean,
				default: false
			},
			orientation:{
				type:String,
				default: "vertical"
			},
			objectFit:{
				type:String,
				default: "contain"
			},
			backgroundMute:{
				type: Boolean,
				default: false
			},
			minCache:{
				type:Number,
				default: 1
			},
			maxCache:{
				type:Number,
				default: 3
			},
			soundMode:{
				type:String,
				default: "speaker"
			},
			pictureInPictureMode:{
				type:String,
				default: ""
			},
		  },
		  methods:{
		  	live_statechang(e){
		  	        console.log("live-player state change",e)
		  	        this.$emit('statechang',e.details)
		  	       }, 
			live_netstatus(e){
			        console.log("live-player net status change",e)
			        this.$emit('netstatus',e.details)
			       }, 
			live_fullscreenchange(e){
			        console.log("live-player fullscreen change",e)
			        this.$emit('fullscreenchange',e.details)
			       }, 
			live_audiovolumenotify(e){
			        console.log("live-player audiovolumenotify",e)
			        this.$emit('audiovolumenotify',e.details)
			       }, 	 
			live_enterpictureinpicture(e){
			        console.log("live-player enterpictureinpicture",e)
			        this.$emit('enterpictureinpicture',e.details)
			       }, 	  
			live_leavepictureinpicture(e){
			        console.log("live-player leavepictureinpicture",e)
			        this.$emit('leavepictureinpicture',e.details)
			       }, 		
		  },
	
	}
</script>

<style>
</style>
