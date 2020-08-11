<template>
	<view>
		<page-head title="form"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="title">姓名</view>
					<input class="uni-input" name="nickname" placeholder="请输入姓名" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">性别</view>
					<onekit-radio-group name="gender">
						<onekit-label>
							<onekit-radio value="男" /><text>男</text>
						</onekit-label>
						<onekit-label>
							<onekit-radio value="女" /><text>女</text>
						</onekit-label>
					</onekit-radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">爱好</view>
					<onekit-checkbox-group name="loves">
						<onekit-label>
							<onekit-checkbox value="读书" /><text>读书</text>
						</onekit-label>
						<onekit-label>
							<onekit-checkbox value="写字" /><text>写字</text>
						</onekit-label>
					</onekit-checkbox-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">年龄</view>
					<slider value="20" name="age" show-value></slider>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">保留选项</view>
					<view>
						<switch name="switch" />
					</view>
				</view>
				<view class="uni-btn-v">
					<onekit-button form-type="submit">Submit</onekit-button>
					<onekit-button type="default" form-type="reset">Reset</onekit-button>
				</view>
			</form>
		</view>
	</view>
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
	var  graceChecker = require("../../common/graceChecker.js");
	export default {
		data() {
			return {
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
                //定义表单规则
                var rule = [
                    {name:"nickname", checkType : "string", checkRule:"1,3",  errorMsg:"姓名应为1-3个字符"},
                    {name:"gender", checkType : "in", checkRule:"男,女",  errorMsg:"请选择性别"},
                    {name:"loves", checkType : "notnull", checkRule:"",  errorMsg:"请选择爱好"}
                ];
                //进行表单检查
                var formData = e.detail.value;
                var checkRes = graceChecker.check(formData, rule);
                if(checkRes){
                    uni.showToast({title:"验证通过!", icon:"none"});
                }else{
                    uni.showToast({ title: graceChecker.error, icon: "none" });
                }
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		}
	}
</script>

<style>
	.uni-form-item .title {
		padding: 20rpx 0;
	}
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
