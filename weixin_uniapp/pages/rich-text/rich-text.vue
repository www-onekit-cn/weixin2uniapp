<template>
	<view class="container">

		<view class="page-body">
			<view class="page-section">
				<view class="page-section-title">通过HTML String渲染</view>
				<view class="page-content">
					<scroll-view scroll-y>{{htmlSnip}}</scroll-view>
					<button type="primary" @tap="renderHtml">渲染HTML</button>
					<block v-if="renderedByHtml">
						<rich-text nodes="htmlSnip"></rich-text>
					</block>
				</view>
			</view>

			<view class="page-section">
				<view class="page-section-title">通过节点渲染</view>
				<view class="page-content">
					<scroll-view scroll-y>{{nodeSnip}}</scroll-view>
					<button type="primary" @tap="renderNode">渲染Node</button>
					<block v-if="renderedByNode">
						<rich-text nodes="nodes"></rich-text>
					</block>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	const htmlSnip =
		`<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`

	const nodeSnip =
		`Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'You never know what you're gonna get.'
      }]
    }]
  }
})
`
	export default {
		data() {
			return {
				htmlSnip,
				nodeSnip,
				renderedByHtml: false,
				renderedByNode: false,
				nodes: [{
					name: 'div',
					attrs: {
						class: 'div_class',
						style: 'line-height: 60px; color: #1AAD19;'
					},
					children: [{
						type: 'text',
						text: 'You never know what you\'re gonna get.'
					}]
				}]
			}
		},
		methods: {
			renderHtml() {
				this.renderHtml(true)
			},
			renderNode() {
				this.renderNode(true)
			},
			enterCode(e) {
				console.log(e.detail.value)
				this.setData({
					htmlSnip: e.detail.value
				})
			}
		}
	}
</script>

<style>
	.page-content {
		width: auto;
		margin: 15px 0;
		padding: 0 25px;
	}

	.code-fragment {
		height: 325px;
	}

	.code-textarea {
		width: auto;
		height: 325px;
		border: 1px solid #1AAD19;
	}

	.p {
		color: #1AAD19;
		margin-top: 15px;
	}

	.space {
		display: inline-block;
		background: red;
		width: 5px;
	}

	scroll-view {
		height: 325px;
		border: 1px solid #1AAD19;
		white-space: pre;
		padding: 5px;
		box-sizing: border-box;
	}
</style>
