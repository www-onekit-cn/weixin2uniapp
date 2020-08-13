import CanvasContext from "./api/CanvasContext"
import VideoContext from "./api/VideoContext"
import CameraContext from "./api/CameraContext"
import InnerAudioContext from "./api/InnerAudioContext"
import LivePlayerContext from "./api/LivePlayerContext"
import WORKER from "./api/WORKER"
import wx_cloud from "./wx.cloud"
import onekit from "./onekit"
import UpdateManager from './api/UpdateManager.js'
import Animation from './api/Animation.js'
export default class wx {
	/////////////////// animation //////////////////////////
	static createAnimation(object) {
		return uni.createAnimation(object);
	}
	static createAnimation(object) {
		return new Animation(uni.createAnimation(object))
	}
	///////////////// basic ////////////////////////////////
	static canIUse(schema) {
		return uni.canIUse(schema);
	}
	static getSystemInfo(object) {
		return uni.getSystemInfo(object);
	}
	static getSystemInfoSync() {
		return uni.getSystemInfoSync();
	}
	static base64ToArrayBuffer(base64) {
		return uni.base64ToArrayBuffer(base64);
	}
	static arrayBufferToBase64(arrayBuffer) {
		return uni.arrayBufferToBase64(arrayBuffer);
	}
	static updateWeChatApp() {
		return console.log("暂不支持！")
	}
	static getUpdateManager() {
		return new UpdateManager(uni.getUpdateManager())
	}
	static getLaunchOptionsSync(object) {
		return uni.getLaunchOptionsSync(object);
	}
	static getEnterOptionsSync(object) {
		return console.log("暂不支持")
	}
	///////////////////////////应用级事件/////////////////////////////
	static onUnhandledRejection(callback) {
		return
	}
	static onThemeChange(callback) {
		return
	}
	static onAudioInterruptionEnd(callback) {
		return console.log("暂不支持")
	}
	static onAudioInterruptionBegin(callback) {
		return console.log("暂不支持")
	}
	static offUnhandledRejection(callback) {
		return console.log("暂不支持")
	}
	static offThemeChange(callback) {
		return console.log("暂不支持")
	}
	static offAudioInterruptionEnd(callback) {
		return console.log("暂不支持")
	}
	static offAudioInterruptionBegin(callback) {
		return console.log("暂不支持")
	}
	static offPageNotFound(callback) {
		return uni.offPageNotFound(callback);
	}
	static onPageNotFound(callback) {
		return uni.onPageNotFound(callback);
	}
	static offError(callback) {
		return uni.offError(callback);
	}
	static onError(callback) {
		return uni.onError(callback);
	}
	static offAppShow(callback) {
		return uni.offAppShow(callback);
	}
	static onAppShow(callback) {
		return uni.onAppShow(callback);
	}
	static offAppHide(callback) {
		return uni.offAppHide(callback);
	}
	static onAppHide(callback) {
		return uni.onAppHide(callback);
	}
	static setEnableDebug(object) {
		return uni.setEnableDebug(object);
	}
	static getRealtimeLogManager() {
		return console.log("暂不支持")
	}
	static getLogManager(object) {
		return /*uni.getLogManager(object);*/ console.log("暂不支持")
	}
	/////////////////// Canvas ///////////////////
	static drawCanvas(object) {
		var canvasId = object.canvasId;
		var actions = object.actions;
		var canvasContext = uni.createCanvasContext(canvasId);
		for (var action of actions) {
			var data = action.data;
			switch (action.method) {
				case "save":
					canvasContext.save();
					break;
				case "restore":
					canvasContext.restore();
					break;
				case "setFillStyle":
					canvasContext.setFillStyle(onekit.color.array2str(data[1]));
					break;
				case "setStrokeStyle":
					canvasContext.setStrokeStyle(onekit.color.array2str(data[1]));
					break;
				case "setFontSize":
					canvasContext.setFontSize(data[0]);
					break;
				case "setGlobalAlpha":
					canvasContext.setGlobalAlpha(data[0]);
					break;
				case "setShadow":
					var dat = data[3];
					canvasContext.setShadow(data[0], data[1], data[2], onekit.color.array2str(data[3]));
					break;
				case "drawImage":
					canvasContext.drawImage.apply(canvasContext, data)
					break;
				case "fillText":
					canvasContext.fillText.apply(canvasContext, data)
					break;
				case "setLineCap":
					canvasContext.setLineCap(data[0]);
					break;
				case "setLineJoin":
					canvasContext.setLineJoin(data[0]);
					break;
				case "setLineWidth":
					canvasContext.setLineWidth(data[0]);
					break;
				case "setMiterLimit":
					canvasContext.setMiterLimit(data[0]);
					break;
				case "rotate":
					canvasContext.rotate(data[0]);
					break;
				case "scale":
					canvasContext.scale(data[0], data[1]);
					break;
				case "translate":
					canvasContext.translate(data[0], data[1]);
					break;
				case "strokePath":
					canvasContext.beginPath()
					for (var dat of data) {
						var dt = dat.data;
						switch (dat.method) {
							case "rect":
								canvasContext.strokeRect(dt[0], dt[1], dt[2], dt[3]);
								break;
							case "moveTo":
								canvasContext.moveTo(dt[0], dt[1]);
								break;
							case "lineTo":
								canvasContext.lineTo(dt[0], dt[1]);
								break;
							case "closePath":
								canvasContext.closePath();
								break;
							case "arc":
								canvasContext.arc.apply(canvasContext, dt);
								break;
							case "quadraticCurveTo":
								canvasContext.quadraticCurveTo.apply(canvasContext, dt);
								break;
							case "bezierCurveTo":
								canvasContext.bezierCurveTo.apply(canvasContext, dt);
								break;

							default:
								console.log("[drawCanvas-strokePath]", dat.method);
								break;
						}
					}
					canvasContext.stroke()
					break
				case "fillPath":
					for (var dat of data) {
						var dt = dat.data;
						switch (dat.method) {
							case "rect":
								canvasContext.fillRect(dt[0], dt[1], dt[2], dt[3]);
								break;
							case "arc":
								canvasContext.arc.apply(canvasContext, dt);
								break;
							default:
								console.log("[drawCanvas-fillPath]", dat.method);
								break;
						}
					}
					canvasContext.fill()
					break;
				case "clearRect":
					canvasContext.clearRect(data[0], data[1], data[2], data[3]);
					break;
				default:
					console.log("[drawCanvas]", action.method);
					break;
			}
		}
		canvasContext.draw();


	}
	// ///////////////////////////////////////////
	static setBackgroundFetchToken(uni_object) {
		var wx_token = uni_object.token;
		var wx_success = uni_object.success;
		var wx_fail = uni_object.fail;
		var wx_complete = uni_object.complete;
		/////////////////
		uni.setStorage({
			key: "wx_token",
			data: {
				wx_token: wx_token,
			},
		})
		uni_object.success = function(wx_res) {
			var wx_res = {
				errMsg: "setBackgroundFetchToken:ok"
			};
			if (wx_success) {
				wx_success(wx_res);
			}
			if (wx_success) {
				wx_complete(wx_res);
			}
		};
	};
	static getBackgroundFetchToken(uni_object) {
		var quick_success = uni_object.success;
		var quick_fail = uni_object.fail;
		var quick_complete = uni_object.complete;
		console.log(quick_success)
		uni.getStorage({
			key: 'wx_token',
			success(res) {
				console.log(res.data)
			}
		})
		uni_object.success = function(wx_res) {
			var wx_res = {
				errMsg: "getBackgroundFetchToken:ok"
			};
			console.log("", wx_res)

			if (wx_success) {
				quick_success(wx_res);
			}
			if (wx_success) {
				quick_complete(wx_res);
			}
		};
	};
	static onBackgroundFetchData(callback) {
		return uni.onBackgroundFetchData(callback)
	}
	static getBackgroundFetchData(object) {
		console.log("")
		//uni.getBackgroundFetchData(object)
	}

