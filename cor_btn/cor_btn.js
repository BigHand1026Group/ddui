// components_simple/cor_btn/cor_btn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    size:{
      type:Number
    },
    bg:{
      type:String
    },
    color:{
      type:String
    },
    bcolor:{
      type:String
    },
    br:{
      type:String
    },
    type:{
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
    show:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tap(){
      // this.triggerEvent('tap') 
    },

    show(){
      this.setData({show:true})
    },
    hide(){
      this.setData({show:false})
    }
  }
})
