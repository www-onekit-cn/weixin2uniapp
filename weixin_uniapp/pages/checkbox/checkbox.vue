<template>
<<<<<<< HEAD
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">默认样式</view>
			<view>
				<onekit-checkbox-group>
					<label>
						<onekit-checkbox value="cb" checked="true" />选中
					</label>
					<label>
						<onekit-checkbox value="cb" />未选中
					</label>
				</onekit-checkbox-group>
			</view>
			<view class="uni-title uni-common-mt">不同颜色和尺寸的checkbox</view>
			<view>
				<onekit-checkbox-group>
					<label>
						<onekit-checkbox value="cb" checked="true" color="#FFCC33" style="transform:scale(0.7)" />选中
					</label>
					<label>
						<onekit-checkbox value="cb" color="#FFCC33" style="transform:scale(0.7)" />未选中
					</label>
				</onekit-checkbox-group>
			</view>
		</view>
		
		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt">
				推荐展示样式
				<text>\n使用 uni-list 布局</text>
			</view>
		</view>
		<view class="uni-list">
			<onekit-checkbox-group @change="checkboxChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
					<view>
						<onekit-checkbox :value="item.value" :checked="item.checked" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</onekit-checkbox-group>
		</view>
=======
	<view class="container">
	  <view class="page-body">
	    <view class="page-section page-section-gap">
	      <view class="page-section-title">默认样式</view>
	      <label class="checkbox">
	        <onekit-checkbox value="cb" checked="true">选中</onekit-checkbox>
	      </label>
	      <label class="checkbox">
	        <onekit-checkbox value="cb">未选中</onekit-checkbox>
	      </label>
	    </view>
	  
	    <view class="page-section">
	      <view class="page-section-title">推荐展示样式</view>
	      <view class="weui-cells weui-cells_after-title">
	        <checkbox-group bindchange="checkboxChange">
	          <label class="weui-cell weui-check__label" v-for="item in area" :key="item.value">
	            <view class="weui-cell__hd">
	              <onekit-checkbox :value="item.value" :checked="item.checked"/>
	            </view>
	            <view class="weui-cell__bd">{{item.name}}</view>
	          </label>
	        </checkbox-group>
	      </view>
	    </view>
	  </view>
	  
>>>>>>> 20787aef25083209afeaa3e104b9a5af34e2d022
	</view>
</template>
<script>
	export default {
		data() {
			return {
<<<<<<< HEAD
				title: 'checkbox 复选框',
				items: [{
						value: 'USA',
						name: '美国'
					},
					{
						value: 'CHN',
						name: '中国',
						checked: 'true'
					},
					{
						value: 'BRA',
						name: '巴西'
					},
					{
						value: 'JPN',
						name: '日本'
					},
					{
						value: 'ENG',
						name: '英国'
					},
					{
						value: 'FRA',
						name: '法国'
					}
				]
			}
		},
		methods: {
			checkboxChange: function (e) {
				var items = this.items,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if(values.indexOf(item.value) >= 0){
						this.$set(item,'checked',true)
					}else{
						this.$set(item,'checked',false)
					}
				}
			}
=======
				area: [
				      {value: 'USA', name: '美国'},
				      {value: 'CHN', name: '中国', checked: 'true'},
				      {value: 'BRA', name: '巴西'},
				      {value: 'JPN', name: '日本'},
				      {value: 'ENG', name: '英国'},
				      {value: 'FRA', name: '法国'}
				    ]
			}
		},
		methods: {
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
>>>>>>> 20787aef25083209afeaa3e104b9a5af34e2d022
		}
	}
</script>

<style>
<<<<<<< HEAD
.uni-list-cell {
	justify-content: flex-start
}
=======

>>>>>>> 20787aef25083209afeaa3e104b9a5af34e2d022
</style>

