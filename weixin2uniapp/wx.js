
import wx_cloud from './serverless/wx.cloud'
export default class wx {

	//////////////////////  基础  ///////////////////////////

	static canIUse(schema) {
		return uni.canIUse(schema);
	}

	static base64ToArrayBuffer(base64) {
		return uni.base64ToArrayBuffer(base64);
	}

	static arrayBufferToBase64(arrayBuffer) {
		return uni.arrayBufferToBase64(arrayBuffer);
	}

	//////// 系统 ///////   

	static getSystemInfoSync() {
		return uni.getSystemInfoSync()
	}

	static getSystemInfoAsync(object) {
		return coonsole.warn("getSystemInfoAsync is not support")
	}

	static getSystemInfo(object) {
		return uni.getSystemInfo()
	}

	//////// 更新 /////// 

	static updateWeChatApp(object) {
		return coonsole.warn("updateWeChatApp is not support")
	}

	static getUpdateManager() {
		return uni.getUpdateManager()
	}

  //////// 生命周期 /////

	static getLaunchOptionsSync() {
		return coonsole.warn("getLaunchOptionsSync is not support")
	}

	static getEnterOptionsSync() {
		return coonsole.warn("getEnterOptionsSync is not support")
	}

	//////// 应用级事件 /////

	static onUnhandledRejection(callback) {
		return coonsole.warn("onUnhandledRejection is not support")
	}

	static onThemeChange(callback) {
		return uni.onThemeChange(callback)
	}

	static onPageNotFound(callback) {
		return uni.onPageNotFound(callback)
	}

	static onError(callback) {
		return uni.onError(callback)
	}

	static onAudioInterruptionBegin(callback) {
		return coonsole.warn("onAudioInterruptionBegin is not support")
	}

	static onAudioInterruptionBegin(callback) {
		return coonsole.warn("onAudioInterruptionBegin is not support")
	}

	static onAppShow(callback) {
		return uni.onAppShow(callback)
	}

	static onAppHide(callback) {
		return uni.onAppHide(callback)
	}

	static offUnhandledRejection(callback) {
		return coonsole.warn("offUnhandledRejection is not support")
	}

	static offThemeChange(callback) {
		return coonsole.warn("offThemeChange is not support")
	}

	static offPageNotFound(callback) {
		return uni.offPageNotFound(callback)
	}

	static offError(callback) {
		return uni.offError(callback)
	}

	static offAudioInterruptionEnd(callback) {
		return coonsole.warn("offAudioInterruptionEnd is not support")
	}

	static offAudioInterruptionBegin(callback) {
		return coonsole.warn("offAudioInterruptionBegin is not support")
	}

	static offAppShow(callback) {
		return uni.offError(callback)
	}

	static offAppHide(callback) {
		return uni.offError(callback)
	}

	/////// 调试 /////
	static setEnableDebug(object) {
		return uni.setEnableDebug(object)
	}

	static getRealtimeLogManager(object) {
		return coonsole.warn("getRealtimeLogManager is not support")
	}

	static getLogManager(object) {
		return coonsole.warn("getLogManager is not support")
	}

	/////// 调试 /////
	static env() {
		const res = {
			USER_DATA_PATH: "https://usr"
		}
		return res
	}
	
	//////////////////////  路由  /////////////////////

	static switchTab(object) {
		return uni.switchTab(object)
	}

	static reLaunch(object) {
		return uni.reLaunch(object)
	}

	static redirectTo(object) {
		return uni.redirectTo(object)
	}

	static navigateTo(object) {
		return uni.navigateTo(object)
	}

	static navigateBack(object) {
		return uni.navigateBack(object)
	}

	///////////////// 界面 ////////////////////

	static showToast(object) {
		return uni.showToast(object)
	}

	static showModal(object) {
		return uni.showModal(object)
	}

	static showLoading(object) {
		return uni.showLoading(object)
	}

	static showActionSheet(object) {
		return uni.showActionSheet(object)
	}

	static hideToast(object) {
		return uni.hideToast(object)
	}

	static hideLoading(object) {
		return uni.hideLoading(object)
	}

