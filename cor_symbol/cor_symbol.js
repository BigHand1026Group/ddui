// components_simple/cor_symbol/cor_symbol.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    symbol:{
      type:String
    },
    symbolSite:{
      type:String,
      value:"before"
    },
    text:{
      type:String
    },
    same:{
      // 符号和文字一致
      type:Boolean
    },
    size:{
      // 大小
      type:String
    },
    color:{
      // 颜色
      type:String
    },
    symbolSize:{
      // 符号的大小
      type:String
    },
    symbolColor:{
      // 符号的颜色
      type:String
    },
    styles:{
      type:String
    }
  },
  options: {
    addGlobalClass: true,
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
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

  }
})
