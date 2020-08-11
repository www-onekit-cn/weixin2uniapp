<template>
<<<<<<< HEAD
	<checkbox
		:value="value"
		:disabled="disabled"
		:checked="checked"
		:color="color"
	
	>
		<slot/>
	</checkbox>
</template>

<script>
	export default{
		props:{
=======
	<view>
		<checkbox
		:value = "value"
		:disabled = "disabled"
		:checked = "checked"
		:color = "color"
		>
		</checkbox>
	</view>
</template>

<script>
	export default {
		props: {
>>>>>>> 20787aef25083209afeaa3e104b9a5af34e2d022
			value:{
				type:String,
				default: ""
			},
			disabled:{
				type:Boolean,
<<<<<<< HEAD
				default: false
			},
			checked:{
				type:String,
				default: "false"
			},
			color:{
				type:String,
				default: "#09BB07"
			},
		}
	}
	
</script>

<style>
=======
				default:false
			},
			checked:[Boolean,String],
			color:{
				type:String,
				default:"#09BB07"
			}
		}
	}
</script>

<style>

>>>>>>> 20787aef25083209afeaa3e104b9a5af34e2d022
</style>