	static enableAlertBeforeUnload(object) {
		return coonsole.warn("enableAlertBeforeUnload is not support")
	}

	static disableAlertBeforeUnload(object) {
		return coonsole.warn("disableAlertBeforeUnload is not support")
	}

	static showNavigationBarLoading(object) {
		return uni.showNavigationBarLoading(object)
	}

	static setNavigationBarTitle(object) {
		return uni.setNavigationBarTitle(object)
	}

	static setNavigationBarColor(object) {
		return uni.setNavigationBarColor(object)
	}

	static hideNavigationBarLoading(object) {
		return uni.hideNavigationBarLoading(object)
	}

	static hideHomeButton(object) {
		return uni.hideHomeButton(object)
	}

	static setBackgroundTextStyle(object) {
		return uni.setBackgroundTextStyle(object)
	}

	static setBackgroundColor(object) {
		return uni.setBackgroundColor(object)
	}

	static showTabBarRedDot(object) {
		return uni.showTabBarRedDot(object)
	}

	static showTabBar(object) {
		return uni.showTabBar(object)
	}

	static setTabBarStyle(object) {
		return uni.setTabBarStyle(object)
	}

	static setTabBarItem(object) {
		return uni.setTabBarItem(object)
	}

	static setTabBarBadge(object) {
		return uni.setTabBarBadge(object)
	}

	static removeTabBarBadge(object) {
		return uni.removeTabBarBadge(object)
	}

	static hideTabBarRedDot(object) {
		return uni.hideTabBarRedDot(object)
	}

	static hideTabBar(object) {
		return uni.hideTabBar(object)
	}

	static loadFontFace(object) {
		return uni.loadFontFace(object)
	}

	static stopPullDownRefresh(object) {
		return uni.stopPullDownRefresh(object)
	}

	static startPullDownRefresh(object) {
		return uni.startPullDownRefresh(object)
	}

	static pageScrollTo(object) {
		return uni.pageScrollTo(object)
	}

	static createAnimation(object) {
		return uni.createAnimation(object)
	}

	static setTopBarText(object) {
		return coonsole.warn("setTopBarText is not support")
	}

	static nextTick(callback) {
		return uni.nextTick(callback)
	}

	static getMenuButtonBoundingClientRect() {
		return uni.getMenuButtonBoundingClientRect()
	}

	static setWindowSize(object) {
		return coonsole.warn("setWindowSize is not support")
	}

	static onWindowResize(callback) {
		return uni.onWindowResize(callback)
	}

	static offWindowResize(callback) {
		return uni.offWindowResize(callback)
	}

	static onKeyboardHeightChange(callback) {
		return uni.onKeyboardHeightChange(callback)
	}

	static offKeyboardHeightChange(callback) {
		return coonsole.warn("offKeyboardHeightChange is not support")
	}

	static hideKeyboard(object) {
		return uni.hideKeyboard(object)
	}

	static getSelectedTextRange(object) {
		return coonsole.warn("getSelectedTextRange is not support")
	}

	///////////////// 网络 ////////////////////

	/////// 请求 /////
	static request(object) {
		return uni.request(object)
	}

	/////// 下载 /////
	static downloadFile(object) {
		return uni.downloadFile(object)
	}

	/////// 上传 /////
	static uploadFile(object) {
		return uni.uploadFile(object)
	}

	/////// websocket /////
	static sendSocketMessage(object) {
		return uni.sendSocketMessage(object)
	}

	static onSocketOpen(callback) {
		return uni.onSocketOpen(callback)
	}

	static onSocketMessage(callback) {
		return uni.onSocketMessage(callback)
	}

	static onSocketError(callback) {
		return uni.onSocketError(callback)
	}

	static onSocketClose(callback) {
		return uni.onSocketClose(callback)
	}

	static connectSocket(object) {
		return uni.connectSocket(object)
	}

	static closeSocket(object) {
		return uni.closeSocket(object)
	}

	static closeSocket(object) {
		return uni.closeSocket(object)
	}

