// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    var that = this
    wx.getUserInfo({
      success(res) {
        that.setData({
          userInfo:res.userInfo
        })
      }
    })
  },
  onShareAppMessage(){
    return {
      title: '华特教育在线',
      path: '/pages/index/index',
      imageUrl:'/images/logo.png'
    }
  },
  about() {
    wx.showModal({
      title: '关于',
      content: '华特教育在线学习小程序',
      showCancel: false
    })
  }
})