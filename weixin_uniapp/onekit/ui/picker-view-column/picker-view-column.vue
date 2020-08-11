<template>
	<picker-view-column
		
	>
		<slot/>
	</picker-view-column>
</template>

<script>
	export default{
		behaviors: ['uni://form-field'],
		props:{},
		methods:{},
	}
</script>

<style>
</style>
