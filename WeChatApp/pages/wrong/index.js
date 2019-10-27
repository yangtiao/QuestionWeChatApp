// pages/wrong/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectQuestionMenu: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    //获取套题
    wx.u.getError().then(res => {
      console.log(res.error)
      this.setData({
        objectQuestionMenu: res.error
      })
    })
  },
  /**
   * 选择题库
   */
  changeMenu(event) {
    console.log(event.currentTarget.dataset.item)
    var item = event.currentTarget.dataset.item
    wx.navigateTo({
      url: '/pages/wrongAnswer/index?menu=' + item.menu,
    })
  },
})