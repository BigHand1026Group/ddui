// components_simple/cor_radio/cor_radio.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config:{
      type:Object,
      value:{
        // activeUrl:''
        // defalueSelect:''
        // data:''// 由外部传入的内容，在点击的时候返回给父级
      },
      observer(value){
        if(!value)return;
        if(value.defalueSelect===true||value.defalueSelect===false){
          this.setData({
            select:value.defalueSelect
          })
        }
      }
    },
    size:{
      type:String
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    select:false
  },
  options: {
    addGlobalClass: true,
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {
    select(){
      this.setData({
        select:!this.data.select
      })
      this.triggerEvent('value', {select:this.data.select,data:this.data.config&&this.data.config.data||''})
    }
  }
})
