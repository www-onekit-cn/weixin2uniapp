<template>
	<view>
	
	 <onekit-audio 
	 style="text-align: left" 
	 :src="current.src" 
	 :poster="current.poster"
	 :name="current.name" 
	 :author="current.author" 
	 :action="audioAction" 
	 controls
	 @play="audioPlay"/>
	  
	 </view>
</template>

<script>
	export default {
	    data() {
	        return {
	            current: {
	                 poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
	                 name: '此时此刻',
	                 author: '许巍',
	                 src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3',
	            },
	            audioAction: {
	                method: 'pause'
	            }
	        }
			},
			methods: {
			        audioPlay: function() {
			            console.log("audio播放成功")
			        }
			    }
	    }
		
</script>
	
<style>
</style>
