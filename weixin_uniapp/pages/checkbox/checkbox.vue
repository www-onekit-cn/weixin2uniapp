<template>
	
	<onekit-view onekitClass="container">
	
	  <onekit-view onekitClass="page-body">
	    <onekit-view onekitClass="page-section page-section-gap">
	      <onekit-view onekitClass="page-section-title">默认样式</onekit-view>
	      <onekit-label onekitClass="checkbox">
	        <onekit-checkbox value="cb" checked/>选中
	      </onekit-label>
	      <onekit-label onekitClass="checkbox">
	        <onekit-checkbox value="cb" />未选中
	      </onekit-label>
	    </onekit-view>
	
	    <onekit-view onekitClass="page-section">
	      <onekit-view onekitClass="page-section-title">推荐展示样式</onekit-view>
	      <onekit-view onekitClass="weui-cells weui-cells_after-title">
	        <onekit-checkbox-group @change="checkboxChange">
	          <onekit-label onekitClass="weui-cell weui-check__label" v-for="item in items" :key="item.value">
	            <onekit-view onekitClass="weui-cell__hd">
	              <onekit-checkbox :value="item.value" :checked="item.checked"/>
	            </onekit-view>
	            <onekit-view onekitClass="weui-cell__bd">{{item.name}}</onekit-view>
	          </onekit-label>
	        </onekit-checkbox-group>
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
	      title: 'checkbox',
	      path: 'page/component/pages/onekit-checkbox/onekit-checkbox'
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

