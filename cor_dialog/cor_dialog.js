// components_simple/cor_dialog/cor_dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    btnsStyle: String, // 确认按钮样式
  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    config:{
      title:'',//标题
      text:'',//提示内容
      solt:false,//是否开启solt
      cancel:false,//是否显示取消按钮，默认不显示
      confirmText:"",//确定按钮的文字
      cancelText:"",//取消按钮的文字
      noBtn:false,//不显示下边的btn
      closeFn:false,//关闭的时候会触发该函数
      confirmFn:false,//确认的时候会触发该函数
      cancelFn:false,//取消的时候会触发该函数
    },
    show:false,

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancel(){
      this.data.config.cancelFn&&this.data.config.cancelFn(this)
      this.triggerEvent("cancel")
    },
    close(){
      this.data.config.closeFn&&this.data.config.closeFn(this)
      this.triggerEvent("close")
    },
    confirm(){
      this.data.config.confirmFn&&this.data.config.confirmFn(this)
      this.triggerEvent("confirm")
    },
    fullTap(){
      this.triggerEvent('fullTap')
    },
    dialogContent(){
      // console.log('阻止继续冒泡')
    },
    show(config){
      this.setData({
        config:{
          ...this.data.config,
          ...config
        },
        show:true
      })
      this.triggerEvent('show')
    },
    hide(){
      this.setData({
        show:false
      })
      this.triggerEvent('hide')
    }
  }
})
