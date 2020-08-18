<template>
	
	<onekit-view onekitClass="container">
	
	  <onekit-view onekitClass="page-body">
	    <onekit-view onekitClass="page-section page-section-gap">
	      <onekit-view onekitClass="page-section-title">设置step</onekit-view>
	      <onekit-view onekitClass="body-view">
	        <onekit-slider :value="60" @change="slider2change" :step="5"/>
	      </onekit-view>
	    </onekit-view>
	
	    <onekit-view onekitClass="page-section page-section-gap">
	      <onekit-view onekitClass="page-section-title">显示当前value</onekit-view>
	      <onekit-view onekitClass="body-view">
	        <onekit-slider :value="50" @change="slider3change" show-value/>
	      </onekit-view>
	    </onekit-view>
	
	    <onekit-view onekitClass="page-section page-section-gap">
	      <onekit-view onekitClass="page-section-title">设置最小/最大值</onekit-view>
	      <onekit-view onekitClass="body-view">
	        <onekit-slider :value="100" @change="slider4change" :min="50" :max="200" show-value/>
	      </onekit-view>
	    </onekit-view>
	  </onekit-view>

	</onekit-view>

</template>
<script>
	import OnekitPage from "../../onekit/OnekitPage.js";
	const pageData = {
	  onShareAppMessage() {
	    return {
	      title: 'slider',
	      path: 'page/component/pages/onekit-slider/onekit-slider'
	    }
	  },
	}
	
	for (let i = 1; i < 5; ++i) {
	  (function (index) {
	    pageData['slider' + index + 'change'] = function (e) {
	      console.log('slider' + index + '发生change事件，携带值为', e.detail.value)
	    }
	  }(i))
	}
	
	export default OnekitPage(pageData)

</script>
<style>
	slider {
	  margin: 0;
	}
</style>