<template>
	<onekit-view class_="container">
	
	  <onekit-view class_="page-body">
	    <onekit-form @submit="formSubmit" @reset="formReset">
	      <onekit-view class_="page-section page-section-gap">
	        <onekit-view class_="page-section-title">switch</onekit-view>
	        <switch name="switch"/>
	      </onekit-view>
	
	      <onekit-view class_="page-section page-section-gap">
	        <onekit-view class_="page-section-title">radio</onekit-view>
	        <radio-group name="radio">
	          <label><radio value="radio1"/>选项一</label>
	          <label><radio value="radio2"/>选项二</label>
	        </radio-group>
	      </onekit-view>
	
	      <onekit-view class_="page-section page-section-gap">
	        <onekit-view class_="page-section-title">checkbox</onekit-view>
	        <checkbox-group name="checkbox">
	          <label><checkbox value="checkbox1"/>选项一</label>
	          <label><checkbox value="checkbox2"/>选项二</label>
	        </checkbox-group>
	      </onekit-view>
	
	      <onekit-view class_="page-section page-section-gap">
	        <onekit-view class_="page-section-title">slider</onekit-view>
	        <slider value="50" name="slider" show-value ></slider>
	      </onekit-view>
	
	      <onekit-view class_="page-section">
	        <onekit-view class_="page-section-title">input</onekit-view>
	        <onekit-view class_="weui-cells weui-cells_after-title">
	          <onekit-view class_="weui-cell weui-cell_input">
	            <onekit-view class_="weui-cell__bd">
	              <input class="weui-input" name="input" placeholder="这是一个输入框" />
	            </onekit-view>
	          </onekit-view>
	        </onekit-view>
	      </onekit-view>
	
	      <onekit-view class_="btn-area">
	        <button type="primary" formType="submit">Submit</button>
	        <button formType="reset">Reset</button>
	      </onekit-view>
	    </onekit-form>
	  </onekit-view>
	
	</onekit-view>
</template>
<script>
	import OnekitPage from "../../onekit/OnekitPage.js";
	export default OnekitPage({
	  onShareAppMessage() {
	    return {
	      title: 'form',
	      path: 'page/component/pages/onekit-form/onekit-form'
	    }
	  },
	
	  data: {
	    pickerHidden: true,
	    chosen: ''
	  },
	
	  pickerConfirm(e) {
	    this.setData({
	      pickerHidden: true
	    })
	    this.setData({
	      chosen: e.detail.value
	    })
	  },
	
	  pickerCancel() {
	    this.setData({ 
	      pickerHidden: true
	    })
	  },
	
	  pickerShow() {
	    this.setData({
	      pickerHidden: false
	    })
	  },
	
	  formSubmit(e) {
	    console.log('form发生了submit事件，携带数据为：', e.detail.value)
	  },
	  formReset(e) {
	    console.log('form发生了reset事件，携带数据为：', e.detail.value)
	    this.setData({
	      chosen: ''
	    })
	  }
	})

</script>

<style>
@import "../common/lib/weui.wxss";

label {
  display: inline-block;
  min-width: 235px;
  margin-right: 10px;
}
form{
  width: 100%;
}
.picker-text {
  margin-left: 10px;
  position: relative;
}

</style>