	/////// mDNS /////
	static stopLocalServiceDiscovery(object) {
		return coonsole.warn("stopLocalServiceDiscovery is not support")
	}

	static startLocalServiceDiscovery(object) {
		return coonsole.warn("startLocalServiceDiscovery is not support")
	}

	static onLocalServiceResolveFail(object) {
		return coonsole.warn("onLocalServiceResolveFail is not support")
	}

	static onLocalServiceLost(callback) {
		return coonsole.warn("onLocalServiceLost is not support")
	}

	static onLocalServiceFound(callback) {
		return coonsole.warn("onLocalServiceFound is not support")
	}

	static onLocalServiceDiscoveryStop(callback) {
		return coonsole.warn("onLocalServiceDiscoveryStop is not support")
	}

	static offLocalServiceResolveFail(callback) {
		return coonsole.warn("offLocalServiceResolveFail is not support")
	}

	static offLocalServiceLost(callback) {
		return coonsole.warn("offLocalServiceLost is not support")
	}

	static offLocalServiceFound(callback) {
		return coonsole.warn("offLocalServiceFound is not support")
	}

	static offLocalServiceDiscoveryStop(callback) {
		return coonsole.warn("offLocalServiceDiscoveryStop is not support")
	}

	/////// UDP /////
	static createUDPSocket() {
		return coonsole.warn("createUDPSocket is not support")
	}

	/////////////////// 数据缓存 //////////////////////////

	static setStorageSync(string, any) {
		return uni.setStorageSync(string, any)
	}

	static setStorage(object) {
		return uni.setStorage(object)
	}

	static removeStorageSync(string) {
		return uni.setStorage(string)
	}

	static removeStorage(object) {
		return uni.removeStorage(object)
	}

	static getStorageSync(key) {
		return uni.getStorageSync(key)
	}

	static getStorageInfoSync() {
		return uni.getStorageInfoSync()
	}

	static getStorageInfo(object) {
		return uni.getStorageInfo(object)
	}

	static getStorage(object) {
		return uni.getStorage(object)
	}

	static clearStorageSync() {
		return uni.clearStorageSync()
	}

	static clearStorage(object) {
		return uni.clearStorage(object)
	}

	/////// 周期性更新 /////
	static setBackgroundFetchToken(object) {
		return coonsole.warn("setBackgroundFetchToken is not support")
	}

	static onBackgroundFetchData(callback) {
		return coonsole.warn("onBackgroundFetchData is not support")
	}

	static getBackgroundFetchToken(object) {
		return coonsole.warn("getBackgroundFetchToken is not support")
	}

	static getBackgroundFetchData(object) {
		return coonsole.warn("getBackgroundFetchData is not support")
	}

	/////////////////// 媒体 //////////////////////////

	/////// 地图 /////
	static createMapContext(sting, obejct) {
		return uni.createMapContext(sting, obejct)
	}

	/////// 图片 /////
	static saveImageToPhotosAlbum(object) {
		return uni.saveImageToPhotosAlbum(object)
	}

	static previewMedia(object, showmenu) {
		return coonsole.warn("previewMedia is not support")
	}

	static previewImage(object, showmenu) {
		return uni.previewImage(object)
	}

	static getImageInfo(object) {
		return uni.getImageInfo(object)
	}

	static compressImage(object) {
		return uni.compressImage(object)
	}

	static chooseMessageFile(object) {
		return coonsole.warn("chooseMessageFile is not support")
	}

	static chooseImage(object) {
		return uni.chooseImage(object)
	}

	/////// 视频 /////
	static saveVideoToPhotosAlbum(object) {
		return uni.saveVideoToPhotosAlbum(object)
	}

	static openVideoEditor(object) {
		return uni.saveVideoToPhotosAlbum(object)
	}

	static getVideoInfo(object) {
		return uni.getVideoInfo(object)
	}

	static createVideoContext(string, object) {
		return uni.createVideoContext(string, object)
	}

	static compressVideo(object) {
		return uni.compressVideo(object)
	}

	static chooseVideo(object) {
		return uni.chooseVideo(object)
	}

