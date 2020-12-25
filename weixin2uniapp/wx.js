
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
		return console.error("getSystemInfoAsync暂不支持")
	}

	static getSystemInfo(object) {
		return uni.getSystemInfo()
	}

	//////// 更新 /////// 

	static updateWeChatApp(object) {
		return console.error("updateWeChatApp暂不支持")
	}

	static getUpdateManager() {
		return uni.getUpdateManager()
	}

  //////// 生命周期 /////

	static getLaunchOptionsSync() {
		return console.error("getLaunchOptionsSync暂不支持")
	}

	static getEnterOptionsSync() {
		return console.error("getEnterOptionsSync暂不支持")
	}

	//////// 应用级事件 /////

	static onUnhandledRejection(callback) {
		return console.error("onUnhandledRejection暂不支持")
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
		return console.error("onAudioInterruptionBegin暂不支持")
	}

	static onAudioInterruptionBegin(callback) {
		return console.error("onAudioInterruptionBegin暂不支持")
	}

	static onAppShow(callback) {
		return uni.onAppShow(callback)
	}

	static onAppHide(callback) {
		return uni.onAppHide(callback)
	}

	static offUnhandledRejection(callback) {
		return console.error("offUnhandledRejection暂不支持")
	}

	static offThemeChange(callback) {
		return console.error("offThemeChange暂不支持")
	}

	static offPageNotFound(callback) {
		return uni.offPageNotFound(callback)
	}

	static offError(callback) {
		return uni.offError(callback)
	}

	static offAudioInterruptionEnd(callback) {
		return console.error("offAudioInterruptionEnd暂不支持")
	}

	static offAudioInterruptionBegin(callback) {
		return console.error("offAudioInterruptionBegin暂不支持")
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
		return console.error("getRealtimeLogManager暂不支持")
	}

	static getLogManager(object) {
		return console.error("getLogManager暂不支持")
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
		return console.error("enableAlertBeforeUnload暂不支持")
	}

	static disableAlertBeforeUnload(object) {
		return console.error("disableAlertBeforeUnload暂不支持")
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
		return console.error("setTopBarText暂不支持")
	}

	static nextTick(callback) {
		return uni.nextTick(callback)
	}

	static getMenuButtonBoundingClientRect() {
		return uni.getMenuButtonBoundingClientRect()
	}

	static setWindowSize(object) {
		return console.error("setWindowSize暂不支持")
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
		return console.error("offKeyboardHeightChange暂不支持")
	}

	static hideKeyboard(object) {
		return uni.hideKeyboard(object)
	}

	static getSelectedTextRange(object) {
		return console.error("getSelectedTextRange暂不支持")
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
		return console.error("stopLocalServiceDiscovery暂不支持")
	}

	static startLocalServiceDiscovery(object) {
		return console.error("startLocalServiceDiscovery暂不支持")
	}

	static onLocalServiceResolveFail(object) {
		return console.error("onLocalServiceResolveFail暂不支持")
	}

	static onLocalServiceLost(callback) {
		return console.error("onLocalServiceLost暂不支持")
	}

	static onLocalServiceFound(callback) {
		return console.error("onLocalServiceFound暂不支持")
	}

	static onLocalServiceDiscoveryStop(callback) {
		return console.error("onLocalServiceDiscoveryStop暂不支持")
	}

	static offLocalServiceResolveFail(callback) {
		return console.error("offLocalServiceResolveFail暂不支持")
	}

	static offLocalServiceLost(callback) {
		return console.error("offLocalServiceLost暂不支持")
	}

	static offLocalServiceFound(callback) {
		return console.error("offLocalServiceFound暂不支持")
	}

	static offLocalServiceDiscoveryStop(callback) {
		return console.error("offLocalServiceDiscoveryStop暂不支持")
	}

	/////// UDP /////
	static createUDPSocket() {
		return console.error("createUDPSocket暂不支持")
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
		return console.error("setBackgroundFetchToken暂不支持")
	}

	static onBackgroundFetchData(callback) {
		return console.error("onBackgroundFetchData暂不支持")
	}

	static getBackgroundFetchToken(object) {
		return console.error("getBackgroundFetchToken暂不支持")
	}

	static getBackgroundFetchData(object) {
		return console.error("getBackgroundFetchData暂不支持")
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
		return console.error("previewMedia暂不支持")
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
		return console.error("chooseMessageFile暂不支持")
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
		return console.error("stopVoice暂不支持")
	}

	static setInnerAudioOption(object) {
		return console.error("setInnerAudioOption暂不支持")
	}

	static playVoice(object) {
		return console.error("playVoice暂不支持")
	}

	static pauseVoice(object) {
		return console.error("pauseVoice暂不支持")
	}

	static getAvailableAudioSources(object) {
		return console.error("getAvailableAudioSources暂不支持")
	}

	static createMediaAudioPlayer() {
		return console.error("createMediaAudioPlayer暂不支持")
	}

	static createInnerAudioContext() {
		return uni.createInnerAudioContext()
	}

	static createAudioContext(string, object) {
		return console.error("createAudioContext暂不支持")
	}

	/////// 背景音频 /////
	static stopBackgroundAudio(object) {
		return console.error("stopBackgroundAudio暂不支持")
	}

	static seekBackgroundAudio(object) {
		return console.error("seekBackgroundAudio暂不支持")
	}

	static playBackgroundAudio(object) {
		return console.error("playBackgroundAudio暂不支持")
	}

	static pauseBackgroundAudio(object) {
		return console.error("pauseBackgroundAudio暂不支持")
	}

	static onBackgroundAudioStop(callback) {
		return console.error("onBackgroundAudioStop暂不支持")
	}

	static onBackgroundAudioPlay(callback) {
		return console.error("onBackgroundAudioPlay暂不支持")
	}

	static onBackgroundAudioPause(callback) {
		return console.error("onBackgroundAudioPause暂不支持")
	}

	static getBackgroundAudioPlayerState(callback) {
		return console.error("getBackgroundAudioPlayerState暂不支持")
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
		return console.error("stopRecord暂不支持")
	}

	static startRecord(object) {
		return console.error("startRecord暂不支持")
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
		return console.error("updateVoIPChatMuteConfig暂不支持")
	}

	static subscribeVoIPVideoMembers(object) {
		return console.error("subscribeVoIPVideoMembers暂不支持")
	}

	static onVoIPVideoMembersChanged(callback) {
		return console.error("onVoIPVideoMembersChanged暂不支持")
	}

	static onVoIPChatSpeakersChanged(callback) {
		return console.error("onVoIPChatSpeakersChanged暂不支持")
	}

	static onVoIPChatMembersChanged(callback) {
		return console.error("onVoIPChatMembersChanged暂不支持")
	}

	static onVoIPChatInterrupted(callback) {
		return console.error("onVoIPChatInterrupted暂不支持")
	}

	static offVoIPVideoMembersChanged(callback) {
		return console.error("offVoIPVideoMembersChanged暂不支持")
	}

	static offVoIPChatMembersChanged(callback) {
		return console.error("offVoIPChatMembersChanged暂不支持")
	}

	static offVoIPChatInterrupted(callback) {
		return console.error("offVoIPChatInterrupted暂不支持")
	}

	static joinVoIPChat(object) {
		return console.error("joinVoIPChat暂不支持")
	}

	static exitVoIPChat(object) {
		return console.error("exitVoIPChat暂不支持")
	}

	/////// 画面录制器 /////
	static createMediaRecorder(object1, object2) {
		return console.error("createMediaRecorder暂不支持")
	}

	/////// 视频解码器 /////
	static createVideoDecoder() {
		return console.error("createVideoDecoder暂不支持")
	}

	/////////////////// 位置 //////////////////////////
	static stopLocationUpdate(object) {
		return console.error("stopLocationUpdate暂不支持")
	}

	static startLocationUpdateBackground(object) {
		return console.error("startLocationUpdateBackground暂不支持")
	}

	static startLocationUpdate(object) {
		return console.error("startLocationUpdate暂不支持")
	}

	static openLocation(object) {
		return uni.openLocation(object)
	}

	static onLocationChange(callback) {
		return console.error("onLocationChange暂不支持")
	}

	static offLocationChange(callback) {
		return console.error("offLocationChange暂不支持")
	}

	static getLocation(object) {
		return uni.getLocation(object)
	}

	static chooseLocation(object) {
		return uni.chooseLocation(object)
	}

	/////////////////// 转发 //////////////////////////

	static updateShareMenu(object) {
		return console.error("updateShareMenu暂不支持")
	}

	static showShareMenu(object) {
		return uni.showShareMenu(object)
	}

	static hideShareMenu(object) {
		return uni.hideShareMenu(object)
	}

	static getShareInfo(object) {
		return console.error("getShareInfo暂不支持")
	}

	static authPrivateMessage(object) {
		return console.error("authPrivateMessage暂不支持")
	}

	/////////////////// 画布 //////////////////////////

	static createOffscreenCanvas() {
		return console.error("createOffscreenCanvas暂不支持")
	}

	static createCanvasContext(string,object) {
		return console.error("createCanvasContext暂不支持")
	}

	static canvasToTempFilePath(object1,object2) {
		return console.error("canvasToTempFilePath暂不支持")
	}

	static canvasPutImageData(object1,object2) {
		return console.error("canvasPutImageData暂不支持")
	}

	static canvasGetImageData(object1,object2) {
		return console.error("canvasGetImageData暂不支持")
	}

	/////////////////// 文件 //////////////////////////

	static saveFileToDisk(object) {
		return console.error("saveFileToDisk暂不支持")
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
		return console.error("reportMonitor暂不支持")
	}

	/////// 数据分析 /////
	static reportAnalytics(string,object) {
		return console.error("reportAnalytics暂不支持")
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
		return console.error("openCard暂不支持")
	}

	static addCard(object) {
		return console.error("addCard暂不支持")
	}

	/////// 发票 /////
	static chooseInvoiceTitle(object) {
		return uni.chooseInvoiceTitle(object)
	}

	static chooseInvoice(object) {
		return console.error("chooseInvoice暂不支持")
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
		return console.error("getWeRunData暂不支持")
	}

	/////// 性能 /////
	static reportPerformance(number1,number2,string) {
		return console.error("reportPerformance暂不支持")
	}

	static getWeRunData() {
		return console.error("getWeRunData暂不支持")
	}

	/////// 订阅消息 /////
	static requestSubscribeMessage(object) {
		return uni.requestSubscribeMessage(object)
	}

	/////// 微信红包 /////
	static showRedPackage(object) {
		return console.error("showRedPackage暂不支持")
	}

	/////// 群工具 /////
	static getGroupEnterInfo(object) {
		return console.error("getGroupEnterInfo暂不支持")
	}

	/////////////////// 设备 //////////////////////////

	/////// 外围设备 /////
	static onBLEPeripheralConnectionStateChanged(callback) {
		return console.error("onBLEPeripheralConnectionStateChanged暂不支持")
	}

	static offBLEPeripheralConnectionStateChanged(callback) {
		return console.error("offBLEPeripheralConnectionStateChanged暂不支持")
	}

	static createBLEPeripheralServer(callback) {
		return console.error("createBLEPeripheralServer暂不支持")
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
		return console.error("offBeaconUpdate暂不支持")
	}

	static offBeaconServiceChange(callback) {
		return console.error("offBeaconServiceChange暂不支持")
	}

	static getBeacons(object) {
		return uni.getBeacons(object);
	}

	/////// NFC /////
	static stopHCE(object) {
		return console.error("stopHCE暂不支持")
	}

	static startHCE(object) {
		return console.error("startHCE暂不支持")
	}

	static sendHCEMessage(object) {
		return console.error("sendHCEMessage暂不支持")
	}

	static onHCEMessage(callback) {
		return console.error("onHCEMessage暂不支持")
	}

	static offHCEMessage(callback) {
		return console.error("offHCEMessage暂不支持")
	}

	static getNFCAdapter() {
		return console.error("getNFCAdapter暂不支持")
	}

	static getHCEState(object) {
		return console.error("getHCEState暂不支持")
	}

	/////// WiFi //////
	static stopWifi(object) {
		return console.error("stopWifi暂不支持")
	}

	static startWifi(object) {
		return console.error("startWifi暂不支持")
	}

	static setWifiList(object) {
		return console.error("setWifiList暂不支持")
	}

	static onWifiConnected(callback) {
		return console.error("onWifiConnected暂不支持")
	}

	static onGetWifiList(callback) {
		return console.error("onGetWifiList暂不支持")
	}

	static offWifiConnected(callback) {
		return console.error("offWifiConnected暂不支持")
	}

	static offGetWifiList(callback) {
		return console.error("offGetWifiList暂不支持")
	}

	static getWifiList(object) {
		return console.error("stopWifi暂不支持")
	}

	static getConnectedWifi(object) {
		return console.error("startWifi暂不支持")
	}

	static getConnectedWifi(object) {
		return console.error("setWifiList暂不支持")
	}

	/////// 联系人 //////
	static addPhoneContact(object) {
		return uni.addPhoneContact(object)
	}

	/////// 无障碍 //////
	static checkIsOpenAccessibility(object) {
		return console.error("checkIsOpenAccessibility暂不支持")
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
		return console.error("offBLEConnectionStateChange暂不支持")
	}

	static offBLECharacteristicValueChange(callback) {
		return console.error("offBLECharacteristicValueChange暂不支持")
	}

	static notifyBLECharacteristicValueChange(object) {
		return uni.notifyBLECharacteristicValueChange(object)
	}

	static makeBluetoothPair(object) {
		return console.error("makeBluetoothPair暂不支持")
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
		return console.error("offBluetoothDeviceFound暂不支持")
	}

	static offBluetoothAdapterStateChange(callback) {
		return console.error("offBluetoothAdapterStateChange暂不支持")
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
		return console.error("getBatteryInfoSync暂不支持")
	}

	static getBatteryInfo(object) {
		return console.error("getBatteryInfo暂不支持")
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
		return console.error("offNetworkStatusChange暂不支持")
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
		return console.error("offUserCaptureScreen暂不支持")
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
		return console.error("stopDeviceMotionListening暂不支持")
	}

	static startDeviceMotionListening(object) {
		return console.error("startDeviceMotionListening暂不支持")
	}

	static onDeviceMotionChange(callback) {
		return console.error("onDeviceMotionChange暂不支持")
	}

	static offDeviceMotionChange(callback) {
		return console.error("offDeviceMotionChange暂不支持")
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
		return console.error("offGyroscopeChange暂不支持")
	}

	/////// 性能 ///////
	static onMemoryWarning(callback) {
		return uni.onMemoryWarning(callback)
	}

	static offMemoryWarning(callback) {
		return console.error("offMemoryWarning暂不支持")
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
		return console.error("createWorker暂不支持")
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

}