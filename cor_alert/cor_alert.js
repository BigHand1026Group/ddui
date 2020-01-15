// components_simple/cor_alert/cor_alert.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    iconTypes:{
      ok:'./image/success.svg',
      fail:'./image/close.png',
      none:''
    },
    config:{},

  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    alert(config){
      // 显示弹窗
      wx.hideToast();//关闭toast
      wx.hideLoading();//关闭loading
      this.close();
      if(config&&config.image&&config.type=='none'){
        console.warn('来自cor_alert: type等于none会不显示图片')
      }
      this.setData({
        config:{
          text:config&&config.text||'',
          type:config&&config.type||'none',
          image:config&&config.image,
          show:true
        }
      })
      clearTimeout(this.setTimeoutObj);
      this.setTimeoutObj=setTimeout(()=>{
        this.close();
      },config&&config.timeout||3000)
    },
    close(){
      this.setData({
        config:{
          show:false
        }
      })
      this.triggerEvent("close");//触发关闭事件
    }
  }
})