	static chooseMedia(object) {
		return uni.chooseMedia(object)
	}

	/////// 音频 /////
	static stopVoice(object) {
		return coonsole.warn("stopVoice is not support")
	}

	static setInnerAudioOption(object) {
		return coonsole.warn("setInnerAudioOption is not support")
	}

	static playVoice(object) {
		return coonsole.warn("playVoice is not support")
	}

	static pauseVoice(object) {
		return coonsole.warn("pauseVoice is not support")
	}

	static getAvailableAudioSources(object) {
		return coonsole.warn("getAvailableAudioSources is not support")
	}

	static createMediaAudioPlayer() {
		return coonsole.warn("createMediaAudioPlayer is not support")
	}

	static createInnerAudioContext() {
		return uni.createInnerAudioContext()
	}

	static createAudioContext(string, object) {
		return coonsole.warn("createAudioContext is not support")
	}

	/////// 背景音频 /////
	static stopBackgroundAudio(object) {
		return coonsole.warn("stopBackgroundAudio is not support")
	}

	static seekBackgroundAudio(object) {
		return coonsole.warn("seekBackgroundAudio is not support")
	}

	static playBackgroundAudio(object) {
		return coonsole.warn("playBackgroundAudio is not support")
	}

	static pauseBackgroundAudio(object) {
		return coonsole.warn("pauseBackgroundAudio is not support")
	}

	static onBackgroundAudioStop(callback) {
		return coonsole.warn("onBackgroundAudioStop is not support")
	}

	static onBackgroundAudioPlay(callback) {
		return coonsole.warn("onBackgroundAudioPlay is not support")
	}

	static onBackgroundAudioPause(callback) {
		return coonsole.warn("onBackgroundAudioPause is not support")
	}

	static getBackgroundAudioPlayerState(callback) {
		return coonsole.warn("getBackgroundAudioPlayerState is not support")
	}

	static getBackgroundAudioManager() {
		return uni.getBackgroundAudioManager()
	}

	/////// 实时音视频 /////
	static createLivePusherContext() {
		return uni.createLivePusherContext()
	}

	static createLivePlayerContext(string, object) {
		return uni.createLivePlayerContext(string, object)
	}

	/////// 录音 /////
	static stopRecord(object) {
		return coonsole.warn("stopRecord is not support")
	}

	static startRecord(object) {
		return coonsole.warn("startRecord is not support")
	}

	static getRecorderManager() {
		return uni.getRecorderManager()
	}

	/////// 相机 /////
	static createCameraContext() {
		return uni.createCameraContext()
	}

	/////// 富文本 /////

	/////// 音视频合成 /////
	static createMediaContainer() {
		return uni.createMediaContainer()
	}

	/////// 实时语音 /////
	static updateVoIPChatMuteConfig(object) {
		return coonsole.warn("updateVoIPChatMuteConfig is not support")
	}

	static subscribeVoIPVideoMembers(object) {
		return coonsole.warn("subscribeVoIPVideoMembers is not support")
	}

	static onVoIPVideoMembersChanged(callback) {
		return coonsole.warn("onVoIPVideoMembersChanged is not support")
	}

	static onVoIPChatSpeakersChanged(callback) {
		return coonsole.warn("onVoIPChatSpeakersChanged is not support")
	}

	static onVoIPChatMembersChanged(callback) {
		return coonsole.warn("onVoIPChatMembersChanged is not support")
	}

	static onVoIPChatInterrupted(callback) {
		return coonsole.warn("onVoIPChatInterrupted is not support")
	}

	static offVoIPVideoMembersChanged(callback) {
		return coonsole.warn("offVoIPVideoMembersChanged is not support")
	}

	static offVoIPChatMembersChanged(callback) {
		return coonsole.warn("offVoIPChatMembersChanged is not support")
	}

	static offVoIPChatInterrupted(callback) {
		return coonsole.warn("offVoIPChatInterrupted is not support")
	}

	static joinVoIPChat(object) {
		return coonsole.warn("joinVoIPChat is not support")
	}

	static exitVoIPChat(object) {
		return coonsole.warn("exitVoIPChat is not support")
	}

