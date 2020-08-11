<template>
	<view class="container">
	  <view class="page-body">
	    <onekit-form catchsubmit="formSubmit" catchreset="formReset">
	      <view class="page-section page-section-gap">
	        <view class="page-section-title">switch</view>
	        <switch name="switch"/>
	      </view>
	
	      <view class="page-section page-section-gap">
	        <view class="page-section-title">radio</view>
	        <radio-group name="radio">
	          <label><radio value="radio1"/>选项一</label>
	          <label><radio value="radio2"/>选项二</label>
	        </radio-group>
	      </view>
	
	      <view class="page-section page-section-gap">
	        <view class="page-section-title">checkbox</view>
	        <checkbox-group name="checkbox">
	          <label><checkbox value="checkbox1"/>选项一</label>
	          <label><checkbox value="checkbox2"/>选项二</label>
	        </checkbox-group>
	      </view>
	
	      <view class="page-section page-section-gap">
	        <view class="page-section-title">slider</view>
	        <slider value="50" name="slider" show-value ></slider>
	      </view>
	
	      <view class="page-section">
	        <view class="page-section-title">input</view>
	        <view class="weui-cells weui-cells_after-title">
	          <view class="weui-cell weui-cell_input">
	            <view class="weui-cell__bd" style="margin: 30rpx 0" >
	              <input class="weui-input" name="input" placeholder="这是一个输入框" v-model="testValue" />
	            </view>
	          </view>
	        </view>
	      </view>
	
	      <view class="btn-area">
			<button style="margin: 30rpx 0" type="primary" formType="submit" @click="confirm">Submit</button>
	        <button style="margin: 30rpx 0" formType="reset">Reset</button>
	      </view>
	    </onekit-form>
	  </view>
	</view>
	</template>  
</template>

<script>
	export default {
		data() {
			return {
				pickerHidden: true,
				chosen: '',
				testValue: ''
			}
		},
		methods: {
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
			},
			confirm() {
				let data = this.testValue;
			    console.log(JSON.stringify(data))
			},
		}
	}
	
</script>

<style>

</style>
