// components_simple/cor_switch/cor_switch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      status:{
        type:Boolean,
        value:false,
        observer(value){
          this.setData({
            status:value
          })
        }
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    status:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickSwitch(){
      this.triggerEvent('change',this.data.status)
      this.setData({
        status:!this.data.status
      })
    }
  }
})