	/////// 画面录制器 /////
	static createMediaRecorder(object1, object2) {
		return coonsole.warn("createMediaRecorder is not support")
	}

	/////// 视频解码器 /////
	static createVideoDecoder() {
		return coonsole.warn("createVideoDecoder is not support")
	}

	/////////////////// 位置 //////////////////////////
	static stopLocationUpdate(object) {
		return coonsole.warn("stopLocationUpdate is not support")
	}

	static startLocationUpdateBackground(object) {
		return coonsole.warn("startLocationUpdateBackground is not support")
	}

	static startLocationUpdate(object) {
		return coonsole.warn("startLocationUpdate is not support")
	}

	static openLocation(object) {
		return uni.openLocation(object)
	}

	static onLocationChange(callback) {
		return coonsole.warn("onLocationChange is not support")
	}

	static offLocationChange(callback) {
		return coonsole.warn("offLocationChange is not support")
	}

	static getLocation(object) {
		return uni.getLocation(object)
	}

	static chooseLocation(object) {
		return uni.chooseLocation(object)
	}

	/////////////////// 转发 //////////////////////////

	static updateShareMenu(object) {
		return coonsole.warn("updateShareMenu is not support")
	}

	static showShareMenu(object) {
		return uni.showShareMenu(object)
	}

	static hideShareMenu(object) {
		return uni.hideShareMenu(object)
	}

	static getShareInfo(object) {
		return coonsole.warn("getShareInfo is not support")
	}

	static authPrivateMessage(object) {
		return coonsole.warn("authPrivateMessage is not support")
	}

	/////////////////// 画布 //////////////////////////

	static createOffscreenCanvas() {
		return coonsole.warn("createOffscreenCanvas is not support")
	}

	static createCanvasContext(string,object) {
		return coonsole.warn("createCanvasContext is not support")
	}

	static canvasToTempFilePath(object1,object2) {
		return coonsole.warn("canvasToTempFilePath is not support")
	}

	static canvasPutImageData(object1,object2) {
		return coonsole.warn("canvasPutImageData is not support")
	}

	static canvasGetImageData(object1,object2) {
		return coonsole.warn("canvasGetImageData is not support")
	}

	/////////////////// 文件 //////////////////////////

	static saveFileToDisk(object) {
		return coonsole.warn("saveFileToDisk is not support")
	}

	static saveFile(object) {
		return uni.saveFile(object)
	}

	static removeSavedFile(object) {
		return uni.removeSavedFile(object)
	}

	static openDocument(object) {
		return uni.openDocument(object)
	}

	static getSavedFileList(object) {
		return uni.getSavedFileList(object)
	}

	static getSavedFileInfo(object) {
		return uni.getSavedFileInfo(object)
	}

	static getFileSystemManager() {
		return uni.getFileSystemManager(object)
	}

	static getFileInfo(object) {
		return uni.getFileInfo(object)
	}

	/////////////////// 开放接口 //////////////////////////

  /////// 登陆 /////
	static login(object) {
		return uni.login(object)
	}

	static checkSession(object) {
		return uni.checkSession(object)
	}

	/////// 小程序跳转 /////
	static navigateToMiniProgram(object) {
		return uni.navigateToMiniProgram(object)
	}

	static navigateBackMiniProgram(object) {
		return uni.navigateBackMiniProgram(object)
	}

	/////// 账号信息 /////
	static getAccountInfoSync() {
		return uni.getAccountInfoSync()
	}

	/////// 用户信息 /////
	static getUserInfo(object) {
		return uni.getUserInfo(object)
	}

	/////// 数据上报 /////
	static reportMonitor(string,number) {
		return coonsole.warn("reportMonitor is not support")
	}

	/////// 数据分析 /////
	static reportAnalytics(string,object) {
		return coonsole.warn("reportAnalytics is not support")
	}

	/////// 支付 /////
	static requestPayment(object) {
		return uni.requestPayment(object)
	}

	/////// 授权 /////
	static authorize(object) {
		return uni.authorize(object)
	}

