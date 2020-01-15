// components_simple/cor_copy/cor_copy.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    copy(){
      wx.setClipboardData({
        data:this.data.text,
      })
    }
  }
})
