import Vue from 'vue'
export default function(wx_object) {
	const uniapp_object = {
		onLaunch(uni_launchOpions) {
			let wx_launchOpions = {}
			/*
			uni_launchOpions => wx_launchOpions
			*/
			wx_launchOpions = uni_launchOpions
			wx_launchOpions.shareTicket = undefined
			wx_launchOpions.referrerInfo = {}
			//////////////////////
			this.onekit_launchOpions = wx_launchOpions
			if (wx_object.onLaunch) {
				wx_object.onLaunch.call(this, wx_launchOpions)
				// wx_object.onLaunch(wx_launchOpions)
			}
		},
		onShow(uni_showOpions) {
			let wx_showOpions = {}
			wx_showOpions = uni_showOpions
			this.onekit_showOptions = wx_showOpions
			if (wx_object.onShow) {
				wx_object.onShow.call(this, uni_showOpions)
			}
		},
		onUnhandledRejection(uni_rejectionFn) {
			this.onekit_rejectionFn = uni_rejectionFn
		}
	}
	return uniapp_object;
}
