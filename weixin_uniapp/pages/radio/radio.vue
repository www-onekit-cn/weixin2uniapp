<template>
	
	<onekit-view onekitClass="container">
	
	  <onekit-view onekitClass="page-body">
	    <onekit-view onekitClass="page-section page-section-gap">
	      <onekit-view onekitClass="page-section-title">默认样式</onekit-view>
	      <onekit-label class="radio">
	        <onekit-radio value="r1" checked/>选中
	      </onekit-label>
	      <onekit-label onekitClass="radio">
	        <onekit-radio value="r2" />未选中
	      </onekit-label>
	    </onekit-view>
	
	    <onekit-view onekitClass="page-section">
	      <onekit-view onekitClass="page-section-title">推荐展示样式</onekit-view>
	      <onekit-view onekitClass="weui-cells weui-cells_after-title">
	        <onekit-radio-group @change="radioChange">
	          <onekit-label onekitClass="weui-cell weui-check__label" v-for="item in items" :key="item.value">
	            <onekit-view onekitClass="weui-cell__hd">
	              <onekit-radio :value="item.value" checked/>
	            </onekit-view>
	            <onekit-view onekitClass="weui-cell__bd">{{item.name}}</onekit-view>
	          </onekit-label>
	        </onekit-radio-group>
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
	      title: 'radio',
	      path: 'page/component/pages/onekit-radio/onekit-radio'
	    }
	  },
	
	  data: {
	    items: [
	      {value: 'USA', name: '美国'},
	      {value: 'CHN', name: '中国', checked: 'true'},
	      {value: 'BRA', name: '巴西'},
	      {value: 'JPN', name: '日本'},
	      {value: 'ENG', name: '英国'},
	      {value: 'FRA', name: '法国'},
	    ]
	  },
	
	  radioChange(e) {
	    console.log('radio发生change事件，携带value值为：', e)
	
	    const items = this.data.items
	    for (let i = 0, len = items.length; i < len; ++i) {
	      items[i].checked = items[i].value === e.detail.value
	    }
	
	    this.setData({
	      items
	    })
	  }
	})

</script>

<style>
  @import "../common/lib/weui.wxss";
	
	.radio {
	  margin-right: 10px;
	}

</style>
