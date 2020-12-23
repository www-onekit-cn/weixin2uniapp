<template>
	<page id="app">
		<view>wang</view>
	</page>
</template>

<script>
	import OnekitPage from '../../weixin2uniapp/OnekitPage'
	export default OnekitPage({},{
		data() {
			return {
				
			}
		},
		onLoad: res => {
			const db = wx.cloud.database()
			 console.log(db)
			db.collection('developer').add({
				data: {
					name: 'WangYewei'
				},
				success: res => {
					console.log(res)
				},
				fail: err => {
					console.log(err)
				}
			})
		},
		methods: {
			
		}
	})
</script>

<style>

</style>
