<template>
	<view>
		<video
			:class="['onekit-video',onekitClass]"
			:style="onekitStyle"
			:id="onekitId"
			:src="src"
			:duration="duration" 
			:controls="controls" 
			:danmu-list="danmuList" 
			:danmu-btn="danmuBtn" 
			:enable-danmu="enableDanmu" 
			:autoplay="autoplay" 
			:loop="loop" 
			:muted="muted" 
			:initial-time="initialTime" 
			:page-gesture="pageGesture" 
			:direction="direction" 
			:show-fullscreen-btn="showFullscreenBtn" 
			:show-play-btn="showPlayBtn" 
			:show-center-play-btn="showCenterPlayBtn" 
			:show-progress="showProgress" 
			:enable-progress-gesture="enableProgressGesture" 
			:poster="poster" 
			:show-mute-btn="showMuteBtn" 
			:title="title" 
			:enable-play-gesture="enablePlayGesture" 
			:vslide-gesture="pageGesture" 
			:vslide-gesture-in-fullscreen="vslideGestureInFullscreen" 
			:ad-unit-id="adUnitId"
			:poster-for-crawler="posterForCrawler"	
			
			@play="video_play"
			@pause="video_pause"
			@ended ="video_ended"
			@timeupdate="video_timeupdate"
			@fullscreenchange="video_fullscreenchang"
			@waiting ="video_waiting"
			@error="video_error"
			@progress="video_progress"
			@loadedmetadata="video_loadedmetadata"
			@controlstoggle="video_controlstoggle"
		>
			
		</video>
	</view>
</template>

<script>
	export default {
		
		props: {
			onekitClass:{
				type:String,
				default:''
			},
			onekitStyle:{
				type:String,
				defaul:''
			},
			onekitId:{
				type:String,
				defaul:''
			},
					src:{
			            type: String,
			            value: "",
			        },
			        
			        duration:{
			            type: Number,
			            value: "",
			        },
			        controls:{
			            type: Boolean,
			            value: false,
			        },
			        danmuList:{
			            type: Array,
			            value: "",
			        },
			
			        danmuBtn:{
			            type: Boolean,
			            value: false,
			        },
			        enableBanmu:{
			            type: Boolean,
			            value: false,
			        },
			        autoplay:{
			            type: Boolean,
			            value: false,
			        },
			        loop:{
			            type: Boolean,
			            value: false,
			        },
			        muted:{
			            type: Boolean,
			            value: false,
			        },
			        initialTime:{
			            type: Number,
			            value: '0',
			        },
			        pageGesture:{
			            type: Boolean,
			            value: false,
			        },
			        direction:{
			            type: Number,
			            value: "",
			        },
			        showProgress:{
			            type: Boolean,
			            value: true,
			        },
			        showFullscreenBtn:{
			            type: Boolean,
			            value: true,
			        },
			
			        showPlayBtn:{
			            type: Boolean,
			            value: true,
			        },
			        showCenterPlayBtn:{
			            type: Boolean,
			            value: true,
			        },
			        enableProgressGesture:{
			            type: Boolean,
			            value: true,
			        },
			        poster:{
			            type: String,
			            value: "",
			        },
			        showMuteBtn:{
			            type: Boolean,
			            value:false,
			        },
			        title:{
			            type: String,
			            value: "",
			        },
			        enablePlayGesture:{
			            type: Boolean,
			            value:false,
			        },
			        pageGesture:{
			            type: Boolean,
			            value:false,
			        },
			        vslideGestureInFullscreen:{
			            type: Boolean,
			            value:true,
			        },
			        enableDanmu:{
						type: Boolean,
						value:false,
			        },
			        adUnitId:{
			            type: String,
			            value:"",
			        },
			        posterForCrawler:{
			            type: String,
			            value:"",
			        },
		  },
		  methods:{
			video_play(e){
			    console.log("video_play", e);
			     this.$emit('play',e.details)
			    },
			    video_pause(e){
			    console.log("video_pause", e);
			     this.$emit('pause',e.details)
			    },
			    video_ended(e){
			    console.log("video_ended", e);
			     this.$emit('ended',e.details)
			    },
			    video_timeupdate(e){
			    console.log("video_timeupdate", e);
			     this.$emit('timeupdate',e.details)
			    },
			    video_fullscreenchang(e){
			    console.log("video_fullscreenchang", e);
			     this.$emit('fullscreenchang',e.details)
			    },
			    video_waiting(e){
			    console.log("video_waiting", e);
			     this.$emit('waiting',e.details)
			    },
			    video_error(e){
			    console.log("video_error", e);
			     this.$emit('error',e.details)
			    },
			    video_loadedmetadata(e){
			    console.log("video_loadedmetadata", e);
			     this.$emit('loadedmetadata',e.details)
			    },
			    video_progress(e){
			    console.log("video_progress", e);
			     this.$emit('progress',e.details)
			    },
			    video_controlstoggle(e){
			    console.log("video_controlstoggle", e);
			     this.$emit('controlstoggle',e.details)
			    },
		  },
	
	}
</script>

<style>
</style>
