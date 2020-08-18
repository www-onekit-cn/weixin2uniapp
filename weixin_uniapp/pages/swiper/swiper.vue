<template>

	<onekit-view onekitClass="container">
		<onekit-view onekitClass="page-body">
			<onekit-view onekitClass="page-section page-section-spacing swiper">
				<onekit-swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<block v-for="(items,index) in background" :key="index">
						<onekit-swiper-item>
							<onekit-view onekitClass="swiper-item item"></onekit-view>
						</onekit-swiper-item>
					</block>
				</onekit-swiper>
			</onekit-view>
			<onekit-view onekitClass="page-section" style="margin-top: 20px;margin-bottom: 0;">
				<onekit-view onekitClass="weui-cells weui-cells_after-title">
					<onekit-view onekitClass="weui-cell weui-cell_switch">
						<onekit-view onekitClass="weui-cell__bd">指示点</onekit-view>
						<onekit-view onekitClass="weui-cell__ft">
							<switch :checked="indicatorDots" @change="changeIndicatorDots" />
						</onekit-view>
					</onekit-view>
					<onekit-view onekitClass="weui-cell weui-cell_switch">
						<onekit-view onekitClass="weui-cell__bd">自动播放</onekit-view>
						<onekit-view onekitClass="weui-cell__ft">
							<switch :checked="autoplay" @change="changeAutoplay" />
						</onekit-view>
					</onekit-view>
				</onekit-view>
			</onekit-view>

			<onekit-view onekitClass="page-section page-section-spacing">
				<onekit-view onekitClass="page-section-title">
					<text>幻灯片切换时长(ms)</text>
					<text onekitClass="info">{{duration}}</text>
				</onekit-view>
				<slider @change="durationChange" :value="duration" :min="500" :max="2000" />
				<onekit-view onekitClass="page-section-title">
					<text>自动播放间隔时长(ms)</text>
					<text onekitClass="info">{{interval}}</text>
				</onekit-view>
				<slider @change="intervalChange" :value="interval" :min="2000" :max="10000" />
			</onekit-view>
		</onekit-view>
	</onekit-view>

</template>

<script>
	import OnekitPage from "../../onekit/OnekitPage.js";
	export default OnekitPage({
		onShareAppMessage() {
			return {
				title: 'onekit-view',
				path: 'page/component/pages/onekit-view/onekit-view'
			}
		},


		data: {
			background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
			indicatorDots: true,
			vertical: false,
			autoplay: false,
			interval: 2000,
			duration: 500
		},

		changeIndicatorDots() {
			this.setData({
				indicatorDots: !this.data.indicatorDots
			})
		},

		changeAutoplay() {
			this.setData({
				autoplay: !this.data.autoplay
			})
		},

		intervalChange(e) {
			this.setData({
				interval: e.detail.value
			})
		},

		durationChange(e) {
			this.setData({
				duration: e.detail.value
			})
		}
	})
</script>

<style>
	button {
		margin-bottom: 15px;
	}

	button:last-child {
		margin-bottom: 0;
	}

	.page-section-title {
		padding: 0;
	}

	.swiper-item {
		display: block;
		height: 150px;
	}

	.page-section-title {
		margin-top: 30px;
		position: relative;
	}

	.info {
		position: absolute;
		right: 0;
		color: #353535;
		font-size: 15px;
	}

	.page-foot {
		margin-top: 25px;
	}
</style>
