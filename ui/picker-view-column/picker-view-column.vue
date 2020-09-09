<template>
	<picker-view-column
		:class="['onekit-picker-view-column',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
	>
		<slot/>
	</picker-view-column>
</template>

<script>
	export default{
		behaviors: ['uni://form-field'],
		props:{
			onekitClass:{
				type:String,
				default:''
			},
			onekitId:{
				type:String,
				defaul:''
			},
		},
		methods:{},
	}
</script>

<style>
</style>
