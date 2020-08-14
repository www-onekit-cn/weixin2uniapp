<template>
	
	<onekit-view class_="container">
	
	  <onekit-view class_="page-body">
	    <onekit-view class_="page-section">
	      <onekit-view class_="page-section-title">输入区域高度自适应，不会出现滚动条</onekit-view>
	      <onekit-view class_="textarea-wrp">
	        <onekit-textarea @dblur="dTextAreaBlur" auto-height />
	      </onekit-view>
	    </onekit-view>
	
	    <onekit-view class_="page-section">
	      <onekit-view class_="page-section-title">这是一个可以自动聚焦的textarea</onekit-view>
	      <onekit-view class_="textarea-wrp">
	        <onekit-textarea auto-focus="true" style="height: 3em" />
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
	      title: 'textarea',
	      path: 'page/component/pages/onekit-textarea/onekit-textarea'
	    }
	  },
	
	  data: {
	    focus: false
	  },
	
	  dTextAreaBlur(e) {
	    console.log(e.detail.value)
	  }
	})

</script>

<style>
	textarea {
	    width: 350px;
	    padding: 13px 0;
	}
	.textarea-wrp {
	    padding: 0 13px;
	}
</style>
