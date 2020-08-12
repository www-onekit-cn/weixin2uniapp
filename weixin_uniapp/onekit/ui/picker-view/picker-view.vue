<template>
	<picker-view
		:class="['onekit-picker-view',class_]"
		:style="style_"
		:value="value"
		:indicator-style="indicatorStyle"
		:indicator-class="indicatorClass"
		:mask-style="maskStyle"
		:mask-class="maskClass"
		@change="picker_view_change"
		@pickstart="picker_view_pickstart"
		@pickend="picker_view_pickend"
	
	
	
	>
		<slot/>
	</picker-view>
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
				value:{
					type:Array,
					default:"",
				},
				indicatorStyle:{
					type:String,
					default:"",
				},
				indicatorClass:{
					type:String,
					default:"",
				},
				maskStyle:{
					type:String,
					default:"",
				},
				maskClass:{
					type:String,
					default:"",
				},
		},
		methods:{
				picker_view_change(e){
				        console.log("picker_view_change",e)
				        this.$emit('change',e)
				       }, 
				picker_view_pickstart(e){
				        console.log("picker_view_pickstart",e)
				        this.$emit('pickstart',e)
				       }, 
				picker_view_pickend(e){
				        console.log("picker_view_pickend",e)
				        this.$emit('pickend',e)
				       }, 
				
		}
	}
</script>

<style>
</style>
