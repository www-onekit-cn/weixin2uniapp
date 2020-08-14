<template>
	<radio
		:class="['onekit-radio',class_]"
		:style="style_"
		:id="id_"
		:value="value"
		:checked="checked"
		:disabled="disabled"
		:color="color"
	>
		<slot/>
	</radio>
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
			id_:{
				type:String,
				defaul:''
			},
			value:{
				type:String,
				default:"",
			},
			checked:{
				type:Boolean,
				default:null,
			},
			disabled:{
				type:Boolean,
				default:false,
			},
			color:{
				type:String,
				default:"#09BB07",
			},
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
