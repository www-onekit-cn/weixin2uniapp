<template>
	<page id="app">
		<view>zhang</view>
	</page>
</template>

<script>
	import OnekitPage from '../../weixin2uniapp/OnekitPage'
	import wx from '../../weixin2uniapp/wx'
	export default OnekitPage({},{
		data() {
			return {
				
			}
		},
		onLoad(){
			console.log("ok")
			const db = uniCloud.database()
			/*
			db.collection('developer').get().then((res)=>{
						console.log(res)
					}).catch((err)=>{
						console.log(err)
					})
			*/
		   db.collection('developer').get({
			   success(res){
		   			console.log(res)
		   		},fail(err){
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
