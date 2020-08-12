<template>
	<onekit-view class_="container">

		<onekit-view class_="page-body">
			<onekit-view class_="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" latitude="latitude" longitude="longitude">
					<onekit-cover-view class_="cover-view">
						<onekit-cover-view class_="container">
							<onekit-cover-view class_="flex-wrp" style_="flex-direction:row;">
								<onekit-cover-view class_="flex-item demo-text-1"></onekit-cover-view>
								<onekit-cover-view class_="flex-item demo-text-2"></onekit-cover-view>
								<onekit-cover-view class_="flex-item demo-text-3"></onekit-cover-view>
							</onekit-cover-view>
						</onekit-cover-view>
					</onekit-cover-view>
				</map>
			</onekit-view>
		</onekit-view>
	</onekit-view>
</template>

<script>
	import OnekitPage from "../../onekit/OnekitPage.js";
	export default OnekitPage({
		onShareAppMessage() {
			return {
				title: 'cover-view',
				path: 'page/component/pages/cover-view/cover-view'
			}
		},

		data: {
			latitude: 23.099994,
			longitude: 113.324520,
		},
	})
</script>

<style>
	.cover-view {
		position: absolute;
		top: calc(50% - 75px);
		left: calc(50% - 150px);
		/* opacity: .7; */
	}

	.flex-wrp {
		display: flex;
	}

	.flex-item {
		width: 100px;
		height: 150px;
		font-size: 13px;
	}

	.demo-text-1 {
		background: rgba(26, 173, 25, 0.7);
	}

	.demo-text-2 {
		background: rgba(39, 130, 215, 0.7);
	}

	.demo-text-3 {
		background: rgba(255, 255, 255, 0.7);
	}
</style>
