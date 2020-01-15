// components_simple/cor_num/cor_num.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num:{
      // 显示的数字
      type:String,
      observer(v){
      }
    },
    size:{
      type:Number,
      value:20
    },
    bg:{
      type:String
    },
    w:{
      type:Number
    },
    h:{
      type:Number
    },
    has0:{
      type:Boolean
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

  }
})