	/////// 设置 /////
	static openSetting(object) {
		return uni.openSetting(object)
	}

	static getSetting(object) {
		return uni.getSetting(object)
	}

	/////// 收货地址 /////
	static chooseAddress(object) {
		return uni.chooseAddress(object)
	}

	/////// 卡劵 /////
	static openCard(object) {
		return coonsole.warn("openCard is not support")
	}

	static addCard(object) {
		return coonsole.warn("addCard is not support")
	}

	/////// 发票 /////
	static chooseInvoiceTitle(object) {
		return uni.chooseInvoiceTitle(object)
	}

	static chooseInvoice(object) {
		return coonsole.warn("chooseInvoice is not support")
	}

	/////// 生物认证 /////
	static startSoterAuthentication(object) {
		return uni.startSoterAuthentication(object)
	}

	static checkIsSupportSoterAuthentication(object) {
		return uni.checkIsSupportSoterAuthentication(object)
	}

	static checkIsSoterEnrolledInDevice(object) {
		return uni.checkIsSoterEnrolledInDevice(object)
	}

	/////// 微信运动 /////
	static getWeRunData(object) {
		return coonsole.warn("getWeRunData is not support")
	}

	/////// 性能 /////
	static reportPerformance(number1,number2,string) {
		return coonsole.warn("reportPerformance is not support")
	}

	static getWeRunData() {
		return coonsole.warn("getWeRunData is not support")
	}

	/////// 订阅消息 /////
	static requestSubscribeMessage(object) {
		return uni.requestSubscribeMessage(object)
	}

	/////// 微信红包 /////
	static showRedPackage(object) {
		return coonsole.warn("showRedPackage is not support")
	}

	/////// 群工具 /////
	static getGroupEnterInfo(object) {
		return coonsole.warn("getGroupEnterInfo is not support")
	}

	/////////////////// 设备 //////////////////////////

	/////// 外围设备 /////
	static onBLEPeripheralConnectionStateChanged(callback) {
		return coonsole.warn("onBLEPeripheralConnectionStateChanged is not support")
	}

	static offBLEPeripheralConnectionStateChanged(callback) {
		return coonsole.warn("offBLEPeripheralConnectionStateChanged is not support")
	}

	static createBLEPeripheralServer(callback) {
		return coonsole.warn("createBLEPeripheralServer is not support")
	}

	/////// iBeacon /////
	static stopBeaconDiscovery(object) {
		return uni.stopBeaconDiscovery(object);
	}

	static startBeaconDiscovery(object) {
		return uni.startBeaconDiscovery(object);
	}

	static onBeaconUpdate(callback) {
		return uni.onBeaconUpdate(callback);
	}

	static onBeaconServiceChange(callback) {
		return uni.onBeaconServiceChange(callback);
	}

  static offBeaconUpdate(callback) {
		return coonsole.warn("offBeaconUpdate is not support")
	}

	static offBeaconServiceChange(callback) {
		return coonsole.warn("offBeaconServiceChange is not support")
	}

	static getBeacons(object) {
		return uni.getBeacons(object);
	}

	/////// NFC /////
	static stopHCE(object) {
		return coonsole.warn("stopHCE is not support")
	}

	static startHCE(object) {
		return coonsole.warn("startHCE is not support")
	}

	static sendHCEMessage(object) {
		return coonsole.warn("sendHCEMessage is not support")
	}

	static onHCEMessage(callback) {
		return coonsole.warn("onHCEMessage is not support")
	}

	static offHCEMessage(callback) {
		return coonsole.warn("offHCEMessage is not support")
	}

	static getNFCAdapter() {
		return coonsole.warn("getNFCAdapter is not support")
	}

	static getHCEState(object) {
		return coonsole.warn("getHCEState is not support")
	}

	/////// WiFi //////
	static stopWifi(object) {
		return coonsole.warn("stopWifi is not support")
	}

	static startWifi(object) {
		return coonsole.warn("startWifi is not support")
	}

	static setWifiList(object) {
		return coonsole.warn("setWifiList is not support")
	}

	static onWifiConnected(callback) {
		return coonsole.warn("onWifiConnected is not support")
	}

