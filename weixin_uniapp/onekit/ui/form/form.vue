<template>
	<form
		:class="['onekit-form',class_]"
		:style="style_"
		:report-submit="reportSubmit"
		:report-submit-timeout="reportSubmitTimeout"
		:bindsubmit="bind_submit"
		:bindreset="bind_reset"
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
			bind_submit(e){
				console.log("bindsubmit success",e)
				this.$emit('submit',e.details)
			},
			bind_reset(e){
				console.log("bindreset success",e)
				this.$emit('reset',e.details)
			}
		}
	}
</script>

<style>

</style>
