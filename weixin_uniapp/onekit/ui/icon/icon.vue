<template>
		<icon class="onekit-icon"
			:type="type"
			:size="size"
			:color="color"
		>
		<slot />
		</icon>

</template>

<script>
	export default {
		props:{
			type:{
				type:String,
				default: ""
			},
			size:{
				type:Number/String,
				default: 23/""
			},
			color:{
				type:String,
				default: ""
			}
		}
	}
</script>

<style>

</style>