	static createCanvasContext(canvasId) {
		return new CanvasContext(uni.createCanvasContext(canvasId));
	}
	static createVideoContext(videoId, ui) {
		return new VideoContext(uni.createVideoContext(videoId));
	}
	static createInnerAudioContext(audioId, ui) {
		return new InnerAudioContext(uni.createInnerAudioContext(audioId));
	}
	static createLivePlayerContext(livePlayerId, ui) {
		return new LivePlayerContext(uni.createLivePlayerContext(livePlayerId));
	}
	static createCameraContext() {
		return new CameraContext(uni.createCameraContext());
	}
	static canvasToTempFilePath(object) {
		return uni.canvasToTempFilePath(object);
	}
	static canvasPutImageData(object) {
		return uni.canvasPutImageData(object)
	};
	static canvasGetImageData(object) {
		return uni.canvasGetImageData(object)
	};
	////////////// Device //////////////////
	static onBeaconServiceChange(object) {
		return uni.onBeaconServiceChange(object);
	}
	static onBeaconUpdate(object) {
		return uni.onBeaconUpdate(object);
	}
	static getBeacons(object) {
		return uni.getBeacons(object);
	}
	static stopBeaconDiscovery(object) {
		return uni.stopBeaconDiscovery(object);
	}
	static startBeaconDiscovery(object) {
		return uni.startBeaconDiscovery(object);
	}
	static stopWifi(object) {
		return uni.stopWifi(object);
	}
	static startWifi(object) {
		return uni.startWifi(object);
	}
	static setWifiList(object) {
		return uni.setWifiList(object);
	}
	static onWifiConnected(object) {
		return uni.onWifiConnected(object);
	}
	static onGetWifiList(object) {
		return uni.onGetWifiList(object);
	}
	static getWifiList(object) {
		return uni.getWifiList(object);
	}
	static getConnectedWifi(object) {
		return uni.getConnectedWifi(object);
	}
	static connectWifi(object) {
		return uni.connectWifi(object);
	}
	//
	static onAccelerometerChange(callback) {
		return uni.onAccelerometerChange(callback);
	}
	static stopAccelerometer(object) {
		return uni.stopAccelerometer(object);
	}
	static startAccelerometer(object) {
		return uni.startAccelerometer(object);
	}
	static getBatteryInfoSync(object) {
		return uni.getBatteryInfoSync(object);
	}
	static _getBatteryInfo(result) {
		return uni._getBatteryInfo(object);
	}
	static getBatteryInfo(object) {
		return uni.getBatteryInfo(object);
	}
	//
	static getClipboardData(object) {
		return uni.getClipboardData(object);
	}
	static setClipboardData(object) {
		return uni.setClipboardData(object);
	}
	static onCompassChange(callback) {
		return uni.onCompassChange(callback);
	}
	static stopCompass(object) {
		return uni.stopCompass(object);
	}
	static startCompass(object) {
		return uni.startCompass(object);
	}
	static addPhoneContact(object) {
		return uni.addPhoneContact(object);
	}
	static onGyroscopeChange(callback) {
		return uni.onGyroscopeChange(object);
	}
	static stopGyroscope(object) {
		return uni.stopGyroscope(object);
	}
	static startGyroscope(object) {
		return uni.startGyroscope(object);
	}
	//
	static onDeviceMotionChange(object) {
		return uni.onDeviceMotionChange(object);
	}
	static stopDeviceMotionListening(object) {
		return uni.stopDeviceMotionListening(object);
	}
	static startDeviceMotionListening(object) {
		return uni.startDeviceMotionListening(object);
	}
	static startDeviceMotionListening(object) {
		return uni.startDeviceMotionListening(object);
	}
	//
	static getNetworkType = function(object) {
		return uni.getNetworkType(object);
	}
	static _network = function(res) {
		return uni._network(object);
	}
	static onNetworkStatusChange(object) {
		return uni.onNetworkStatusChange(object);
	}
	//
	static makePhoneCall = function(object) {
		return uni.makePhoneCall(object);
	}

