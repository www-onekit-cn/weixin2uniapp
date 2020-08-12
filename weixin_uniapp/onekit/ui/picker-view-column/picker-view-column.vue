<template>
	<picker-view-column
		:class="['onekit-picker-view-column',class_]"
		:style="style_"
	>
		<slot/>
	</picker-view-column>
</template>

<script>
	export default{
		behaviors: ['uni://form-field'],
		props:{
			class_:{
				type:String,
				default:''
			},
			style_:{
				type:String,
				defaul:''
			},
		},
		methods:{},
	}
</script>

<style>
</style>
