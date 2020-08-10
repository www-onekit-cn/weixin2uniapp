export default class websocket {
  constructor(uni_ws) {
    this.uni_ws = uni_ws;
  }
  // /////////////close///////////////
  close(wx_object) {
    if (!wx_object) {
      return;
    }
    let uni_object = {};
    let wx_code = wx_object.code;
    let wx_reason = wx_object.reason;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null;
    //////////////////
    if (wx_code) {
      uni_object.code = wx_code;
    }
    if (wx_reason) {
      uni_object.reason = wx_reason;
    }
    uni_object.success = function (uni_res) {
      var wx_res = {
        errMsg: "close:ok",
      };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    };
    uni_object.fail = function (uni_res) {
      uni_res = {
        errMsg: "close:fail",
      }
      if (wx_fail) {
        wx_fail(uni_res);
      }
      if (wx_complete) {
        wx_complete(uni_res);
      }
    };
    this.uni_ws.close(uni_object);

  }
  // /////////////send///////////////
  send(wx_object) {
    if (!wx_object) {
      return;
    }
    let uni_object = {};
    let wx_data = wx_object.data;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null;
    ////////////////////
    if (wx_data) {
      uni_object.data = wx_data;
    }
    uni_object.success = function (uni_res) {
      var wx_res = {
        errMsg: "send:ok",
      };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    };
    uni_object.fail = function (uni_res) {
      uni_res = {
        errMsg: "send:fail",
      }
      if (wx_fail) {
        wx_fail(uni_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    };
    this.uni_ws.send(uni_object);
  }
// /////////////onOpen///////////////
// wx有 header profile  quick没有
  onOpen(wx_callback) {
    this.uni_ws.onopen = wx_callback;
  }
  // /////////////onMessage///////////////
  onMessage(wx_callback) {
    this.uni_ws.onmessage = wx_callback;
  }
// /////////////onClose///////////////
  onClose(wx_callback) {
    this.uni_ws.onclose = function (res) {
      wx_callback(res);
    };
  }
  onError(wx_callback) {
    this.uni_ws.onerror = function(res){
      wx_callback(res);
    };
  }
  
}