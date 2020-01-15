// components_simple/cor_nextBar/cor_nextBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tip:{
      type:String
    },
    value:{
      type:String
    },
    bcolor:{
      type:String
    },
    noIcon:{
      type:Boolean
    },
    contentLeft:{
      type:Boolean
    },
    color:{
      type:String
    },
    placeholder:{
      type:String
    },
    placeholderStyle:{
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