	static onGetWifiList(callback) {
		return coonsole.warn("onGetWifiList is not support")
	}

	static offWifiConnected(callback) {
		return coonsole.warn("offWifiConnected is not support")
	}

	static offGetWifiList(callback) {
		return coonsole.warn("offGetWifiList is not support")
	}

	static getWifiList(object) {
		return coonsole.warn("stopWifi is not support")
	}

	static getConnectedWifi(object) {
		return coonsole.warn("startWifi is not support")
	}

	static getConnectedWifi(object) {
		return coonsole.warn("setWifiList is not support")
	}

	/////// 联系人 //////
	static addPhoneContact(object) {
		return uni.addPhoneContact(object)
	}

	/////// 无障碍 //////
	static checkIsOpenAccessibility(object) {
		return coonsole.warn("checkIsOpenAccessibility is not support")
	}

	/////// 低功耗蓝牙 //////
	static writeBLECharacteristicValue(object) {
		return uni.writeBLECharacteristicValue(object)
	}

	static setBLEMTU(object) {
		return uni.setBLEMTU(object)
	}

	static readBLECharacteristicValue(object) {
		return uni.readBLECharacteristicValue(object)
	}

	static onBLECharacteristicValueChange(callback) {
		return uni.onBLECharacteristicValueChange(callback)
	}

	static offBLEConnectionStateChange(callback) {
		return coonsole.warn("offBLEConnectionStateChange is not support")
	}

	static offBLECharacteristicValueChange(callback) {
		return coonsole.warn("offBLECharacteristicValueChange is not support")
	}

	static notifyBLECharacteristicValueChange(object) {
		return uni.notifyBLECharacteristicValueChange(object)
	}

	static makeBluetoothPair(object) {
		return coonsole.warn("makeBluetoothPair is not support")
	}

	static getBLEDeviceServices(object) {
		return uni.getBLEDeviceServices(object)
	}

	static getBLEDeviceRSSI(object) {
		return uni.getBLEDeviceRSSI(object)
	}

	static getBLEDeviceCharacteristics(object) {
		return uni.getBLEDeviceCharacteristics(object)
	}

	static createBLEConnection(object) {
		return uni.createBLEConnection(object)
	}

	static closeBLEConnection(object) {
		return uni.closeBLEConnection(object)
	}

	/////// 蓝牙 ///////
	static stopBluetoothDevicesDiscovery(object) {
		return uni.stopBluetoothDevicesDiscovery(object)
	}

	static startBluetoothDevicesDiscovery(object) {
		return uni.startBluetoothDevicesDiscovery(object)
	}

	static openBluetoothAdapter(object) {
		return uni.openBluetoothAdapter(object)
	}

	static onBluetoothDeviceFound(callback) {
		return uni.onBluetoothDeviceFound(callback)
	}

	static onBluetoothAdapterStateChange(callback) {
		return uni.onBluetoothAdapterStateChange(callback)
	}

	static offBluetoothDeviceFound(callback) {
		return coonsole.warn("offBluetoothDeviceFound is not support")
	}

	static offBluetoothAdapterStateChange(callback) {
		return coonsole.warn("offBluetoothAdapterStateChange is not support")
	}

	static getConnectedBluetoothDevices(object) {
		return uni.getConnectedBluetoothDevices(object)
	}

	static getBluetoothDevices(object) {
		return uni.getBluetoothDevices(object)
	}

	static getBluetoothAdapterState(object) {
		return uni.getBluetoothAdapterState(object)
	}

	static closeBluetoothAdapter(object) {
		return uni.closeBluetoothAdapter(object)
	}

	/////// 电量 ///////
	static getBatteryInfoSync() {
		return coonsole.warn("getBatteryInfoSync is not support")
	}

	static getBatteryInfo(object) {
		return coonsole.warn("getBatteryInfo is not support")
	}

	/////// 剪切板 ///////
	static setClipboardData(object) {
		return uni.setClipboardData(object)
	}

	static getClipboardData(object) {
		return uni.getClipboardData(object)
	}

