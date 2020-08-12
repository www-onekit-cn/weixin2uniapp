<template>
<onekit-view class="container">

	<onekit-view class="page-body">
		<onekit-view class="page-section">
			<onekit-view class="page-section-title first">movable-view区域小于movable-area</onekit-view>
			<movable-area>
				<movable-view x="x" y="y" direction="all">text</movable-view>
			</movable-area>
		</onekit-view>
		<onekit-view class="btn-area">
			<button @tap="tap" class="page-body-button" type="primary">点击移动到 (30px, 30px)</button>
		</onekit-view>

		<onekit-view class="page-section">
			<onekit-view class="page-section-title">movable-view区域大于movable-area</onekit-view>
			<movable-area>
				<movable-view class="max" direction="all">text</movable-view>
			</movable-area>
		</onekit-view>

		<onekit-view class="page-section">
			<onekit-view class="page-section-title">只可以横向移动</onekit-view>
			<movable-area>
				<movable-view direction="horizontal">text</movable-view>
			</movable-area>
		</onekit-view>

		<onekit-view class="page-section">
			<onekit-view class="page-section-title">只可以纵向移动</onekit-view>
			<movable-area>
				<movable-view direction="vertical">text</movable-view>
			</movable-area>
		</onekit-view>

		<onekit-view class="page-section">
			<onekit-view class="page-section-title">可超出边界</onekit-view>
			<movable-area>
				<movable-view direction="all" out-of-bounds>text</movable-view>
			</movable-area>
		</onekit-view>

		<onekit-view class="page-section">
			<onekit-view class="page-section-title">带有惯性</onekit-view>
			<movable-area>
				<movable-view direction="all" inertia>text</movable-view>
			</movable-area>
		</onekit-view>

		<onekit-view class="page-section">
			<onekit-view class="page-section-title">可放缩</onekit-view>
			<movable-area scale-area>
				<movable-view direction="all" @change="onChange" @scale="onScale" scale scale-min="0.5" scale-max="4"
				 :scale-value="scale">text</movable-view>
			</movable-area>
		</onekit-view>

		<onekit-view class="btn-area">
			<button @tap="tap2" class="page-body-button" type="primary">点击放大3倍</button>
		</onekit-view>
	</onekit-view>

</onekit-view>
</template>
<script>
	import OnekitPage from "../../onekit/OnekitPage.js";

	export default OnekitPage({
		onShareAppMessage() {
			return {
				title: 'movable-view',
				path: 'page/component/pages/movable-view/movable-view'
			}
		},
		data: {
			x: 0,
			y: 0,
			scale: 2,
		},
		tap() {
			this.setData({
				x: 30,
				y: 30
			})
		},

		tap2() {
			this.setData({
				scale: 3
			})
		},

		onChange(e) {
			console.log(e.detail)
		},

		onScale(e) {
			console.log(e.detail)
		}
	})
</script>
<style>
	movable-view {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		width: 50px;
		background: #1AAD19;
		color: #fff;
	}

	movable-area {
		height: 200px;
		width: 200px;
		margin: 25px 0px 0 25px;
		background-color: #ccc;
		overflow: hidden;
	}

	.max {
		width: 300px;
		height: 300px;
	}

	.page-section {
		width: 100%;
		margin-bottom: 10px;
	}

	.page-section-title {
		margin-top: 25px;
		font-size: 14px;
		color: #999999;
		margin-bottom: 5px;
		padding-left: 15px;
		padding-right: 15px;
	}

	.page-section-title.first {
		margin-top: 0;
	}

	.btn-area {
		margin-top: 10px;
	}
</style>
