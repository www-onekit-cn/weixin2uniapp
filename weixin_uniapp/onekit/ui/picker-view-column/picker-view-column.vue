<template>
	<picker-view-column
		:class="['onekit-picker-view-column',class_]"
		:style="style_"
		:id="id_"
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
