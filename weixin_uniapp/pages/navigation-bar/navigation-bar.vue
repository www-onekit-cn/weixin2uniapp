<template>
	<page-meta>
	  <onekit-navigation-bar
		:title="nbTitle"
		:loading="nbLoading"
		:front-color="nbFrontColor"
		:background-color="nbBackgroundColor"
		:color-animation-duration="2000"
		color-animation-timing-func="easeIn"
	  />
	</page-meta>
</template>

<script>
	export default {
		data() {
			return {
				nbFrontColor: '#000000',
				nbBackgroundColor: '#ffffff',
				nbTitle: '新标题',
				nbLoading: true,
				nbFrontColor: '#ffffff',
				nbBackgroundColor: '#000000',
			}
		}
	}
</script>

<style>

</style>