	/////// 网络 ///////
	static onNetworkStatusChange(callback) {
		return uni.onNetworkStatusChange(callback)
	}

	static offNetworkStatusChange(callback) {
		return coonsole.warn("offNetworkStatusChange is not support")
	}

	static getNetworkType(object) {
		return uni.getNetworkType(object)
	}

	/////// 屏幕 ///////
	static setScreenBrightness(object) {
		return uni.setScreenBrightness(object)
	}

	static setKeepScreenOn(object) {
		return uni.setKeepScreenOn(object)
	}

	static onUserCaptureScreen(callback) {
		return uni.onUserCaptureScreen(callback)
	}

	static offUserCaptureScreen(callback) {
		return coonsole.warn("offUserCaptureScreen is not support")
	}

	static getScreenBrightness(object) {
		return uni.getScreenBrightness(object)
	}

	/////// 电话 ///////
	static makePhoneCall(object) {
		return uni.makePhoneCall(object)
	}

	/////// 加速计 ///////
	static stopAccelerometer(object) {
		return uni.stopAccelerometer(object)
	}

	static startAccelerometer(object) {
		return uni.startAccelerometer(object)
	}

	static onAccelerometerChange(callback) {
		return uni.onAccelerometerChange(callback)
	}

	static offAccelerometerChange(callback) {
		return uni.offAccelerometerChange(callback)
	}

	/////// 罗盘 ///////
	static stopCompass(object) {
		return uni.stopAccelerometer(object)
	}

	static startCompass(object) {
		return uni.startCompass(object)
	}

	static onCompassChange(callback) {
		return uni.onCompassChange(callback)
	}

	static offCompassChange(callback) {
		return uni.offCompassChange(callback)
	}

	/////// 设备方向 ///////
	static stopDeviceMotionListening(object) {
		return coonsole.warn("stopDeviceMotionListening is not support")
	}

	static startDeviceMotionListening(object) {
		return coonsole.warn("startDeviceMotionListening is not support")
	}

	static onDeviceMotionChange(callback) {
		return coonsole.warn("onDeviceMotionChange is not support")
	}

	static offDeviceMotionChange(callback) {
		return coonsole.warn("offDeviceMotionChange is not support")
	}

	/////// 陀螺仪 ///////
	static stopGyroscope(object) {
		return uni.stopGyroscope(object)
	}

	static startGyroscope(object) {
		return uni.startGyroscope(object)
	}

	static onGyroscopeChange(callback) {
		return uni.onGyroscopeChange(callback)
	}

	static offGyroscopeChange(callback) {
		return coonsole.warn("offGyroscopeChange is not support")
	}

	/////// 性能 ///////
	static onMemoryWarning(callback) {
		return uni.onMemoryWarning(callback)
	}

	static offMemoryWarning(callback) {
		return coonsole.warn("offMemoryWarning is not support")
	}

	/////// 扫码 ///////
	static scanCode(object) {
		return uni.scanCode(object)
	}

	/////// 振动 ///////
	static vibrateShort(object) {
		return uni.vibrateShort(object)
	}

	static vibrateLong(object) {
		return uni.vibrateLong(object)
	}

	/////////////////// Worker //////////////////////////
	static createWorker(string,object) {
		return coonsole.warn("createWorker is not support")
	}

	/////////////////// 第三方平台 //////////////////////////
	static getExtConfigSync() {
		return uni.getExtConfigSync()
	}

	static getExtConfig(object) {
		return uni.getExtConfig(object)
	}

	/////////////////// WXML //////////////////////////
	static createSelectorQuery() {
		return uni.createSelectorQuery()
	}

	static createIntersectionObserver(object1,object2) {
		return uni.createSelectorQuery(object1,object2)
	}

	/////////////////// 广告 //////////////////////////
	static createRewardedVideoAd(object) {
		return uni.createRewardedVideoAd(object)
	}

	static createInterstitialAd(object) {
		return uni.createInterstitialAd(object)
	}

	//////////////////   cloud   //////////////////////
	
	static get cloud() {
		return wx_cloud
	}
}