<template>
	<onekit-page>
		<view>zhang</view>
		<view is="onekit-template-head" DATA='"title":"title1","desc":"desc1"'/>
	</onekit-page>
</template>

<script>
	import OnekitPage from '../../weixin2uniapp/OnekitPage'
	import wx from '../../weixin2uniapp/wx'
	import head from "../common/head.head"
	import Vue from 'vue'
	Vue.component("onekit-template-head",head)
	export default OnekitPage({},{
		
	})
</script>

<style>

</style>
