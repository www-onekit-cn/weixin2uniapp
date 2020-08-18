<template>
	
	<onekit-view onekitClass="container">
	
	  <onekit-view onekitClass="page-body">
	    <onekit-view onekitClass="page-section page-section-gap">
	      <onekit-view onekitClass="page-section-title">默认样式</onekit-view>
	      <onekit-view onekitClass="body-view">
	        <onekit-switch checked @change="switch1Change"/>
	        <onekit-switch @change="switch2Change"/>
	      </onekit-view>
	    </onekit-view>
	
	    <onekit-view onekitClass="page-section">
	      <onekit-view onekitClass="page-section-title">推荐展示样式</onekit-view>
	      <onekit-view onekitClass="weui-cells weui-cells_after-title">
	        <onekit-view onekitClass="weui-cell weui-cell_switch">
	          <onekit-view onekitClass="weui-cell__bd">开启中</onekit-view>
	          <onekit-view onekitClass="weui-cell__ft">
	            <onekit-switch checked />
	          </onekit-view>
	        </onekit-view>
	        <onekit-view onekitClass="weui-cell weui-cell_switch">
	          <onekit-view onekitClass="weui-cell__bd">关闭</onekit-view>
	          <onekit-view onekitClass="weui-cell__ft">
	            <onekit-switch/>
	          </onekit-view>
	        </onekit-view>
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
	      title: 'switch',
	      path: 'page/component/pages/onekit-switch/onekit-switch'
	    }
	  },
	
	  switch1Change(e) {
	    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
	  },
	
	  switch2Change(e) {
	    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
	  }
	})

</script>

<style>
@import "../common/lib/weui.wxss";
</style>