	static scanCode = function(object) {
		return uni.scanCode(object);
	}
	//
	static vibrateLong(object) {
		return uni.vibrateLong(object);
	}
	static vibrateShort(object) {
		return uni.vibrateShort(object);
	}
	//
	static onMemoryWarning(object) {
		return uni.onMemoryWarning(object);
	}
	//
	static writeBLECharacteristicValue(object) {
		return uni.writeBLECharacteristicValue(object);
	}
	static readBLECharacteristicValue(object) {
		return uni.readBLECharacteristicValue(object);
	}
	static onBLEConnectionStateChange(object) {
		return uni.onBLEConnectionStateChange(object);
	}
	static onBLECharacteristicValueChange(object) {
		return uni.onBLECharacteristicValueChange(object);
	}
	static notifyBLECharacteristicValueChange(object) {
		return uni.notifyBLECharacteristicValueChange(object);
	}
	static getBLEDeviceServices(object) {
		return uni.getBLEDeviceServices(object);
	}
	static getBLEDeviceCharacteristics(object) {
		return uni.getBLEDeviceCharacteristics(object);
	}
	static createBLEConnection(object) {
		return uni.createBLEConnection(object);
	}
	static closeBLEConnection(object) {
		return uni.closeBLEConnection(object);
	}
	//
	static stopBluetoothDevicesDiscovery(object) { /* return uni.stopBluetoothDevicesDiscovery(object);*/ }
	static startBluetoothDevicesDiscovery(object) {
		return uni.startBluetoothDevicesDiscovery(object);
	}
	static openBluetoothAdapter(object) { /* return uni.openBluetoothAdapter(object); */ }
	static onBluetoothDeviceFound(object) {
		return uni.onBluetoothDeviceFound(object);
	}
	static onBluetoothAdapterStateChange(object) {
		return uni.onBluetoothAdapterStateChange(object);
	}
	static getConnectedBluetoothDevices(object) {
		return uni.getConnectedBluetoothDevices(object);
	}
	static getBluetoothDevices(object) {
		return uni.getBluetoothDevices(object);
	}
	static getBluetoothAdapterState(object) {
		return uni.getBluetoothAdapterState(object);
	}
	static closeBluetoothAdapter(object) {
		return uni.closeBluetoothAdapter(object);
	}
	//
	static stopHCE(object) {
		return uni.stopHCE(object);
	}
	static startHCE(object) {
		return uni.startHCE(object);
	}
	static sendHCEMessage(object) {
		return uni.sendHCEMessage(object);
	}
	static onHCEMessage(object) {
		return uni.onHCEMessage(object);
	}
	static getHCEState(object) {
		return uni.getHCEState(object);
	}
	//
	static setScreenBrightness(object) {
		return uni.setScreenBrightness(object);
	}
	static setKeepScreenOn(object) {
		return uni.setKeepScreenOn(object);
	}
	static onUserCaptureScreen(object) {
		return uni.onUserCaptureScreen(object);
	}

