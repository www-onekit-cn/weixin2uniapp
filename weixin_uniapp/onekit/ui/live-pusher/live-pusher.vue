<template>
	<view>
		<live-pusher
			:url="url"
			:mode="mode"
			:muted="muted"
			:enable-camera	="enableCamera"
			:auto-focus="autoFocus"
			:orientation="orientation"
			:beauty="beauty"
			:whiteness="whiteness"
			:aspect="aspect"
			:min-bitrate="minBitrate"
			:max-bitrate="maxBitrate"
			:audio-quality="audioQuality"
			:waiting-image="waitingImage"
			:waiting-image-hash="waitingImageHash"
			:zoom="zoom"
			:device-position="devicePosition"
			:background-mute="backgroundMute"
			:remote-mirror="remoteMirror"
			:local-mirror="localMirror"
			:audio-reverb-type="audioReverbType"
			:enable-mic="enableMic"
			:enable-agc="enableAgc"
			:enable-ans="enableAns"
			:audio-volume-type="audioVolumeType"
			@statechang="live_pusher_statechang"
			@netstatus="live_pusher_netstatus"
			@error="live_pusher_error"
			@bgmstart="live_pusher_bgmstart"
			@bgmprogress="live_pusher_bgmprogress"
			@bgmcomplete="live_pusher_bgmcomplete"
		>
			
		</live-pusher>
	</view>
</template>

<script>
	export default {
		
		props: {
			url:{
				type:String,
				default: ""
			},
			mode:{
				type:String,
				default: "RTC"
			},
			autoplay:{
				type: Boolean,
				default: false
			},
			muted:{
				type: Boolean,
				default: false
			},
			enableCamera:{
				type:Boolean,
				default: true
			},
			autoFocus:{
				type:Boolean,
				default: true
			},
			orientation:{
				type: String,
				default: "vertical"	
			},
			beauty:{
				type:Number,
				default: 0
			},
			whiteness:{
				type:Number,
				default: 0
			},
			aspect:{
				type:String,
				default: "9:16"
			},
			minBitrate:{
				type:Number,
				default: 200
			},
			maxBitrate:{
				type:Number,
				default: 1000
			},
			audioQuality:{
				type:String,
				default: "high"
			},
			waitingImage:{
				type:String,
				default: ""
			},
			zoom:{
				type:Boolean,
				default: false
			},
			devicePosition:{
				type:String,
				default: "front"
			},
			backgroundMute:{
				type:Boolean,
				default: false
			},
			remoteMirror:{
				type:Boolean,
				default: false
			},
			localMirror:{
				type:String,
				default: "auto"
			},
			audioReverbType:{
				type:Number,
				default: 0
			},
			enableMic:{
				type:Boolean,
				default: true
			},
			enableAgc:{
				type:Boolean,
				default: false
			},
			enableAns:{
				type:Boolean,
				default: false
			},
			audioVolumeType:{
				type:String,
				default: "auto"
			},
		  },
		  methods:{
		  	live_pusher_statechang(e){
		  	        console.log("live pusher state chang",e)
		  	        this.$emit('statechang',e.details)
		  	       }, 
			live_pusher_netstatus(e){
			        console.log("live pusher netstatus",e)
			        this.$emit('netstatus',e.details)
			       }, 
			live_pusher_error(e){
			        console.log("live pusher error",e)
			        this.$emit('error',e.details)
			       }, 
			live_pusher_bgmstart(e){
			        console.log("live pusher bgmstart",e)
			        this.$emit('bgmstart',e.details)
			       }, 	 
			live_pusher_bgmprogress(e){
			        console.log("live pusher bgmprogress",e)
			        this.$emit('bgmprogress',e.details)
			       }, 	  
			live_pusher_bgmcomplete(e){
			        console.log("live pusher bgmcomplete",e)
			        this.$emit('bgmcomplete',e.details)
			       }, 		
		  },
	
	}
</script>

<style>
</style>
