<template>
	
	<view class="container">
	
	  <view class="page-body">
	    <view class="page-section page-section-gap">
	      <view class="page-section-title">默认样式</view>
	      <label class="checkbox">
	        <checkbox value="cb" checked/>选中
	      </label>
	      <label class="checkbox">
	        <checkbox value="cb" />未选中
	      </label>
	    </view>
	
	    <view class="page-section">
	      <view class="page-section-title">推荐展示样式</view>
	      <view class="weui-cells weui-cells_after-title">
	        <checkbox-group @change="checkboxChange">
	          <label class="weui-cell weui-check__label" v-for="item in items" :key="item.value">
	            <view class="weui-cell__hd">
	              <checkbox :value="item.value" :checked="item.checked"/>
	            </view>
	            <view class="weui-cell__bd">{{item.name}}</view>
	          </label>
	        </checkbox-group>
	      </view>
	    </view>
	  </view>
	
	</view>
</template>
<script>
	import OnekitPage from "../../onekit/OnekitPage.js";
	export default OnekitPage({
	  onShareAppMessage() {
	    return {
	      title: 'checkbox',
	      path: 'page/component/pages/checkbox/checkbox'
	    }
	  },
	
	  data: {
	    items: [
	      {value: 'USA', name: '美国'},
	      {value: 'CHN', name: '中国', checked: 'true'},
	      {value: 'BRA', name: '巴西'},
	      {value: 'JPN', name: '日本'},
	      {value: 'ENG', name: '英国'},
	      {value: 'FRA', name: '法国'}
	    ]
	  },
	
	  checkboxChange(e) {
	    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
	    const items = this.data.items
	    const values = e.detail.value
	    for (let i = 0, lenI = items.length; i < lenI; ++i) {
	      items[i].checked = false
	
	      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
	        if (items[i].value === values[j]) {
	          items[i].checked = true
	          break
	        }
	      }
	    }
	
	    this.setData({
	      items
	    })
	  }

	})


</script>

<style>
	@import "../common/lib/weui.wxss";
	
	.checkbox{
	  margin-right: 10px;
	}

</style>

