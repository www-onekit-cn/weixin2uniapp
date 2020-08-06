<template>
	<audio
		:src="src"
		:id="Id"
		:loop="loop"
		:controls="controls"
		:poster="poster"
		:name="name"
		:author="author"
		
	/>

</template>

<script>
	export default {
		
		props: {
			src:{
				type:String,
				default: ''
			},
			Id:{
				type:String,
				default: ''
			},
			loop:{
				type: Boolean,
				default: false
			},
			controls:{
				type: Boolean,
				default: false
			},
			poster:{
				type:String,
				default: ''
			},
			name:{
				type:String,
				default: "未知音频"
			},
			author:{
				type:String,
				default: "未知作者"
			},
		            
		        },

	}
</script>

<style>
</style>
