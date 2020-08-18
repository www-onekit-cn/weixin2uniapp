<template>
	<onekit-view onekit-class="page">
	  <onekit-view onekit-class="page__hd">
	    <text onekit-class="page__title">image</text>
	    <text onekit-class="page__desc">图片</text>
	  </onekit-view>
	  <onekit-view onekit-class="page__bd">
	    <onekit-view onekit-class="section section_gap" v-for="(item,index) in array" :key="index">
	      <onekit-view onekit-class="section__title">{{item.text}}</onekit-view>
	      <onekit-view onekit-class="section__ctn">
	        <onekit-image id="xxx" onekit-style="width: 200px; height: 200px; background-color: #eeeeee;" :mode="item.mode" :src="src"></onekit-image>
	      </onekit-view>
	    </onekit-view>
	  </onekit-view>
	</onekit-view>
</template>

<script>
	import OnekitPage from "../../onekit/OnekitPage.js";
	export default {
	    data() {
	        return {
	            array: [{
	                mode: 'scaleToFill',
	                text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
	            }, {
	                mode: 'aspectFit',
	                text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
	            }, {
	                mode: 'aspectFill',
	                text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
	            }, {
	                mode: 'top',
	                text: 'top：不缩放图片，只显示图片的顶部区域'
	            }, {
	                mode: 'bottom',
	                text: 'bottom：不缩放图片，只显示图片的底部区域'
	            }, {
	                mode: 'center',
	                text: 'center：不缩放图片，只显示图片的中间区域'
	            }, {
	                mode: 'left',
	                text: 'left：不缩放图片，只显示图片的左边区域'
	            }, {
	                mode: 'right',
	                text: 'right：不缩放图片，只显示图片的右边边区域'
	            }, {
	                mode: 'top left',
	                text: 'top left：不缩放图片，只显示图片的左上边区域'
	            }, {
	                mode: 'top right',
	                text: 'top right：不缩放图片，只显示图片的右上边区域'
	            }, {
	                mode: 'bottom left',
	                text: 'bottom left：不缩放图片，只显示图片的左下边区域'
	            }, {
	                mode: 'bottom right',
	                text: 'bottom right：不缩放图片，只显示图片的右下边区域'
	            }],
	            src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg'
	        }
	    },
	    methods: {
	        imageError: function(e) {
	            console.error('image发生error事件，携带值为' + e.detail.errMsg)
	        }
	    }
	}
</script>

<style>
</style>
