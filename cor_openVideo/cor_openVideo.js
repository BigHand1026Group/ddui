// components_simple/cor_openVideo/cor_openVideo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url:{
      type:String
    },
    text:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openVideo(){
      this.setData({
        show:true
      })
      wx.hideTabBar();
    },
    clickVideo(){
    },
    clickPanel(){
      this.setData({
        show:false
      })
      wx.showTabBar()
    }
  }
})
