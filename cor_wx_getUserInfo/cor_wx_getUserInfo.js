// components_simple/cor_wx_getUserInfo/cor_wx_getUserInfo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    zindex:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show:false
  },
  attached(){
    wx.getUserInfo({
      success:(res)=>{
        this.hide()
      },
      fail:()=>{
        this.show()
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo(e){
      if(e.detail.userInfo){
        this.hide();
        this.triggerEvent('ok', e.detail.userInfo)
      }else{
        this.triggerEvent('fail')
      }
    },
    show(){
      this.setData({show:true})
    },
    hide(){
      this.setData({show:false})
    }
  }
})
