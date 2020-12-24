<template>
	<page id="app">
		<view>wang</view>
	</page>
</template>

<script>
	import OnekitPage from '../../weixin2uniapp/OnekitPage'
	import wx from '../../weixin2uniapp/wx'
	export default OnekitPage({}, {
		data() {
			return {

			}
		},
		onLoad: res => {
			/*const db = wx.cloud.database()
			db.collection('developer').add({
				data: {
					name: 'wang'
				},
				success: res => {
					console.log(res)
				}
			})*/
/*
			const db = uniCloud.database()
			db.collection('developer').get()
				.then((res) => {
					console.log(res)
				}).catch((err) => {
					console.log(err)
				})
			db.collection('developer').get({
				success: res => {
					console.log('--------',res)
				}
			})*/
			
			      wx.cloud.init({
			        // env: 'my-env-id',
			        traceUser: true,
			      })
			    const db = wx.cloud.database()
			    db.collection('developer').get({
			      success: function(res) {
			        console.log("A",res)
			      },
			    })
			    db.collection('developer').get().then((res)=>{
			        console.log("B",res)
			    })
		},
		methods: {

		}
	})
</script>

<style>

</style>
