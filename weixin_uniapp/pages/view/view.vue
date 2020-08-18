<template>
	<onekit-view onekitClass="container">
		<onekit-view onekitClass="page-body">
			<onekit-view onekitClass="page-section">
				<onekit-view onekitClass="page-section-title">
					<text>flex-direction: row\n横向布局</text>
				</onekit-view>
				<onekit-view onekitClass="page-section-spacing">
					<onekit-view onekitClass="flex-wrp" onekitStyle="flex-direction:row;">
						<onekit-view onekitClass="flex-item, demo-text-1"></onekit-view>
						<onekit-view onekitClass="flex-item ,demo-text-2"></onekit-view>
						<onekit-view onekitClass="flex-item ,demo-text-3"></onekit-view>
					</onekit-view>
				</onekit-view>
			</onekit-view>
			<onekit-view onekitClass="page-section">
				<onekit-view onekitClass="page-section-title">
					<text>flex-direction: column\n纵向布局</text>
				</onekit-view>
				<onekit-view onekitClass="flex-wrp" onekitStyle="flex-direction:column;">
					<onekit-view onekitClass="flex-item, flex-item-V, demo-text-1"></onekit-view>
					<onekit-view onekitClass="flex-item ,flex-item-V ,demo-text-2"></onekit-view>
					<onekit-view onekitClass="flex-item ,flex-item-V ,demo-text-3"></onekit-view>
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
				title: 'view',
				path: 'page/component/pages/view/view'
			}
		},

		data: {},
	})
</script>

<style>
	.flex-wrp {
		margin-top: 30px;
		display: flex;
	}

	.flex-item {
		width: 100px;
		height: 150px;
		font-size: 13px;
	}

	.flex-item-V {
		margin: 0 auto;
		width: 150px;
		height: 100px;
	}
</style>