	static getScreenBrightness(object) {
		return uni.getScreenBrightness(object);
	}
	/////////////////// Ext //////////////
	static getExtConfigSync(object) {
		return uni.getExtConfigSync(object)
	}
	static getExtConfig(object) {
		return uni.getExtConfig(object)
	}
	//////////////////// File //////////
	static getFileSystemManager(object) {
		return uni.getFileSystemManager(object)
	}
	static getFileInfo(object) {
		return uni.getFileInfo(object)
	}
	static removeSavedFile(object) {
		return uni.removeSavedFile(object)
	}
	static getSavedFileInfo(object) {
		return uni.getSavedFileInfo(object)
	}
	static getSavedFileList(object) {
		return uni.getSavedFileList(object)
	}
	static openDocument(object) {
		return uni.openDocument(object)
	}
	static saveFile(object) {
		return uni.saveFile(object);
	}
	//////////// Location ///////////////
	static openLocation(object) {
		return uni.openLocation(object)
	}
	static getLocation(object) {
		return uni.getLocation(object)
	}
	static chooseLocation(object) {
		return uni.chooseLocation(object)
	}
	////////// Media ////////////////////
	static createMapContext(object) {
		return uni.createMapContext(object)
	}
	static compressImage(object) {
		return uni.compressImage(object)
	}
	static saveImageToPhotosAlbum(object) {
		return uni.saveImageToPhotosAlbum(object)
	}
	static getImageInfo(object) {
		return uni.getImageInfo(object)
	}
	static previewImage(object) {
		return uni.previewImage(object)
	}
	static chooseImage(object) {
		return uni.chooseImage(object);
	}
	static previewMedia(object) {
		return console.log("暂不支持！")
	} 
	static chooseMessageFile(object) {
		return console.log("暂不支持！")
	} //uni.chooseMessageFile(object)
	////////////////////////////////////////////////////////////////

