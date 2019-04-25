// pages/topic/topic.js
import { topic, topicReplies,userinfo} from "../../utils/API"
import { timestampFormat} from "../../utils/util"
const app = getApp();
Page({
  data: {
    topicId: null,
    topic: {},
    replies: [],
    article:{}
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
        self.setData({
          topic: res.data[0]
        })
        //转化markdown
        let data = app.towxml.toJson(
          res.data[0].content_rendered,        // `markdown`或`html`文本内容
          'markdown'              // `markdown`或`html`
        );
        data.theme = 'light';
        self.setData({
          article: data
        });
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
    wx.navigateTo({
      url: `/pages/user/user?value=${userId}`
    })
  },
  onShareAppMessage: function (res) {
    let title = this.data.topic.title;
    return {
      title: title,
      path: '/pages/topic/topic?id='+this.data.topicId
    }
  },
  toIndex(){
    wx.switchTab({
      url:'../hot/hot'
    })
  }
})