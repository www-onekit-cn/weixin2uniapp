<template>
<div>
<navigator class="page-foot" openType="switchTab" url="/page/component/index" hover-class="none"> 
 <image class="icon-foot" src="./../image/icon_foot.png"></image> 
</navigator>
</div></template>
<script>
const PAGE_JSON = {
	"component":true,
	"usingComponents":{}
}
import {OnekitComponent} from 'weixin2uniapp';
import {wx} from 'weixin2uniapp';
global = {};
export default OnekitComponent(PAGE_JSON,{
    properties:{
        data:String
    },
    lifetimes:{
        attached:function(){
            if(this.properties.data){
            this.setData(this.properties.data);
        }
        }
    }
})
</script>
<style scoped src="@/app.css"/>
<style>

</style>