	static saveVideoToPhotosAlbum(object) {
		return uni.saveVideoToPhotosAlbum(object)
	}
	static chooseVideo(object) {
		return uni.chooseVideo(object)
	}
	static chooseMedia(object) {
		return console.log("暂不支持！")
	}
	static createVideoContext(object) {
		return uni.createVideoContext(object)
	}
	static stopVoice(object) {
		object.success = function() {
			console.log("VVV    ")
		}

		return uni.stopVoice(object)
	}
	static pauseVoice(object) {
		return uni.pauseVoice(object)
	}
	static playVoice(object) {
		return uni.playVoice(object)
	}
	static setInnerAudioOption(object) {
		var obeyMuteSwitch = true;
		return uni.setInnerAudioOption(object)
	}
	static getAvailableAudioSources(object) {
		return uni.getAvailableAudioSources(object)
	}
	static createInnerAudioContext(object) {
		return uni.createInnerAudioContext(object)
	}
	static createAudioContext(object) {
		return uni.createAudioContext(object)
	}
	static onBackgroundAudioStop(object) {
		return uni.onBackgroundAudioStop(object)
	}
	static onBackgroundAudioPause(object) {
		return uni.onBackgroundAudioPause(object)
	}
	static onBackgroundAudioPlay(object) {
		return uni.onBackgroundAudioPlay(object)
	}
	static stopBackgroundAudio(object) {
		return uni.stopBackgroundAudio(object)
	}
	static seekBackgroundAudio(object) {
		return uni.seekBackgroundAudio(object)
	}
	static pauseBackgroundAudio(object) {
		return uni.pauseBackgroundAudio(object)
	}
	static playBackgroundAudio(object) {
		return uni.playBackgroundAudio(object)
	}
	static getBackgroundAudioPlayerState(object) {
		return uni.getBackgroundAudioPlayerState(object)
	}
	static getBackgroundAudioManager(object) {
		return uni.getBackgroundAudioManager(object)
	}
	static createLivePusherContext(object) {
		return uni.createLivePusherContext(object)
	}
	static startRecord(object) {
		var recorderManager = uni.getRecorderManager(object);
		recorderManager.onStart(() => {
			var res = "stopRecord才会返回tempFilePath!!";
			if (object.success) {
				object.success(res);
			}
			if (object.complete) {
				object.complete(res);
			}
		});
		var result = recorderManager.start();
		return result;
	}
	static stopRecord(object) {
		var recorderManager = uni.getRecorderManager(object);
		recorderManager.onStop((res) => {
			if (object.success) {
				object.success(res);
			}
			if (object.complete) {
				object.complete(res);
			}
		});
		var result = recorderManager.stop();
		return result;
	}
	static getRecorderManager(object) {
		return uni.getRecorderManager(object)
	}
	//////////////// Network ///////////////
	static request(object) {
		return uni.request(object);
	}

	static downloadFile(object) {
		return uni.downloadFile(object)
	}
	static uploadFile(object) {
		return uni.uploadFile(object)
	}
	//
	static connectSocket(object) {
		return uni.connectSocket(object)
	}
	static onSocketError(callback) {
		return uni.onSocketError(callback)
	}
	static onSocketMessage(callback) {
		return uni.onSocketMessage(callback)
	}
	static onSocketClose(callback) {
		return uni.onSocketClose(callback)
	}
	static onSocketOpen(callback) {
		return uni.connectSocket(callback)
	}
	static sendSocketMessage(object) {
		return uni.sendSocketMessage(object)
	}
	static closeSocket(callback) {
		return uni.closeSocket(callback)
	}
	static offLocalServiceResolveFail(callback) {
		return uni.offLocalServiceResolveFail(callback)
	}
	static onLocalServiceResolveFail(callback) {
		return uni.onLocalServiceResolveFail(callback)
	}
	static onLocalServiceDiscoveryStop(callback) {
		return uni.onLocalServiceDiscoveryStop(callback)
	}
	static offLocalServiceLost(callback) {
		return uni.offLocalServiceLost(callback)
	}
	static onLocalServiceLost(callback) {
		return uni.onLocalServiceLost(callback)
	}
	static onLocalServiceFound(callback) {
		return uni.onLocalServiceFound(callback)
	}
	static stopLocalServiceDiscovery(object) {
		return uni.stopLocalServiceDiscovery(object)
	}
	static startLocalServiceDiscovery(object) {
		return uni.startLocalServiceDiscovery(object)
	}
	static offLocalServiceFound(callback) {
		return uni.offLocalServiceFound(callback);
	}
	static offLocalServiceDiscoveryStop(callback) {
		return uni.offLocalServiceDiscoveryStop(callback);
	}
	static createUDPSocket() {
		return uni.createUDPSocket()
	}
	///////// Open Interface //////////
	static checkSession(object) {
		return uni.checkSession(object);
	}

