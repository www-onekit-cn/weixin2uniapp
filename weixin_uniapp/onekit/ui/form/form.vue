<template>
	<form
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
