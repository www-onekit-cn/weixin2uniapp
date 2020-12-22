<template>
	<form
		:class="['onekit-form',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
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
			onekitClass:{
				type:String,
				default:''
			},
			onekitId:{
				type:String,
				default:''
			},
			onekitStyle:{
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