	static login = function(object) {
		var that = this;
		if (!object) {
			return uni.login(object);
		}
		var object2 = {
			//   scopes: "auth_user"
		};
		object2.success = function(res) {
			uni._sessoion = new Date().getTime();
			getApp().onejit.jscode = res.authCode;
			var result = {
				code: res.authCode
			};
			if (object.success) {
				object.success(result);
			}
			if (object.complete) {
				object.complete(complete);
			}
		}
		object2.fail = function(res) {
			if (object.fail) {
				object.fail(res);
			}
			if (object.complete) {
				object.complete(res);
			}
		}
		return uni.login(object2);
	};

	static getUserInfo() {
		return uni.getUserInfo({
			success(res) {
				uni.request({
					url: getApp().onejit.server + "userinfo", // 仅为示例，并非真实的接口地址
					method: 'POST',
					responseType: 'text',
					data: {
						jscode: getApp().onejit.jscode,
						data: res.toString()
					},
					success: res => {
						console.log(res.data);
					},
					fail: err => {
						console.log('错误码：' + err.errCode);
						console.log('错误信息：' + err.errMsg);
					}
				});

			}

		});
	}
	static getOpenData = function(object) {
		return uni.getOpenData(object);
	}
	static getPhoneNumber = function(object) {
		return uni.getPhoneNumber(object);
	}
	static navigateToMiniProgram(object) {
		return uni.navigateToMiniProgram(object)
	}
	static navigateBackMiniProgram(object) {
		return uni.navigateBackMiniProgram(object)
	}
	static getAccountInfoSync(object) {
		return uni.getAccountInfoSync(object)
	}

	static reportMonitor(object) {
		return uni.reportMonitor(object)
	}
	static reportAnalytics(object, eventName) {
		return uni.reportAnalytics(object, eventName)
	}
	static requestPayment(object) {
		return uni.requestPayment(object);
	}
	static authorize(object) {
		return uni.authorize(object)
	}
	static openSetting(object) {
		return uni.openSetting(object)
	}
	static getSetting(object) {
		return uni.getSetting(object)
	}
	static chooseAddress(object) {
		return uni.chooseAddress(object)
	}
	static openCard(object) {
		return uni.openCard(object);
	}
	static addCard = function(object) {
		return uni.addCard(object);
	}
	static chooseInvoiceTitle(object) {
		return uni.chooseInvoiceTitle(object)
	}
	static chooseInvoice(object) {
		return uni.chooseInvoice(object)
	}
	static startSoterAuthentication(object) {
		return uni.startSoterAuthentication(object)
	}
	static checkIsSupportSoterAuthentication(object) {
		return uni.checkIsSupportSoterAuthentication(object)
	}
	static checkIsSoterEnrolledInDevice(object) {
		return uni.checkIsSoterEnrolledInDevice(object)
	}
	static getWeRunData(object) {
		return uni.getWeRunData(object)
	}
	static reportMonitor(name, value) {
		var js_code = getApp().onejit.jscode;
		uni.httpRequest({
			url: "http://192.168.0.106:8080/onekit-adapter/reportMonitor",
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			method: "POST",
			data: {
				js_code: js_code,
				name: name,
				number: value
			},
			success: (res) => {
				console.log("success")
				console.log(res.data);
			},
			fail: function(res) {
				console.log(res);
			},
			complete: function(res) {
				console.log(res)
			}
		});
	};
	////////// Router //////////////
	static navigateBack(object) {
		return uni.navigateBack(object);
	}
	static switchTab(object) {
		return uni.switchTab(object);
	}
	static navigateTo(object) {
		return uni.navigateTo(object);
	}
	static reLaunch(object) {
		return uni.reLaunch(object);
	}
	static redirectTo(object) {
		return uni.redirectTo(object);
	}
	///////////// Share /////////////
	static updateShareMenu(object) {
		return uni.updateShareMenu(object)
	}
	static showShareMenu(object) {
		return uni.showShareMenu(object);
	}
	static hideShareMenu(object) {
		return uni.hideShareMenu(object)
	}
	static getShareInfo(object) {
		return uni.getShareInfo(object)
	}
	/////////////// Storage //////////////
	static getStorageInfoSync(object) {
		return uni.getStorageInfoSync(object)
	}
	static getStorageInfo(object) {
		return uni.getStorageInfo(object)
	}
	static clearStorageSync(object) {
		return uni.clearStorageSync(object)
	}
	static clearStorage(object) {
		return uni.clearStorage(object)
	}
	static removeStorageSync(object) {
		return uni.removeStorageSync(object)
	}
	static removeStorage(object) {
		return uni.removeStorage(object)
	}
	static setStorageSync(key, value) {
		return uni.setStorageSync(key, value)
	}
	static setStorage(object) {
		return uni.setStorage(object)
	}
	static getStorageSync(key) {
		return uni.getStorageSync(key);
	}
	static getStorage(object) {
		return uni.getStorage(object)
	}
	////////////// UI ////////////////
	static showActionSheet(object) {
		return uni.showActionSheet(object);
	}
	static enableAlertBeforeUnload(object) {
		return console.log('暂不支持')
	}
	static disableAlertBeforeUnload(object) {
		return console.log('暂不支持')
	}
	static hideLoading(object) {
		return uni.hideLoading(object)
	}
	static showLoading(object) {
		return uni.showLoading(object);
	}
	static hideToast(object) {
		return uni.hideToast(object);
	}
	static showToast(object) {
		return uni.showToast(object);
	}
	static showModal(object) {
		return uni.showModal(object);
	}
	static setNavigationBarColor(object) {
		return uni.setNavigationBarColor(object)
	}
	static hideNavigationBarLoading(object) {
		return uni.hideNavigationBarLoading(object)
	}
	static showNavigationBarLoading(object) {
		return uni.showNavigationBarLoading(object)
	}
	static setNavigationBarTitle(object) {
		return uni.setNavigationBarTitle(object);
	};
	static setBackgroundTextStyle(object) {
		return uni.setBackgroundTextStyle(object)
	}
	static hideHomeButton(object) {
		return uni.hideHomeButton(object)
	}

