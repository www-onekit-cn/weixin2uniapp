<template>
	<onekit-page-meta
	  :background-text-style="bgTextStyle"
	  :background-color="bgColor"
	  :background-color-top="bgColorTop"
	  :background-color-bottom="bgColorBottom"
	  :scroll-top="scrollTop"
	  page-style="color: green"
	  root-font-size="16px"
	>
	  <onekit-navigation-bar
		:title="nbTitle"
		:loading="nbLoading"
		:front-color="nbFrontColor"
		:background-color="nbBackgroundColor"
	  />
	</onekit-page-meta>
</template>

<script>
	export default {
		data() {
			return {
				bgTextStyle: 'dark',
				scrollTop: '200rpx',
				bgColor: '#ff0000',
				bgColorTop: '#00ff00',
				bgColorBottom: '#0000ff',
				nbTitle: '标题',
				nbLoading: false,
				nbFrontColor: '#000000',
				nbBackgroundColor: '#ffffff',
			}
		}
	}
</script>

<style>

</style>
