// topicList.js
import { userinfo,getTopicInfo } from '../../utils/API'
Page({
  data: {
    title: '话题列表',
    topics: [],
    hidden: false
  },
  // 事件处理函数
  // redictDetail: function(e) {
  //   var id = e.currentTarget.id,
  //     url = '../detail/detail?id=' + id;
      
  //   wx.navigateTo({
  //     url: url
  //   })
  // },
  fetchData: function(id) {
    var that = this;
    
    that.setData({
      hidden: false
    })
    wx.request({
      url: getTopicInfo({
        node_id: id
      }),
     
      success: function(res) {
        
        that.setData({
          topics: res.data
        })
        setTimeout(function() {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },
  onLoad: function (options) {
    this.fetchData(options.id);
  },
  showContent(e) {
    const topicId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/topic/topic?id=${topicId}`
    })
  }
})
