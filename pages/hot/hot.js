// pages/hot/hot.js
import { hotTopics } from '../../utils/API'
Page({
  data: {
    hotTopics: [],
    is_show: 1
  },
  onLoad: function (options) {
    const self = this
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    wx.request({
      url: hotTopics,
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        if(res.data.last_reply_by == ""){
          this.is_show = 0;
        }
        self.setData({
          hotTopics: res.data
        })
        wx.hideToast()
      }
    })
  },
  showContent(e) {
    const topicId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/topic/topic?id=${topicId}`
    })
  }
})