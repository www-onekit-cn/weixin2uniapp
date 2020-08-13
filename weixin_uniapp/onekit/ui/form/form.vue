<template>
	<form
		:class="['onekit-form',class_]"
		:style="style_"
		:id="id_"
		:report-submit="reportSubmit"
		:report-submit-timeout="reportSubmitTimeout"
		@submit="form_submit"
		@reset="form_reset"
	>
	<slot />
	</form>
</template>

<script>
	export default {
		behaviors: ['uni://form-field'],
		props:{
			class_:{
				type:String,
				default:''
			},
			id_:{
				type:String,
				default:''
			},
			style_:{
				type:String,
				defaul:''
			},
			reportSubmit:{
				type:Boolean,
				default: false
			},
			reportSubmitTimeout:{
				type:Number,
				default: 0
			}
		},
		methods:{
			form_submit(e){
				this.$emit('submit',e)
			},
			form_reset(e){
				this.$emit('reset',e)
			}
		}
	}
</script>

<style>

</style>
