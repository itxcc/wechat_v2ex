// node.js
import { nodeAll } from '../../utils/API'
Page({
  data: {
    title: '全部节点',
    nodes: [],
    hidden: false
  },
  fetchData: function() {
    var that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: nodeAll,
      method: 'GET',
      success: function(res) {
        console.log(res);
        that.setData({
          nodes: res.data
        })
        setTimeout(function() {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
    
  },
  onLoad: function () {
    var that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: nodeAll,
      method: 'GET',
      success: function(res) {
        console.log(res);
        that.setData({
          nodes: res.data
        })
        setTimeout(function() {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
    //this.fetchData();
  }
})

