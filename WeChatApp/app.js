//app.js
const Bmob = require('utils/Bmob-1.6.5.min.js');
const utils = require('utils/util.js');
Bmob.initialize("fdf46626a3c550f8c8e09fa8de43acf0", "cea7369474d40e8745a7f2b4c25f9519");
wx.u = utils
App({
  onLaunch: function () {
    Bmob.User.auth().then(res=>{
      console.log(res)
      console.log('一键登陆成功')
    }).catch(err => {
      console.log(err)
    });

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: null
  }
})