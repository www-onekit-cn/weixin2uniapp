<template>
	
	<onekit-view onekitClass="container">
	
	  <onekit-view onekitClass="page-body">
	    <onekit-view onekitClass="page-section page-section-gap">
	      <onekit-view onekitClass="page-section-title">表单组件在label内</onekit-view>
	      <checkbox-group class="group" @change="checkboxChange">
	        <onekit-view onekitClass="label-1" v-for="item in checkboxItems" :key="item.name">
	          <onekit-label>
	            <checkbox :value="item.name" :checked="item.checked"></checkbox>
	            <text class="label-1-text">{{item.value}}</text>
	          </onekit-label>
	        </onekit-view>
	      </checkbox-group>
	    </onekit-view>
	
	    <onekit-view onekitClass="page-section page-section-gap">
	      <onekit-view onekitClass="page-section-title">label用for标识表单组件</onekit-view>
	      <radio-group class="group" @change="radioChange">
	        <onekit-view onekitClass="label-2" v-for="item in radioItems" :key="item.name">
	          <radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
	          <onekit-label onekitClass="label-2-text" :for="item.name"><text>{{item.name}}</text></onekit-label>
	        </onekit-view>
	      </radio-group>
	    </onekit-view>
	
	    <onekit-view onekitClass="page-section page-section-gap">
	      <onekit-view onekitClass="page-section-title">label内有多个时选中第一个</onekit-view>
	      <onekit-label onekitClass="label-3">
	        <checkbox class="checkbox-3">选项一</checkbox>
	        <checkbox class="checkbox-3">选项二</checkbox>
	        <onekit-view onekitClass="label-3-text">点击该label下的文字默认选中第一个checkbox</onekit-view>
	      </onekit-label>
	    </onekit-view>
	  </onekit-view>
	
	</onekit-view>
</template>
<script>
	import OnekitPage from "../../onekit/OnekitPage.js";
	export default OnekitPage({
	  onShareAppMessage() {
	    return {
	      title: 'label',
	      path: 'page/component/pages/onekit-label/onekit-label'
	    }
	  },
	
	  data: {
	    checkboxItems: [
	      {name: 'USA', value: '美国'},
	      {name: 'CHN', value: '中国', checked: 'true'}
	    ],
	    radioItems: [
	      {name: 'USA', value: '美国'},
	      {name: 'CHN', value: '中国', checked: 'true'}
	    ],
	    hidden: false
	  },
	
	  checkboxChange(e) {
	    const checked = e.detail.value
	    const changed = {}
	    for (let i = 0; i < this.data.checkboxItems.length; i++) {
	      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
	        changed['checkboxItems[' + i + '].checked'] = true
	      } else {
	        changed['checkboxItems[' + i + '].checked'] = false
	      }
	    }
	    this.setData(changed)
	  },
	
	  radioChange(e) {
	    const checked = e.detail.value
	    const changed = {}
	    for (let i = 0; i < this.data.radioItems.length; i++) {
	      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
	        changed['radioItems[' + i + '].checked'] = true
	      } else {
	        changed['radioItems[' + i + '].checked'] = false
	      }
	    }
	    this.setData(changed)
	  },
	
	  tapEvent() {
	    console.log('按钮被点击')
	  }
	})

</script>

<style>
	.label-1, .label-2{
	  margin: 15px 0;
	}
	.label-3-text{
	  color: #576B95;
	  font-size: 14px;
	}
	.checkbox-3{
	  display: block;
	  margin: 15px 0;
	}
</style>
