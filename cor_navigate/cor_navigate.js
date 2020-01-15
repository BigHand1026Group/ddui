// components_simple/cor_navigate/cor_navigate.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config:{
      type:Object,
      value:{
        // title:"" //标题
        // noSystemBar:true //是否不显示顶端的进度条
        // background 背景色
        // udClick: function //自定义跳转的函数 可自定义跳转的方式
        // showIcon:auto,//是否强制显示 按钮的icon 可以解决自定义的点击
        // noOccupy:false,//默认占位置
      }
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
    statusBarHeight:20,
    systemNavigate:'88rpx',
    pagesLength:0
  },
  attached(){
    this.getStatusBarHeight();
    this.getButtonBounding();
    this.setData({
      pagesLength:getCurrentPages().length
    })
    if(getCurrentPages().length<=1){
      // 前面没有页面
      this.triggerEvent("isStart",true)
    }else{
      // 前面有页面
      this.triggerEvent("isStart",false)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getStatusBarHeight(){
      var corNavigateStorage=wx.getStorageSync("corNavigateStorage")
      if(corNavigateStorage&&JSON.stringify(corNavigateStorage)!="{}"){
          // 如果本地有信息，则不获取系统的信息
          this.setData({
            systemInfo:corNavigateStorage,
            statusBarHeight:corNavigateStorage.statusBarHeight
          })
          this.triggerEvent("systemInof",corNavigateStorage)
          return;
      }
      // 本地没有数据则获取实际的数据
      wx.getSystemInfo({
        success:(res)=>{
          var navigateStorage={
            systemInfo:res,
            statusBarHeight:res.statusBarHeight+"px",
            menuButtonBoundingClientRect:this.getMenuButtonBoundingClientRect()
          }
          wx.setStorageSync("corNavigateStorage",navigateStorage)
          this.setData({
            systemInfo:res,
            statusBarHeight:res.statusBarHeight+"px"
          })
          this.triggerEvent("systemInof",navigateStorage)
        }
      })
    },
    getButtonBounding(){
      // 获取圆点的本地缓存
      var corNavigateStorage=wx.getStorageSync("corNavigateStorage")
      var menuButtonBoundingClientRect=corNavigateStorage&&corNavigateStorage.menuButtonBoundingClientRect
      if(!menuButtonBoundingClientRect){
        // 如果没有，重新赋值
        menuButtonBoundingClientRect=this.getMenuButtonBoundingClientRect();
      }
      // ↓↓↓↓↓↓↓↓↓↓ 获取园点的高度
      var height=menuButtonBoundingClientRect.height+12
      this.setData({
        systemNavigate:height+"px"
      })
      this.triggerEvent("getHeights",{statusBarHeight:parseInt(this.data.statusBarHeight),navigateHeight:height})
      
    },
    goBack(){
      // 返回上一页
      var config=this.data.config;
      if(config.udClick){
        // 可以由用户自定义跳转的方式如 wx.navigateTo 
        config.udClick()
      }else{
        wx.navigateBack({
          delta: 1
        })
      }
    },
    getMenuButtonBoundingClientRect(){
      // 获取圆点的高度 如果版本不支持则 返回默认的数值
      try{
        if(wx.canIUse && wx.canIUse("getMenuButtonBoundingClientRect")){
          return wx.getMenuButtonBoundingClientRect();
        }
      }catch(e){
        return {
          height:32
        };
      }
    }
  }
})
