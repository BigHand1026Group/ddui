// components_simple/cor_dialog/cor_dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    addGlobalClass: true,
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的初始数据
   */
  data: {
    config:{
    },
    show:false,
    list:[]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    show(o){
      var config=this.data.config;
      config.title=o.title;
      o.before===false?config.before=false:config.before=true;
      o.after===false?config.after=false:config.after=true;
      this.setData({
        list:o&&o.list,
        config:config,
        key:o&&o.key?o.key:[],
        showOmit:o&&o.showOmit, 
        show:true
      })
    },
    hide(){
      this.setData({
        show:false
      })
    },
    close(){
      this.hide();
    }
  }
})
