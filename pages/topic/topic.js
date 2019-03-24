// pages/topic/topic.js
import { topic, topicReplies,userinfo} from "../../utils/API"
import { timestampFormat} from "../../utils/util"
const md = require('./demo.md');
Page({
  data: {
    topicId: null,
    topic: {},
    replies: [],
    md: md
  },
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    const self = this
    this.setData({
      topicId: options.id
    })
    wx.request({
      url: `${topic}?id=${self.data.topicId}`,
      method: 'GET',
      success: function (res) {
        console.log(res.data[0]);
        self.setData({
          topic: res.data[0]
        })
        wx.setNavigationBarTitle({
          title: `${self.data.topic.node.title}`
        })
      }
    })
    wx.request({
      url: `${topicReplies}?topic_id=${self.data.topicId}`,
      method: 'GET',
      success: function (res) {
        for(let i=0;i<res.data.length;i++){
          res.data[i].created = timestampFormat(res.data[i].created);
        }
        self.setData({
          replies: res.data
        })
        wx.hideToast()
      }
    })
  },
  searchUser(e){
    const userId = e.currentTarget.dataset.name;
    console.log(userId);
    wx.navigateTo({
      url: `/pages/user/user?value=${userId}`
    })
  }
})