<template>
	<movable-view :class="['onekit-view',onekitClass]" :style="onekitStyle" direction="direction" :inertia="inertia" :out-of-bounds="outOfBounds" :x="x" :y="y" :damping="damping"
	 :friction="friction" :disabled="disabled" :scale="scale" :scale-min="scaleMin" :scale-max="scaleMax" :scale-value="scaleValue"
	 :animation="animation" @change="movable_change" @scale="movable_scale">
		<slot></slot>
	</movable-view>
</template>

<script>
	export default {
		props: {
			onekitClass:{
				type:String,
				default:''
			},
			onekitStyle:{
				type:String,
				defaul:''
			},
			direction: {
				type: String,
				default: 'none'
			},
			inertia: {
				type: Boolean,
				default: false
			},
			outOfBounds: {
				type: Boolean,
				default: false
			},
			x: {
				type: Number,
				default: ''
			},
			y: {
				type: Number,
				default: ''
			},
			damping: {
				type: Number,
				default: 20
			},
			friction: {
				type: Number,
				default: 2
			},
			disabled: {
				type: Boolean,
				default: false
			},
			scale: {
				type: Boolean,
				default: false
			},
			scaleMin: {
				type: Number,
				default: 0.5
			},
			scaleMax: {
				type: Number,
				default: 10
			},
			scaleValue: {
				type: Number,
				default: 1
			},
			animation: {
				type: Boolean,
				default: true
			},
		},
		methods: {
			movable_change: function(e) {
				this.$emit('change', e)
			},
			movable_scale: function(e) {
				this.$emit('scale', e)
			}
		}
	}
</script>

<style>
</style>