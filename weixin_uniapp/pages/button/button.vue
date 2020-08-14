<template>
  
  <onekit-view class_="container">
 
    <onekit-view class_="page-body">
      <onekit-view class_="btn-area" id_="buttonContainer">
        <onekit-button type="primary">页面主操作 Normal</onekit-button>
        <onekit-button type="primary" loading>页面主操作 Loading</onekit-button>
        <onekit-button type="primary" disabled>页面主操作 Disabled</onekit-button>
  
        <onekit-button type="default">页面次要操作 Normal</onekit-button>
        <onekit-button type="default" disabled>页面次要操作 Disabled</onekit-button>
  
        <onekit-button type="warn">警告类操作 Normal</onekit-button>
        <onekit-button type="warn" disabled>警告类操作 Disabled</onekit-button>
  
        <onekit-view class_="button-sp-area">
          <onekit-button type="primary" plain>按钮</onekit-button>
          <onekit-button type="primary" disabled plain>不可点击的按钮</onekit-button>
  
          <onekit-button type="default" plain>按钮</onekit-button>
          <onekit-button type="default" disabled plain>按钮</onekit-button>
  
          <onekit-button class_="mini-btn" type="primary" size="mini">按钮</onekit-button>
          <onekit-button class_="mini-btn" type="default" size="mini">按钮</onekit-button>
          <onekit-button class_="mini-btn" type="warn" size="mini">按钮</onekit-button>
        </onekit-view>
        <onekit-button type="primary" open-type="contact" @contact="handleContact" show-message-card send-message-title="临时会话">打开客服会话</onekit-button>
        <onekit-button type="primary" open-type="share">触发用户转发</onekit-button>
        <onekit-button type="primary" open-type="getPhoneNumber" @getphonenumber="handleGetPhoneNumber">获取用户手机号</onekit-button>
        <onekit-button type="primary" open-type="getUserInfo" lang="zh_CN" @getuserinfo="handleGetUserInfo">获取用户信息</onekit-button>
        <onekit-button type="primary" open-type="openSetting" @opensetting="handleOpenSetting">打开设置授权页</onekit-button>
        <onekit-button type="primary" open-type="feedback">打开意见反馈</onekit-button>
      </onekit-view>
    </onekit-view>
  

  </onekit-view>
</template>
<script>
	import OnekitPage from "../../onekit/OnekitPage.js";
    const types = ['default', 'primary', 'warn']
    const pageObject = {
      data: {
        defaultSize: 'default',
        primarySize: 'default',
        warnSize: 'default',
        disabled: false,
        plain: false,
        loading: false
      },
    
      onShareAppMessage() {
        return {
          title: 'button',
          path: 'page/component/pages/onekit-button/onekit-button'
        }
      },
    
      setDisabled() {
        this.setData({
          disabled: !this.data.disabled
        })
      },
    
      setPlain() {
        this.setData({
          plain: !this.data.plain
        })
      },
    
      setLoading() {
        this.setData({
          loading: !this.data.loading
        })
      },
      
      handleContact(e) {
        console.log(e.detail)
      },
    
      handleGetPhoneNumber(e) {
        console.log(e.detail)
      },
    
      handleGetUserInfo(e) {
        console.log(e.detail)
      },
    
      handleOpenSetting(e) {
        console.log(e.detail.authSetting)
      },
    
      handleGetUserInfo(e) {
        console.log(e.detail.userInfo)
      }
    }
    
    for (let i = 0; i < types.length; ++i) {
      (function (type) {
        pageObject[type] = function () {
          const key = type + 'Size'
          const changedData = {}
          changedData[key] =
            this.data[key] === 'default' ? 'mini' : 'default'
          this.setData(changedData)
        }
      }(types[i]))
    }
    
    export default OnekitPage(pageObject)

</script>

<style>
    button{
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .button-sp-area{
      margin: 0 auto;
      width: 60%;
    }
    .mini-btn{
      margin-right: 5px;
    }
</style>
