// components_simple/cor_nUllChin/cor_nUllChin.js
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
    isNUllChin:false,//是否0下巴，如果是则需要兼容，如iPhonex 机型
  },
  ready(){
    this.nUllChinPhone();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    async nUllChinPhone(){
      var sys = getApp().getSystemInfo();
      var model = sys.model.toLowerCase();
  
      // 判断当前是否iphoneX
      var is_iphonex = /iphone\D*x/i.test(model);
      is_iphonex = is_iphonex || /iphone\D*xs|iphone11\,2/i.test(model);
      is_iphonex = is_iphonex || /iphone\D*xr|iphone11\,8/i.test(model);
      is_iphonex = is_iphonex || /iphone\D*xs\D*max|iphone11\,(4|6)/i.test(model);
      this.setData({
        isNUllChin:is_iphonex
      })
    },
    getDOMInfo(o){
      // o.DOMName 选择的DOM 名称
      // 
      return new Promise((resolve,reject)=>{
        this.createSelectorQuery().select(o.DOMName).fields({
          dataset: true,
          size: true,
          scrollOffset: true,
          properties: ['scrollX', 'scrollY'],
          computedStyle: ['margin', 'backgroundColor'],
          context: true,
        },(res)=>{
          resolve(res)
        }).exec()
      })
    },
  }
})
