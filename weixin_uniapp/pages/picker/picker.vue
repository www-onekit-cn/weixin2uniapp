<template>
    <onekit-view>
        <onekit-view onekitClass="uni-title uni-common-pl">地区选择器</onekit-view>
        <onekit-view onekitClass="uni-list">
            <onekit-view onekitClass="uni-list-cell">
                <onekit-view onekitClass="uni-list-cell-left">
                    当前选择
                </onekit-view>
                <onekit-view onekitClass="uni-list-cell-db">
                    <onekit-picker @change="bindPickerChange" :value="index" :range="array">
                        <onekit-view onekitClass="uni-input">{{array[index]}}</onekit-view>
                    </onekit-picker>
                </onekit-view>
            </onekit-view>
        </onekit-view>

        <onekit-view onekitClass="uni-title uni-common-pl">时间选择器</onekit-view>
        <onekit-view onekitClass="uni-list">
            <onekit-view onekitClass="uni-list-cell">
                <onekit-view onekitClass="uni-list-cell-left">
                    当前选择
                </onekit-view>
                <onekit-view onekitClass="uni-list-cell-db">
                    <onekit-picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
                        <onekit-view onekitClass="uni-input">{{time}}</onekit-view>
                    </onekit-picker>
                </onekit-view>
            </onekit-view>
        </onekit-view>

        <onekit-view onekitClass="uni-title uni-common-pl">日期选择器</onekit-view>
        <onekit-view onekitClass="uni-list">
            <onekit-view onekitClass="uni-list-cell">
                <onekit-view onekitClass="uni-list-cell-left">
                    当前选择
                </onekit-view>
                <onekit-view onekitClass="uni-list-cell-db">
                    <onekit-picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
                        <onekit-view onekitClass="uni-input">{{date}}</onekit-view>
                    </onekit-picker>
                </onekit-view>
            </onekit-view>
        </onekit-view>
    </onekit-view>
</template>
<script>
	// import OnekitPage from "../../onekit/OnekitPage.js";
	export default {
	    data() {
	        const currentDate = this.getDate({
	            format: true
	        })
	        return {
	            title: 'picker',
	            array: ['中国', '美国', '巴西', '日本'],
	            index: 0,
	            date: currentDate,
	            time: '12:01'
	        }
	    },
	    computed: {
	        startDate() {
	            return this.getDate('start');
	        },
	        endDate() {
	            return this.getDate('end');
	        }
	    },
	    methods: {
	        bindPickerChange: function(e) {
	            console.log('picker发送选择改变，携带值为', e.target.value)
	            this.index = e.target.value
	        },
	        bindDateChange: function(e) {
	            this.date = e.target.value
	        },
	        bindTimeChange: function(e) {
	            this.time = e.target.value
	        },
	        getDate(type) {
	            const date = new Date();
	            let year = date.getFullYear();
	            let month = date.getMonth() + 1;
	            let day = date.getDate();
	
	            if (type === 'start') {
	                year = year - 60;
	            } else if (type === 'end') {
	                year = year + 2;
	            }
	            month = month > 9 ? month : '0' + month;;
	            day = day > 9 ? day : '0' + day;
	            return `${year}-${month}-${day}`;
	        }
	    }
	}

</script>

<style>


</style>
