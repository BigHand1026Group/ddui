// components_simple/cor_dropdown/cor_dropdown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value:{
      type:String,
    },
    noActive:{
      type:Boolean
    },
    only:{
      type:String
    },
    placeholder:{
      type:String
    },
    styles:{
      type:String
    },
    icon:{
      type:String
    },
    iconWH:{
      type:String,
      observer(v){
        if(v){
          var wh=v.split("|")
          this.setData({
            iconWidth:wh[0],
            iconHeight:wh[1],  
          })
        }
      }
    },
    max:{
      type:Number
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
    iconWidth:'',
    iconHeight:'',
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
