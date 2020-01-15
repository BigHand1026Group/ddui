// components_simple/cor_pageEnd/cor_pageEnd.js
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
    show:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ctrl(bool){
      this.setData({
        show:bool
      })
    }
  }
})
