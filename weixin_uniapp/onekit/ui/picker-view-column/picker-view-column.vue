<template>
	<picker-view-column
		:class="['onekit-picker-view-column',onekitClass]"
		:style="onekitStyle"
		:id="id_"
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
			id_:{
				type:String,
				defaul:''
			},
		},
		methods:{},
	}
</script>

<style>
</style>
