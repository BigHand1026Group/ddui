// components_simple/cor_simple_countDown/cor_simple_countDown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    max:{
      type:Number
    },
    text:{
      type:String
    },
    activeText:{
      type:String
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
    num:0
  },
  created() {
    this.time=null;
  },
  attached(){
    this.init();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    init(){
      var text=this.data.text
      this.setData({
        num:text
      })
    },
    start(){
      // 开始倒计时
      if(this.data.status)return;
      this.triggerEvent('start')
      var num=this.data.max||60;
      this.setData({num:num,status:1})
      this.time=setInterval(()=>{
        if(num<=0){
          clearInterval(this.time)
          this.setData({status:0})
          this.triggerEvent('end')
          this.init();
        }else{
          this.setData({
            num:num--
          })
        }
      },1000)
    }
  }
})
