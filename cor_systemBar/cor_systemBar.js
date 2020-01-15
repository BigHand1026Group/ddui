// components/cor_systemBar/cor_systemBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config:{
      type:Object,
      value:{
        // noOccupi:true // 不占位
      },
      observer(value){
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    systemInfo:{},
    statusBarHeight:0+'px'
  },
  attached(){
    this.getStatusBarHeight();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getStatusBarHeight(){
      wx.getSystemInfo({
        success:(res)=>{
          this.setData({
            systemInfo:res,
            statusBarHeight:res.statusBarHeight+"px"
          })
          this.triggerEvent("systemInof",res)
        }
      })
    },
  }
})
