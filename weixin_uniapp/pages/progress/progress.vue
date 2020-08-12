<template>

	<onekit-view class_="container">

		<onekit-view class_="page-body">
			<onekit-view class_="page-section page-section-gap">

				<onekit-view class_="progress-box">
					<onekit-progress percent="20" show-info stroke-width="3" />
				</onekit-view>

				<onekit-view class_="progress-box">
					<onekit-progress percent="40" active stroke-width="3" />
					<icon class_="progress-cancel" type="cancel"></icon>
				</onekit-view>

				<onekit-view class_="progress-box">
					<onekit-progress percent="60" active stroke-width="3" />
				</onekit-view>

				<onekit-view class_="progress-box">
					<onekit-progress percent="80" color="#10AEFF" active stroke-width="3" />
				</onekit-view>
			</onekit-view>
		</onekit-view>
	</onekit-view>
</template>

<script>
	import OnekitPage from "../../onekit/OnekitPage.js";
	export default OnekitPage({
		onShareAppMessage() {
			return {
				title: 'progress',
				path: 'page/pages/progress/progress'
			}
		},

		data: {},
	})
</script>

<style>
	.onekit-progress {
		width: 100%;
	}

	.progress-box {
		display: flex;
		height: 25px;
		margin-bottom: 30px;
	}

	.progress-cancel {
		margin-left: 20px;
	}
</style>