	static setBackgroundColor(object) {
		return uni.setBackgroundColor(object)
	}
	static setTabBarItem(object) {
		return uni.setTabBarItem(object)
	}
	static setTabBarStyle(object) {
		return uni.setTabBarStyle(object)
	}
	static hideTabBar(object) {
		return uni.hideTabBar(object)
	}
	static showTabBar(object) {
		return uni.showTabBar(object)
	}
	static hideTabBarRedDot(object) {
		return uni.hideTabBarRedDot(object)
	}
	static showTabBarRedDot(object) {
		return uni.showTabBarRedDot(object)
	}
	static removeTabBarBadge(object) {
		return uni.removeTabBarBadge(object)
	}
	static setTabBarBadge(object) {
		return uni.setTabBarBadge(object)
	}

	static loadFontFace(object) {
		return uni.loadFontFace(object)
	}

	static stopPullDownRefresh(object) {
		return uni.stopPullDownRefresh(object);
	}
	static startPullDownRefresh(object) {
		return uni.startPullDownRefresh(object);
	}
	static pageScrollTo(object) {
		return uni.pageScrollTo(object)
	}
	static setTopBarText(object) {
		return uni.setTopBarText(object)
	}
	static nextTick(callback) {
		return uni.nextTick(callback)
	}
	static getMenuButtonBoundingClientRect(object) {
		return uni.getMenuButtonBoundingClientRect(object)
	}
	static offWindowResize(callback) {
		return uni.offWindowResize(callback)
	}
	static onWindowResize(callback) {
		return uni.onWindowResize(callback)
	}
	static setWindowSize() {
		return console.log("暂不支持")
	}
	////////////////键盘//////////////////////
	static onKeyboardHeightChange(callback) {
		return uni.onKeyboardHeightChange(callback)
	}
	static offKeyboardHeightChange() {
		return console.log("暂不支持")
	}
	static hideKeyboard(object) {
		return uni.hideKeyboard(object)
	}
	static getSelectedTextRange() {
		return console.log("暂不支持")
	}
	////////////// Worker ///////////////
	static createWorker(path) {
		return new WORKER(path);
	}
	////////////// WXML ///////////////
	static createSelectorQuery(object) {
		return uni.createSelectorQuery(object)
	}
	static createIntersectionObserver(object) {
		return uni.createIntersectionObserver(object)
	}
	/////////////////////////////////////
	static hideKeyboard(object) {
		return uni.hideKeyboard(object)
	}
	///////////// cloud ////////////////
	static get cloud() {
		return new wx_cloud();
	}
}
