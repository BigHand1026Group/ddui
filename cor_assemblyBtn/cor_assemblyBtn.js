// components_simple/cor_assemblyBtn/cor_assemblyBtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config:{
      type:Object,
      observer(v){
        this.setData({
          active:v.active||false
        })
      }
      // btnHeadUrl:'https://zsstory.oss-cn-shenzhen.aliyuncs.com/other/sc_index/active_head.png',
      // btnBottomUrl:'https://zsstory.oss-cn-shenzhen.aliyuncs.com/other/sc_index/active_bottom.png',
      // btnCenterUrl:'https://zsstory.oss-cn-shenzhen.aliyuncs.com/other/sc_index/active_center.png'
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
    active:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
