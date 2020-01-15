// components_simple/cor_limitTextarea/cor_limitTextarea.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config:{
      type:Object,
      value:{
        // max:200, //最大次数
        // min:5, // 最短字数
        // blankIsText:false,// 前后空格是否算入字符串
        // placeholder:'请描述您遇到的问题以便我们进行优化和帮助',// 
        // value:'' //
      },
      observer(config){
        if(!config)return;
        if(config.min>config.max){
          throw '最小值不应大于最大值'
        }
        if(!config.value)return;
        if(config&&config.value&&config.blankIsText){
          config.value=config.value.replace(/(^\s*)|(\s*$)/g, "")
        }
        this.setData({
          currentNum:config.value.length>=config.max?config.max:config.value.toString().length
        })
      }
    }
  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    currentNum:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imitTextareaInput(e){
      // 监听用户输入
      var value=e.detail.value
      if(this.data.config&&this.data.config.blankIsText){
        value=value.replace(/(^\s*)|(\s*$)/g, "")
      }
      this.setData({
        currentNum:value.length
      })
      this.triggerEvent("input",{value:value})
    },
    imitTextareaBlur(e){
      // 失去焦点
      var value=e.detail.value
      if(value.length<(this.data.config&&this.data.config.min)){
        // 如果输入的值小于设置的最小值
        this.triggerEvent("minErr",{min:this.data.config.min,value:value})
      }
    }
  }
})
