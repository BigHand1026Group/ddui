// components_simple/cor_input/cor_input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value:{
      type:String
    },
    iconUrl:{
      type:String
    },
    label:{
      type:String
    },
    noIcon:{
      type:Boolean
    },
    placeholder:{
      type:String
    },
    symbol:{
      type:String
    },
    type:{
      type:String
    },
    password:{
      type:Boolean
    },
    bcolor:{
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
    input(e){
      this.triggerEvent("input",e.detail)
    },
    blur(e){
      this.triggerEvent("blur",e.detail)
    },
    clear(){
      this.setData({
        value:""
      })
      this.triggerEvent("clear")
    }
  }
})
