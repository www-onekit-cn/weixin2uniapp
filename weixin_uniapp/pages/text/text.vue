<template>
	<view class="container">
	  <view class="page-body">
		<view class="page-section page-section-spacing">
		  <view class="text-box" scroll-y="true" :scroll-top="scrollTop">
			<onekit-text>{{text}}</onekit-text>
		  </view>
		  <button :disabled="!canAdd" @click="add">add line</button>
		  <button :disabled="!canRemove" @click="remove">remove line</button>
		</view>
	  </view>
</view>
</template>

<script>
	export default {
	    data() {
	        return {
	            texts: [
	                '2011年1月，微信1.0发布',
	                  '同年5月，微信2.0语音对讲发布',
	                  '10月，微信3.0新增摇一摇功能',
	                  '2012年3月，微信用户突破1亿',
	                  '4月份，微信4.0朋友圈发布',
	                  '同年7月，微信4.2发布公众平台',
	                  '2013年8月，微信5.0发布微信支付',
	                  '2014年9月，企业号发布',
	                  '同月，发布微信卡包',
	                  '2015年1月，微信第一条朋友圈广告',
	                  '2016年1月，企业微信发布',
	                  '2017年1月，小程序发布',
	                  '......'
	            ],
	            text: '',
	            canAdd: true,
	            canRemove: false,
	            extraLine: []
	        }
	    },
	    methods: {
	        add: function(e) {
	            this.extraLine.push(this.texts[this.extraLine.length % 12]);
	            this.text = this.extraLine.join('\n');
	            this.canAdd = this.extraLine.length < 12;
	            this.canRemove = this.extraLine.length > 0;
	        },
	        remove: function(e) {
	            if (this.extraLine.length > 0) {
	                this.extraLine.pop();
	                this.text = this.extraLine.join('\n');
	                this.canAdd = this.extraLine.length < 12;
	                this.canRemove = this.extraLine.length > 0;
	            }
	        }
	    }
	}
</script>

<style>

</style>
